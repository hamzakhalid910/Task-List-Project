const express = require("express")
const app = express()
require("./db conn/connection");

app.listen(4000,()=>{
    console.log("server running on port 4000");
})

