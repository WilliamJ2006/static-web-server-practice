const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

const pathToFrontend = path.join(__dirname, '../frontend/dist');
const serveStatic = express.static(pathToFrontend);
app.use(serveStatic);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
