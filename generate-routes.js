// Required to import .ts file
require('ts-node/register');

const { appRoutes } = require('./src/app/app.routes.ts');
const { writeFileSync, mkdirSync , existsSync } = require('fs');
const axios = require('axios');

async function fetchRoute(route) {
  let response = await axios.get(`http://localhost:4000/${route}`);

  if (response.status !== 200) {
    throw new Error(`Bad times! Status code: ${response.status}`);
  }
  return response.data;
}

appRoutes
  .map(route => {
    if (route.path === '') return '';
    return `/${route.path}`;
  })
  .forEach(route => {
    fetchRoute(route).then(data => {
      const path = `dist/browser${route}`;

      if (!existsSync(path)) mkdirSync(path);

      writeFileSync(`${path}/index.html`, data);

      console.log(`Route generated: ${path}/index.html`);
    });
  });
