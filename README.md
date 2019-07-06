# seiga.ga
This is my portfolio site with Next.js SSR on Firebase

#### Technology Stacks
* Next.js 8
* Firebase Hosting
* Cloud Functions for Firebase

#### Requirement
* Node.js 8

### How to use
#### Set up firebase

- install Firebase Tools: `npm i -g firebase-tools`
- create a project through the [firebase web console](https://console.firebase.google.com/)
- grab the projects ID from the web consoles URL: https://console.firebase.google.com/project/<projectId>
- update the `.firebaserc` default project ID to the newly created project
- login to the Firebase CLI tool with `firebase login`

#### Install project:

```bash
npm install
```

#### Run Next.js development:

```bash
npm run dev
```

#### Run Firebase locally for testing:

```bash
npm run serve
```

#### Deploy it to the cloud with Firebase:

```bash
npm run deploy
```

#### Clean dist folder

```bash
npm run clean
```
