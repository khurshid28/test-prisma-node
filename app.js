
const express = require("express");
const app = express();
const port = 3000;
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


app.get("/", function (req, res) {
  res.send("Hello World!");
});


app.get("/data",async (req,res)=>{
    const users = await prisma.user.findMany();
    res.send(users)
})

app.get("/profile",async (req,res)=>{
    const profiles = await prisma.profile.findMany();
    res.send(profiles)
})
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
