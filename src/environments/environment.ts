// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  prodMode: false,
  firebase: {
    apiKey: 'AIzaSyCnZbZFNjg0kTuLtQHFrabzut5oQLd8kHg',
    authDomain: 'sk-pong.firebaseapp.com',
    databaseURL: 'https://sk-pong-default-rtdb.firebaseio.com',
    projectId: 'sk-pong',
    storageBucket: 'sk-pong.appspot.com',
    messagingSenderId: '813146741927',
    appId: '1:813146741927:web:4c377ec703932fdc8ecf82',
    measurementId: 'G-TM72R8MB09'
  }
};
