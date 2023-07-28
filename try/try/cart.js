const express = require("express");

const mongoose = require('mongoose');
const app = express();
const port = 3000;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  
  app.use(express.static('public'));
  app.set('view engine', 'ejs');
  app.set('views' + __dirname + '/views');

 
mongoose.connect('mongodb://127.0.0.1:27017/cartDB', options)
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () =>{
    console.log('Server is running at port 3000')
  })
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const productSchema = new mongoose.Schema({
  itemName:{
      type:String,
      required: true

  },
  imageURL:{
      type:String,
      required: true

  },
  price:Number,
  quantity:Number

});

const CartItem = mongoose.model('product', productSchema);




app.get('/', (req, res) => {
  res.render('cart')
});

app.get('/finalcart', async (req, res) => {
  try {
    const data = await CartItem.find({});
    res.render('finalcart', { cartItems: data });
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/add-to-cart', async (req, res) => {
  const { itemName, imageURL, price } = req.body;
  const numericPrice = parseFloat(price);

  console.log(itemName, imageURL, numericPrice);
  const quantity = 1;

  try {
    let cartItem = await CartItem.findOne({ itemName });

    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cartItem = new CartItem({ itemName, imageURL, price: numericPrice, quantity });
    }

    await cartItem.save();
    res.render("cart")

  } catch (error) {
    console.error('Error adding item to cart:', error);
    
  }
});


