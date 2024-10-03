// require('dotenv').config

// const express =require('express')
// const mongoose =require('mongoose')

// const app = express()
// const PORT=process.env.PORT || 5000

// mongoose
// .connect(process.env.MONGODB_URI , {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
// .then(()=>console.log('connected to mongoDB.....'))

// .catch((err)=>console.log(err))
// app.listen(PORT,()=>console.log(`Listening on ${PORT}`))

// require('dotenv').config();

// const express = require('express');
// const mongoose = require('mongoose');
// const cors =require('cors')

// const routes = require('./routes/ToDoRoute')

// const app = express();
// const PORT = process.env.PORT || 5000;  

// app.use(express.json())
// app.use(cors())

// app.use(express.json());

// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('Connected to MongoDB...'))
//   .catch((err) => console.log('Error connecting to MongoDB:', err));

//   app.use(routes)

// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));



require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes/ToDoRoute'); // Ensure correct path

const app = express();
const PORT = process.env.PORT || 5000;  

app.use(express.json());
app.use(cors());

// Use /api/todo as a prefix for ToDo routes
app.use('/api/todo', routes);

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
