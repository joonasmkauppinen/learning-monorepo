# multi-semantic-release

This branch uses [multi-semantic-release](https://github.com/dhoulb/multi-semantic-release) library to enable [semantic-release](https://github.com/semantic-release/semantic-release) to work on monorepos.

Even though **multi-semantic-release** is described as "janky" by its author, it still seems to be the best way to bring semantic-release support to monorepos.

If it turns out that multi-semantic-release doesn't work for us or it stops working with future versions of semantic-release, we can always just remove it and switch to manual versioning and releasing. Although this will be a lot of small and tedious work. So let's hope this never happens 🤞

[Here's an article comparing the different libraries aiming to make semantic-release work in monorepos.](https://dev.to/antongolub/the-chronicles-of-semantic-release-and-monorepos-5cfc)

## How it works

In the source code we'll always have the package version as `1.0.0`. In the release step the version will be updated based the commits and the latest tag pushed to the repository.

```js
// package.json

{
  "name": "@organization/package-name",
  "version": "1.0.0",                          <--- Fixed version locally. Updates in the release step based on repo tags.
  "dependencies": {
    "@organization/common-local-package": "*"  <--- Updates in the release step based on repo tags.
  }
}
```

We could push the updated `package.json` back to the repo, but then we'd have a fixed version number for our `common-local-package` and that might cause issues while developing locally.

> **NOTE:** This is actually what we do in the current single repo Arkki. But it's not a problem because we don't have any local dependencies.

The good thing about multi-semantic-release updating the package version like this, is that it will also create separate patch releases for the other monorepo packages that depend on the common package. [See the releases of this repo.](https://github.com/joonasmkauppinen/learning-monorepo/releases)

Here's an example of what the final `package.json` file will look like in the published package. [See the packages of this repo for more.](https://github.com/joonasmkauppinen?tab=packages&repo_name=learning-monorepo)

```js
{
  "name": "@joonasmkauppinen/sample-stuff-native",
  "version": "1.1.0",
  "main": "index.ts",
  "license": "MIT",
  "repository": "https://github.com/joonasmkauppinen/learning-monorepo",
  "devDependencies": {
    "@types/react-native": "^0.64.13",
    "react-native": "^0.65.1"
  },
  "peerDependencies": {
    "react-native": "^0.65.1"
  },
  "dependencies": {
    "@joonasmkauppinen/sample-stuff-common": "1.1.0"
  }
}
```

## Still needs to be tested

- [ ] Can we use different sematic-release configuration for different packages? Useful for apps in the monorepo and also we don't want to publish the common package, but might want to still generate changelog for it. It's noted in the multi-semantic-release docs that this is possible.
- [ ] Can we commit the generated changelog back in to the correct packages folder.
- [ ] Can we create pre-releases in a monorepo the same way it works in single repo.
