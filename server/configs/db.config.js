const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost:27017/portfolio-react-context`;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => console.info(`Connected to the database: ${MONGODB_URI}`))
    .catch(error => console.error(`An error ocurred trying to connect to the database: ${MONGODB_URI}`, error));