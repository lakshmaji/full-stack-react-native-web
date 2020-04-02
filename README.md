To install dependencies: 
`yarn` in local directory

To run project mobile projects:
`yarn workspace mobile start`
`yarn workspace mobile android`

To run web project:
`yarn workspace web start`

To build android: 
Run `./gradlew assembleRelease` in android folder.

To push APK to android mobile device:
`adb install -r app/build/outputs/apk/release/app-release.apk`

To build web:
`yarn workspace web build`





/*  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },*/
