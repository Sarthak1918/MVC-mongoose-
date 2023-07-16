require('dotenv').config()
const express = require('express')
const morgan = require('morgan') //third-party middleware
const mongoose = require('mongoose')
const cors = require('cors')
const server = express();
const productRouter = require('./routes/routes');  //at first we are using all the methods on server itself(top level) but for an big project it is not suggested so we can use router.align-items-center
                                         //we created the Router and we can use any method (get put post ...) but we did not make any connection with server thats why we need middlewares.align-items-center
const path = require('path')

                                         //db pass
// console.log(process.env.DB_PASSWORD) 

//db connection

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("DB connected")
}







//bodyPaser
server.use(cors());
server.use(express.json());   //body parser
server.use(morgan("default"));
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));  //dirname is a special variable that gives the path of current directory.Path.resolve is a method/middleware that creates path for you
server.use('/products',productRouter.router)      //no we created the connection between server and router.
server.use("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})




server.listen(8080 , () => {
    console.log("server started");
});


