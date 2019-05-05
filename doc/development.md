# Development Memorandum
This page describes about we understood via development. 
It will be useful when other developer has been wondered about same matter.

## react-navigation unmet dependency
When you execute `yarn`, then you see below warning messages. 
This message is because react-native-screen does **irregular** version numbering (like 1.0.0-alpha.xx). 
You don't have to worry about it.
```
warning "react-navigation > react-navigation-drawer@1.2.1" has unmet peer dependency "react-native-screens@^1.0.0 || ^1.0.0-alpha".
warning "react-navigation > react-navigation-stack@1.3.0" has unmet peer dependency "react-native-screens@^1.0.0 || ^1.0.0-alpha".
warning "react-navigation > react-navigation-tabs@1.1.2" has unmet peer dependency "react-native-screens@^1.0.0 || ^1.0.0-alpha".
```
