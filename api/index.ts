const express = require('express');
const mongoose = require('mongoose');
const productsRouter = require('./routers/product');
const shopsRouter = require('./routers/shop');
const cors = require("cors");
const cookieParser = require('cookie-parser')

require('dotenv').config();

const PORT = process.env.PORT || 5002;

const app = express();

const corsSettings = {
  originL: "http://localhost:5222"
};

app.use(cors(corsSettings));
app.use(express.json());
app.use(cookieParser());

app.use("/api/products", productsRouter);
app.use("/api/shops", shopsRouter);


const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e)
  }
}

start();