monorepo sample
===============

monorepo sample with lerna

https://github.com/lerna/lerna

To Run
------

### install lerna

At 2016/11/05, installing pre-release version is recommended

```sh
npm install -g lerna@prerelease
```

or

```sh
yarn -g lerna@prerelease
```

### install dependencies

Firs of all, run `git clone`

```sh
# for top level dependencies
npm install
# or
yarn

# package
lerna bootstrap
```

### run

On iOS, open packages/mobile/ios/mobile.xcodeproj and push Run button.

![iOS screen shot](https://github.com/januswel/lerna-sample/raw/images/images/ios.png)

On Android, `react-native run-android`

![Android screen shot](https://github.com/januswel/lerna-sample/raw/images/images/android.png)
