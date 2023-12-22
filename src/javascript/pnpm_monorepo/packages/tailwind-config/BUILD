load("@aspect_rules_js//npm:defs.bzl", "npm_package")
load("@npm//:defs.bzl", "npm_link_all_packages")

# Links all node_modules packages.
npm_link_all_packages(name = "node_modules")

# A rule that packages sources into a directory (a tree artifact) and provides an NpmPackageInfo.
npm_package(
    name = "tailwind-config",
    srcs = [
        "package.json",
        "postcss.config.cjs",
        "tailwind.config.cjs",
        ":node_modules/autoprefixer",
        ":node_modules/postcss",
        ":node_modules/tailwindcss-animate",
    ],
    # This is a perf improvement; the default will be flipped to False in rules_js 2.0
    include_runfiles = False,
    package = "@pnpm-workspace/tailwind-config",
    visibility = ["//visibility:public"],
)
