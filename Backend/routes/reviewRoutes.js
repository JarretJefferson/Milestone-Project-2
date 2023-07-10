const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

router.get("/",async(req,res)=>{
  try{
   let reviews = await Review.find({}); // {restaurant: req.query.restaurant} 
    res.send({reviews})
  }catch(e){
    console.log("reviews",e)
    res.status(500).send("Failure")
  }
})

router.post("/submit", async (req, res) => {
  try {
    const { restaurant, rating, comment } = req.body;

    // Create a new review object
    await new Review({
      restaurant,
      rating,
      comment,
    }).save();
    res.send("Success");
  } catch (e) {
    console.log(e);
    res.status(500).send("Failure");
  }
});

module.exports = router;
