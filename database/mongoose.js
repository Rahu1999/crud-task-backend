const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DN connected successfully")
})
.catch((error)=>{
    console.log("Error in db connection"+error)
});
module.exports = mongoose;