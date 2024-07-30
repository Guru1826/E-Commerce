const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles: true
}));

// Configure CORS to allow credentials
app.use(cors({
  origin: true, // Adjust as per your frontend URL
  credentials: true
}));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({ msg: "This is Example" });
});

// Routes
app.use('/user', require('./routes/userRouter'));
app.use('/api', require('./routes/categoryRouter'));
app.use('/api', require('./routes/productRouter'));
app.use('/api', require('./routes/upload'));

// Connect MongoDB
const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Connected");
}).catch(err => {
    console.log(err);
});

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
});
