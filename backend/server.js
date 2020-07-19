const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
.then(() => console.log('mongodb database connection established'))
.catch(err => console.log(err));
// ;
// const connection = mongoose.connection;
// connection.once('open', ()=>{
// 	console.log('mongodb database connection established');
// })

app.get('/', (req, res) => {
	res.send('it is working');
})

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT || 5000, ()=>{
	console.log(`app running on port ${process.env.PORT || 5000}`);
});