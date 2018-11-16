import mongoose from 'mongoose';

//lokalt:
//Connect to the database(only done once)
//mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

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