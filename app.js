
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const date = require(__dirname + "/date.js")

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
var items = [];
let workItems = [];

app.get("/", (req, res) => {
    let day = date.getDate();

   res.render("list", {listTitle: day, newListItems: items});


})

app.post("/" , (req, res)  => {
    list = req.body.newItem;
    console.log(req.body)
    if(req.body.button === "work list"){
        workItems.push(list)
        res.redirect("/work")
    }   else{
        items.push(list);

        res.redirect("/")
    }



})

app.get("/work", (req, res) => {
    res.render("list" , {listTitle: "work list", newListItems: workItems})

})

app.get("/about", (req, res) => {
    res.render("about")
})

app.listen(3000, () => {
    console.log("server is running")
})