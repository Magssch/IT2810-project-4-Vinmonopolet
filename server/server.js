import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import customerRoute from './routes/customer'
import productRoute from './routes/product'
import mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json());
app.use(productRoute);
app.use(customerRoute);

app.use((req,res,next) => { 
  console.log(`${new Date().toString()} => ${req.originalUrl}`,req.body);
  next()
});

//lokalt:
// const server=process.env.NODE_ENV;
const server = 'mongodb://it2810-46.idi.ntnu.no:27017/test'

//Connect to the database(only done once)
//mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)
mongoose.connect(server, { useNewUrlParser: true } )


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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
var PORT = 12000;

module.exports = app.listen(PORT, () => console.info(`Server has started on ${PORT}`));

//here
