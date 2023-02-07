const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(express.json());
app.use(cors());


// connect DB
require('./db/config');

// products schema
const productModel = require('./db/products');

// user schema 
const UserModel = require('./db/User');



app.post("/new-item", async (req, res) => {
    try {
      const {name, price} = req.body;
      if (!name || !price)
        return res.status(400).json({msg: "Not all fields have been entered"});
  
      const product = new productModel({
        name,
        price
      });

      const result = await product.save();
      res.json(result);
    } catch (err) {
      res.status(500).json({error: err.message});
    }
  });



app.listen(port, () => { console.log('yes') })