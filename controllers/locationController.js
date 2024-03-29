// const data=require('../models/location.json');
// exports.getLocation=(req,res)=>{
//     res.status(200).json({
//         message:"fetched data successfully",
//         locations:data
//     });
// }

const data=require('../models/locationShell.js');
exports.getLocations=(req,res)=>{
    data.find()
    .then(resp=>{
        res.status(200).json({
            message:"fetched data succeessfully",
            locations:resp
        });
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        });
    });
}