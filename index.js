const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const User = require('./models/Users');

const mongoURI = `mongodb+srv://shivamt0407:2tm7i6o1AxhJ3NTb@cluster0.k3f3bi3.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(mongoURI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
     
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch(e){
        console.log(e);
    }
      
      
    
}
  run();


  // const user = new User({
  //   email:'shiv@gmail.com',
  //   password:'1234'
  // })

  // user.save().then(()=>{
  //   console.log('user added')
  // });

  async function CreateUser(newUser){
    const user = new User(newUser);

    const data = await  user.save();

    console.log("user" , user);
    console.log("data", data);
  }

  CreateUser({
    email:'xxrt@gmail.com',
    password:'hellofromtheotherside'
  });