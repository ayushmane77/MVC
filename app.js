// const express=require('express');
// const route=require('./routes/index.js');
// const app=express();
// app.use('/',route);
// app.get('/',(req,res)=>{
//     res.end("hello world");
// });
// const PORT=4500;
// app.listen(PORT,()=>{
//     console.log(`server is running on localhost:${PORT}`);
// });


const express=require('express');
const route=require('./routes/index.js')
const mongoose=require("mongoose");
require('dotenv').config();
const app=express();
const PORT=process.env.PORT;
app.use(express.json());
app.use('/',route);
app.get('/',(req,res)=>{
    res.end("hello world");
});
// const localDBURL="mongoDb://127.0.0.1/"

const atlas=process.env.MONGO_URI;

mongoose.connect(atlas,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(res=>{
    app.listen(PORT,()=>{
        console.log(`server is running on the localhost:${PORT}`);
    });
})
.catch(error=>{
    console.log(error);
})
