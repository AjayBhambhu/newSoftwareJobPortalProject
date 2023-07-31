const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/empform').then(() => {
    console.log(`Mongodb connected`);
})
.catch((error) => {
    console.log(error);
})
