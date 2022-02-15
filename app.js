const express = require("express")
const server = express()
const bodyparser = require("body-parser")

server.use(bodyparser.json())

server.use("/", require("./Routes/index"))

server.listen(3000, (err, res) => {
  if (err) console.log("Error " + err)
  else console.log("App is listening at port 3000")
})
