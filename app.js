// //Require modules.
// const express = require("express");
// const bodyParser = require("body-parser");
//
// //Bind express module.
// const app = express()
// //use bodyParser module.
// app.use(bodyParser.urlencoded({extended: true}));
//
//
// //Static files to send to clients browser.
// app.use(express.static("public"));
//
//
// //access property "get" to send a request or responce/route.
// app.get("/", function(req,res) {
//   res.sendFile(__dirname + "/index.html"); //responce when browser loads up for first time is to send an entire html file.
// });
// //
// // app.post("/", function(req,res) {
// //
// //     let photo = req.body.photo;
// //     let fName = req.body.fname;
// //     let lName = req.body.lName;
// //     res.sendFile(__dirname + "/index.html");
// //     res.write(fName.textContent = "Barry" )
// //     res.write(lName.textContent = "white")
// //     res.send();
// //
// //     // res.send(fName = "barry")
// //
// //
// //
// //
// //
// // // res.write("button pressed");
// //
// //
// // });
//
// //what to do when port is detected.
// function portListen() {
//   console.log("Server started on port 3000")
// }
//
// //Port Listener.
// app.listen(process.env.PORT || 3000, portListen);
