const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors=require('cors')

app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {
  res.send('Hello World!')
})



const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = "mongodb+srv://mern-book-server:hxgpst2GdB1et4ZD@cluster0.m1zzk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
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
    
    //Create collection of documents
    const bookCollections=client.db("BookInventory").collection("books");

    //insert a book to db
    app.post("/upload-book",async(req,res)=>{
        const data=req.body;
        const result=await bookCollections.insertOne(data);
        res.send(result);
    })

    //get all the books from database
    // app.get("/all-books",async(req,res)=>{
    //     const books=bookCollections.find();
    //     const result=await books.toArray();
    //     res.send(result);
    // })

     // find by category
     app.get('/all-books', async (req, res) => {
      let query = {};
      if (req.query?.category) {
          query = { "books": { $elemMatch: { category: req.query.category } } };
      }
      const result = await bookCollections.find(query).toArray();
      res.send(result);
  });


  // Fetch a Single Book
    app.get("/book/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id: new ObjectId(id)};
      const result=await bookCollections.findOne(filter);
      res.send(result);
    })
  

    // Update

      // update a book
      app.patch("/book/:id", async (req, res) => {
        
        const id = req.params.id;
        const updateBookData = req.body;
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updateDoc = {
          $set: {
            ...updateBookData
          }
        };
    
        const result = await bookCollections.updateOne(filter, updateDoc, options);
        res.send(result);
       
    });

    // delete a book
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result=await  bookCollections.deleteOne(filter);  
      res.send(result);
         
    });

    

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})