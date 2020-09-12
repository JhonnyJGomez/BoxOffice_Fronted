// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //webApiBase: 'https://e7ab2689-0ed3-4f68-a475-23557a86226e.mock.pstmn.io',
  webApiBase: 'http://localhost:3000/api',
  azure: `https://ussouthcentral.services.azureml.net/workspaces/
    67e04638658949d8a650452a02b98bdb/services/06c5630cea5f4c8582fc75ef66b228ab/execute?api-version=2.0&format=swagger`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
