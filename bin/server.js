const api = require('../api');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use('/api/', api);

app.listen(port, () => {
  console.log(`api is running at http://0.0.0.0:${port}`);
});
