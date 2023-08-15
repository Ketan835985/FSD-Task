/* eslint-disable no-undef */
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userCtrl');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb+srv://Ketan_technetium_functionUp:1lVsI7jDPnI5bNcE@clusterketantechnetium.pexlgni.mongodb.net/FSD_Task', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));


app.use('/', userRoutes);


app.listen(3000, () => {
    console.log('Listening on port 3000...');
})