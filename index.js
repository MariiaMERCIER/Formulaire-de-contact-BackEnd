const express = require("express");
const cors = require("cors");
const Mailgun = require ("mailgun.js");
const formData = require ("form-data");
require("dotenv").config();

const app = express();
app.use(express.json())
app.use(cors());

const mailgun= new Mailgun(formData);
const client = mailgun.client({
    username: "Mariia MERCIE",
    key: '08ca4310aa21e1570ba41a56f93206bc-8845d1b1-16f0b1cd',
});


app.post("/form", async (req, res)=>{
   console.log(req.body);
try {
    const messageData = {
    from: `${req.body.nom} ${req.body.prenom} <${req.body.email}>`,
    to: 'marieivanchenko94@gmail.com',
    sujet: req.body.sujet,
text: req.body.message,
}

// res.json(messageData)

const response = await client.messages.create('sandboxc88414c468ce4db693e3164d6693493f.mailgun.org', messageData);
// console.log(response);
res.status(200).json({message: "Email envoyé"})
} catch (error) {
     res.status(err.status).json({message: err.message})
// })
}

// client.messages
// .create(, messageData)
// .then((response)=>{
//     console.log(response);
//   
// })
// .catch((err)=>{
//    
});
app.listen(3000,()=>{
console.log("Server started");

});