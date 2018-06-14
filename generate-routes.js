// Required to import .ts file
require('ts-node/register');

const { appRoutes } = require('./src/app/app.routes.ts');
const { join } = require('path');
const { writeFileSync } = require('fs');
const axios = require('axios');

const DIST_FOLDER = join(process.cwd(), 'dist', 'browser');

async function fetchRoute(route) {
  let response = await axios.get(`http://localhost:4000/${route}`);

  if (response.status !== 200) {
    throw new Error(`Bad times! Status code: ${response.status}`);
  }
  return response.data;
}

appRoutes
  .filter(route => route.path !== '**')
  .map(route => route.path)
  .forEach(route => {
    fetchRoute(route).then(data => {
      const filename = route === '' ? 'index-universal.html' : route;
      const filepath = join(DIST_FOLDER, filename);
      writeFileSync(filepath, data);
      console.log(`Route generated: ${filepath}`);
    });
  });
