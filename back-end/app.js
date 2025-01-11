const express= require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors')


mongoose.connect('mongodb://127.0.0.1:27017/Quote')
.then(()=>{console.log('Db connected successfully')})
.catch((err)=>{console.log(err)})
 
app.use(cors({origin:['http://localhost:3000']}));

const PORT = process.env.PORT

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server connected at port ${port}`);
})
