const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4040;
const app = express();
const routes = require('./routes/app')

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Define API routes here

// document.addEventListener(onstorage) {
//   window.location.reload(true);
// }

  app.use(express.static(path.join(__dirname, 'views')));
// });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});