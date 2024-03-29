const restuarants=require('../models/restuarants.json');
exports.getAllRestuarants=(req,res)=>{
    res.status(200).json({
        message:"fetched restuarants successfully",
        Restuarants:restuarants
    });
}
exports.getRestuarantsByCity=(req,res)=>{
    const {city}=req.params;
    const filterRestuarantsByCity=restuarants.filter(f=>f.city_name==city)
    res.status(200).json({
        message:"fetched restuarants by city successfully",
        cityName:filterRestuarantsByCity
    })
}