const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


app.get("/hello", (req, res) => {
  res.send("Hello Express World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
