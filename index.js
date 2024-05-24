const express = require("express")
const path = require("path")
const app = express();

app.use(express.static('public'));

app.listen(7000, () => {
    console.log("✅ Anaphylaxis Site Running")
});