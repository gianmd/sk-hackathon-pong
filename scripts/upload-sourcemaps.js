const { upload } = require('bugsnag-sourcemaps');
const { resolve } = require('path');

upload({
  apiKey: '0fd29319e5f2fa04921ebe5d4ed0ea7f',
  directory: true,
  projectRoot: resolve(__dirname, '../dist/ease'),
  overwrite: true
})
  .then(() => {
    console.log('Finished uploading sourcemaps');
  })
  .catch(err => console.log('Error uploading sourcemaps', err));
