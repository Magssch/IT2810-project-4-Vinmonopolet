import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import customerRoute from './routes/customer'
import productRoute from './routes/product'
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.load({path: '.env'});

app.use(bodyParser.json())
app.use(productRoute)
app.use(customerRoute)

app.use((req,res,next) => { 
  console.log(`${new Date().toString()} => ${req.originalUrl}`,req.body)
  next()
})


//lokalt:
const server=process.env.MONGODB_IDI_URI;

//Connect to the database(only done once)
//mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)
mongoose.connect(server, { useNewUrlParser: true } )


app.use(customerRoute)
app.use(productRoute)
app.use(express.static('public'))


// Handler for 404 - Resource not found
app.use((req,res,next) => {
  res.status(404).send("We think you are lost!")
})

// Handler for 500
app.use((err,req,res,next) => {
  console.error(err.stack)
  res.sendFile(path.join(__dirname,'../public/500.html'))
})
var PORTS = [4000,8000,12000,15000] // || process.env.PORT;
var PORT = 12000;

function setPort() {
  PORT = PORTS[Math.floor(Math.random()*PORTS.length)];
}

function startServer() {
  try {
    app.listen(PORT, () => console.info(`Server has started on ${PORT}`));
  } catch(err) {
    setPort();
    startServer();
  }
}
// startServer();
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));

//here