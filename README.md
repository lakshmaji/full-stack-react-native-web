## Instructions

#### Requirements
|tool/package   |version   |
|-------------|--------:|
|node|v12.16.1|
|npm|6.13.4|
|yarn|1.22.4|
|react-native|0.62.0|
|react-native-web|^0.12.2|
|react-navigation|^4.3.5|
|react-router-dom|^5.1.2|
|redux|^4.0.5|



Note: Not sure whether this app will run on older versions of node (npm)

#### Installation
- Install dependencies: 
`yarn` in local directory

#### Running
- Run application on android:
`yarn workspace mobile start`
`yarn workspace mobile android`

- Run application in a web browser:
`yarn workspace web start`

#### Build
 - Android - Move to android project directory
 `cd packages/mobile/android`
 - Android - Generate android build - **apk**: 
 `./gradlew assembleRelease`
 - Web - generate build 
 `yarn workspace web build`


## TODO
1. See whether we can use [Lerna](https://github.com/lerna/lerna) to manage this workspace. (currently this was built using yarn workspaces)
1. Replace **axios** with **fetch**
1. Remove **redux-saga** integration and add **custom api middleware** to handle asyn operations
1. Reorganize components folder structure.(replace **views** directory with **containers/components** directory.
1. Upgrade **react-navigation** to **5.x**
1. Add **typescript** support and add corresponding typings in respective server and client files.
1. Add **Lint**
1. Setup CI
1. Global **error handler**
1. Theming changes (Im not at this) 
1. Add support for **desktop(electron)** version
1. Replace current authentication logic with **Authentication (Context) Hooks**
1. Write more integration test for API / Models
1. Add front end test support (may be **enzyme/puppeteer/cypress**) - need to see if one is sufficient
1. Add some example features to illustrate the **useNavigation** hook 
1. Use **asyn-storage** from(*react-native-community*) for web version once they had stable release. Remove callstack web storage library.
