const mongoose = require('mongoose');

require('dotenv').config()

let url = process.env.DB_URL;



module.exports.db = async(req,res)=>{
    try {
        await mongoose.connect(url)
        console.log('database is connected');
        
    } catch (error) {
        
    }
}
