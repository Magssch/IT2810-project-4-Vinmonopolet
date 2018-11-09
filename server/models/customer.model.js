import mongoose from 'mongoose';

//lokalt:
const server='it2810-46.idi.ntnu.no:27017'
const database='prosjekt4'
const user = null
const password = null

//Connect to the database(only done once)
//mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)
mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true } )

//Schema need to specify in mongodb for validation
//this is done in application layer
let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  }
})

//Export schema as mongoose model
export default mongoose.model('customers', CustomerSchema);