const express = require("express")
const path = require("path")
const app = express();

app.use(express.static('public'));

app.listen(80, () => {
    console.log("✅ In Your Dreams Site Running")
});