# tamakonchi

## Setup Local Develop Environment

### Prerequisite

- should be installed node (10.15.3)
- should be installed yarn (as latest as possible)

### Procedure

#### Install
```bash
git clone https://github.com/omoushi/tamakonchi.git
cd tamakonchi
yarn install
```

#### For iOS
You should install [Xcode in App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) before below command.
```bash
xcode-select --install
yarn -s run react-native run-ios
```

#### For Android（TODO）
```bash
yarn -s run react-native run-android 
```
