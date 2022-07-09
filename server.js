const express = require("express");
const cors = require("cors");
const mongoose=require("mongoose")
require('dotenv').config()
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
mongoose.connect(process.env.DB_URI,{
    dbName:process.env.DB_NAME,
    user:process.env.DB_USER,
    pass:process.env.DB_PASS,
    useNewURLParser:true,
    useUnifiedTopology: true
  })
  .then(()=>console.log('connected'))
  .catch(err=>console.log(err))

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
// set port, listen for requests
require("./app/routes/tutorial.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});