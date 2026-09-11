const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3030;
const Chat = require("./Models/chat.js");
app.set("view engine", "ejs");

//method-override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
//post req
app.use(express.urlencoded({extended : true}));

//favicon
app.use(express.static("assets"))
app.listen(port, () => {
  console.log(`App is listening at ${port}`);
});

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
  .then(() => {
    console.log("Connection Succesful");
  })
  .catch((err) => {
    console.log(err);
  });

let chat2 = new Chat({
  from: "Instamart",
  to: "Blinkit",
  msg: "Want to buy your Cheap Company",
  Date: new Date(),
});

// chat2.save().then((res) =>{
//   console.log(res)
// }).catch((err) =>{
//   console.log(err)
// });


app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("home.ejs", { chats });
});

// NEW ROUTE
app.get("/chats/new" , (req,res) =>{
  res.render("new.ejs")
});

// CREATE ROUTE

app.post("/chats" , (req , res)=>{
  let {from , to , msg} = req.body;
  let newChat = new Chat({
    from : from,
    to : to,
    msg : msg,
    Date : new Date()
  });
  newChat.save().then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err);
  });
  res.redirect("/chats")
});

app.get("/chats/:id" ,async (req , res) => {
  let {id} = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs" , {chat});
});

//PATCH

app.patch("/chats/:id" , async (req,res) =>{
  let {id} = req.params;
  await Chat.findByIdAndUpdate(id , {
    msg : req.body.msg
  });
  res.redirect("/chats")
});

//DELETE 

app.delete("/chats/:id" , async (req,res) =>{
  let {id} = req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chats")
});

// Chat.findByIdAndDelete("6aa064841b3f020554364df6")
//   .then((res) => console.log(res))
//   .catch((err) => {
//     console.log(err);
//   });
