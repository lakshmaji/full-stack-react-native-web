##  Introduction
 This is a sample application which contains web/mobile and server code in a single repository (Mono Repo approach). Following are some goals of this application
 1. Mono repo.
 1. Lets to have common functional logic / common utilities shared across server and client code. 
 1. Lets you to have completely different UI for web and mobile. Or you can share the some parts of UI or Similar/Same UI.
 
Following are some of drawbacks
1. Sharing either server or client code with some of the other team members 
1. Deployment cycle
1. More prone to conflicts 
 
## Features
1. Express server -nodejs application
1. Server with CORS support  
1. API integration tests with jest and supertest
1. Can run on both mobile and web (tested on Android and web)
1. Supports svg image imports
1. Navigation for both web and mobile
1. Redux
1. axios and redux-saga integrations to deal with asynchronous actions
1. Supports both web and mobile storages
1. JWT based Authentication and middlewares

## Installation Instructions

- Clone repository
- Checkout to **navigation** branch

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
- [ ] See whether we can use [Lerna](https://github.com/lerna/lerna) to manage this workspace. (currently this was built using yarn workspaces)
- [ ] Replace **axios** with **fetch**
- [ ] Remove **redux-saga** integration and add **custom api middleware** to handle asyn operations
- [ ] Reorganize components folder structure.(replace **views** directory with **containers/components** directory.
- [ ] Upgrade **react-navigation** to **5.x**
- [ ] Add **typescript** support and add corresponding typings in respective server and client files.
- [ ] Add **Lint**
- [ ] Setup CI
- [ ] Global **error handler**
- [ ] Theming changes (Im not at this) 
- [ ] Add support for **desktop(electron)** version
- [ ] Replace current authentication logic with **Authentication (Context) Hooks**
- [ ] Write more integration test for API / Models
- [ ] Add front end test support (may be **enzyme/puppeteer/cypress**) - need to see if one is sufficient
- [ ] Add some example features to illustrate the **useNavigation** hook 
- [ ] Use **asyn-storage** from(*react-native-community*) for web version once they had stable release. Remove callstack web storage library.
