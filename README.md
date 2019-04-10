# tamakonchi

[![Greenkeeper badge](https://badges.greenkeeper.io/omoushi/tamakonchi.svg)](https://greenkeeper.io/)

たまごっちみたいなアプリ作ってみる。

# Setup Local Develop Environment

## Prerequisite

- should be installed node (10.15.3)
- should be installed yarn (as latest as possible)

## Procedure

### Install
```bash
git clone https://github.com/omoushi/tamakonchi.git
cd tamakonchi
yarn install
```

### For iOS
You should install [Xcode in App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) before below command.
```bash
xcode-select --install
yarn -s run react-native run-ios
```

#### Error Handling
You may see below log in Metro Bundler console. This is because build has been late.    
```
oading dependency graph...events.js:174
      throw er; // Unhandled 'error' event
      ^
Error: ENOENT: no such file or directory, lstat ...
```
So If you execute `run-ios` again and reload iPhone Simulator, you can see 'Welcome' screen. 
 

### For Android
You should do some process before start up android.
What you should do is below section in [React-Native's Getting Started](https://facebook.github.io/react-native/docs/getting-started).  

- React Native CLI Quickstart tab
    - Installing dependencies
        - Java Development Kit
        - Android development environment
    - Preparing the Android device

You need to launch AVD emulator before run app. Then, start up it. 
```bash
yarn -s run react-native run-android 
```
