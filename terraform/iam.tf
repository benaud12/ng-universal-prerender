data "aws_iam_policy_document" "assume_role" {
  effect = "Allow"

  actions = [
    "sts:AssumeRole"
  ]

  principals = {
    type        = "Service"
    identifiers  = ["codebuild.amazonaws.com"]
  }
}

resource "aws_iam_role" "default" {
  name               = "${var.iam_role_name}"
  assume_role_policy = "${data.aws_iam_policy_document.assume_role.json}"
}

data "aws_iam_policy_document" "s3" {
  statement {
    effect = "Allow"

    actions = [
      "s3:*"
    ]

    resources = [
      "${aws_s3_bucket.website.arn}",
      "${aws_s3_bucket.website.arn}/*",
      "${aws_s3_bucket.cache.arn}",
      "${aws_s3_bucket.cache.arn}/*"
    ]
  }
}

resource "aws_iam_role_policy" "example" {
  role   = "${aws_iam_role.default.name}"
  policy = "${data.aws_iam_policy_document.s3.json}"
}
