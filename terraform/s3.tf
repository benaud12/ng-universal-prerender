resource "aws_s3_bucket" "cache" {
  bucket = "codebuild-${var.codebuild_project_name}-cache"
  acl    = "private"
}

resource "aws_s3_bucket" "website" {
  bucket = "${var.website_bucket_name}"
  policy = "${data.aws_iam_policy_document.website_bucket.json}"

  website {
    index_document = "index-universal.html"
    error_document = "index.html"
  }

  tags {}
}

data "aws_iam_policy_document" "website_bucket" {
  statement {
    effect = "Allow"

    actions = [
      "s3:DeleteObject",
      "s3:GetObject",
      "s3:GetObjectAcl",
      "s3:PutObject",
      "s3:PutObjectAcl",
    ]

    resources = [
      "${aws_s3_bucket.website.arn}",
      "${aws_s3_bucket.website.arn}/*"
    ]

    principals = {
      type        = "AWS"
      identifiers  = ["${aws_iam_role.default.arn}"]
    }
  }

  statement {
    effect = "Allow"

    actions = [
      "s3:ListBucket",
    ]

    resources = [
      "${aws_s3_bucket.website.arn}",
      "${aws_s3_bucket.website.arn}/*"
    ]

    principals = {
      type        = "AWS"
      identifiers  = ["${aws_iam_role.default.arn}"]
    }
  }

  statement {
    effect = "Allow"

    actions = [
      "s3:GetObject",
    ]

    resources = [
      "${aws_s3_bucket.website.arn}/*"
    ]

    condition {
      test     = "IpAddress"
      variable = "aws:SourceIp"
      values   = ["${var.website_bucket_allowed_ip_addresses}"]
    }

    principals = {
      type        = "AWS"
      identifiers = ["*"]
    }
  }
}
