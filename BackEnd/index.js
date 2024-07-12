import app from "./server.js"
import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviewsDAO.js" //data access object

const MongoClient = mongodb.MongoClient
const mongo_username = process.env['MONGO_USERNAME']
const mongo_password = process.env['MONGO_PASSWORD']

const uri = `mongodb+srv://${mongo_username}:${mongo_password}@andremoivereview.fxmn01w.mongodb.net/?retryWrites=true&w=majority&appName=AndreMoiveReview` // insert variable into string with ``
//const uri = `mongodb+srv://beefee2000hjx:<password>@andremoivereview.fxmn01w.mongodb.net/?retryWrites=true&w=majority&appName=AndreMoiveReview`  // connection string

const port = 8000

MongoClient.connect(
  uri,
  {
    maxPoolSize: 50, // numebr of people can connect to the database at the same time
    wtimeoutMS: 2500, // time in milliseconds allowed to be trying to connect before times out
    useNewUrlParser: true
  })
.catch(erro => {
  console.error(erro.stack) // if there is an error, it will print the error and stack the messages
  process.exit(1) // if there is an error, the process will exit
})
.then(async client =>{
  await ReviewsDAO.injectDB(client) // injecting the database into the reviewsDAO
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
})