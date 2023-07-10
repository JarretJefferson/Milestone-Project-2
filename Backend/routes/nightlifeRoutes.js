const express = require("express");
const router = express.Router();
const nightlifeReview = require("../models/Nightlife");

router.get("/",async(req,res)=>{
  try{
   let reviews = await nightlifeReview.find({}); // {restaurant: req.query.restaurant} 
    res.send({reviews})
  }catch(e){
    console.log("reviews",e)
    res.status(500).send("Failure")
  }
})

router.post("/submit", async (req, res) => {
  try {
    const { location, rating, comment } = req.body;

    // Create a new review object
    await new nightlifeReview({
      location,
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
