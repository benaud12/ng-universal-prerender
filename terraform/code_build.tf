resource "aws_codebuild_project" "example" {
  name         = "${var.codebuild_project_name}"
  description  = "${var.codebuild_project_description}"
  build_timeout      = "5"
  service_role = "${aws_iam_role.default.arn}"

  artifacts {
    type = "NO_ARTIFACTS"
  }

  cache {
    type     = "S3"
    location = "${aws_s3_bucket.cache.bucket}"
  }

  environment {
    compute_type = "BUILD_GENERAL1_SMALL"
    image        = "aws/codebuild/nodejs:10.1.0"
    type         = "LINUX_CONTAINER"
  }

  source {
    type            = "GITHUB"
    location        = "${var.codebuild_github_source}"
    git_clone_depth = 1
  }
}