// products schema
const productModel = require('../models/products');

// user schema 
const UserModel = require('../models/User');

const setupRoutes = (app) => {
  app.post("/new-item", async (req, res) => {
    try {
      const {title, price} = req.body;
      
      if (!title || !price)
        return res.status(400).json({msg: "Not all fields have been entered"});
  
      const product = new productModel({
        title,
        price
      });

      const result = await product.save();
      res.json(result);
    } catch (err) {
      res.status(500).json({error: err.message});
    }
  });

  app.put("/edit-item/:id", async (req, res) => {
    
    try{
      let result = await productModel.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      )
      res.send(result);
    }
    catch (err) {
      console.log(err);
    }

  })
}


module.exports = setupRoutes;



