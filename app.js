const router = require("../YelpCamp/routes/comments");

let express = require("express"),
    app     = express(),
    bodyParser  = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("index");
});

app.listen(3000, () => {
    console.log(`App listening!`)
  })