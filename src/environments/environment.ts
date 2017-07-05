// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase  : {
    apiKey           : 'AIzaSyCBxZub-nX_LxmOl6knYuUuDiWTnB7L-XY',
    authDomain       : 'jazz-afb19.firebaseapp.com',
    databaseURL      : 'https://jazz-afb19.firebaseio.com',
    projectId        : 'jazz-afb19',
    storageBucket    : 'jazz-afb19.appspot.com',
    messagingSenderId: '952747771389'
  }
};
