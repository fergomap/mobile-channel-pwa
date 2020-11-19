<h1 align="center">
  Mobile Channel PWA
  <br>
  <br>
  <img src="https://raw.githubusercontent.com/fergomap/mobile-channel-pwa/master/public/lock.png" alt="lock" width="150">
</h1>

<h3 align="center">
PWA developed with React + Typescript + Firebase. It allows the user to log in, check the elapsed time since the last time he/she logged in, and log out.
</h3>
<br>

<img src="https://img.shields.io/appveyor/build/gruntjs/grunt" alt="build" />
<img src="https://img.shields.io/azure-devops/coverage/swellaby/opensource/25" alt="coverage" />

# Hosting

The project is hosted at https://mobile-channel-pwa.firebaseapp.com.

# Set up

```
npm install
```

# Scripts

| Script | Description |
| - | - |
| `npm run start` | Run the project. |
| `npm run build` | Create the production build. |
| `npm run deploy` | Create the production build and deploy the app to the firebase hosting.  |
| `npm run lint` | Run ESLint to check if the code has any problem. |
| `npm run test` | Run jest to test all the project. |
| `npm run test:watch` | Run jest to test all the project and keeps watching for updates. |
| `npm run test:coverage` | Run jest to test all the project and generates a coverage report in /coverage/Icov-report/index.html. |
| `npm run cypress:open` | Run cypress UI with all the end2end tests. |
