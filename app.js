const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("my is dfdf")
})

app.get("/about", function (req, res) {
    res.send("this is first abt page")
})

app.listen(90)