variable "codebuild_project_name" {
  default = "ng-universal-prerender"
}

variable "codebuild_project_description" {
  deafult = "Build and deploy for ng-universal-prerender demo"
}

variable "codebuild_github_source" {
  default = "https://github.com/Benaud12/ng-universal-prerender.git"
}

variable "website_bucket_name" {
  default = "ng-universal.micks-bits.co.uk"
}

variable iam_role_name {
  default = "ng-universal-prerender-build"
}

variable "website_bucket_allowed_ip_addresses" {
  default = "${data.cloudflare_ip_ranges.cloudflare.ipv4_cidr_blocks}"
}
