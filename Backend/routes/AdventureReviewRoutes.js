const express = require("express");
const router = express.Router();
const adventureReview = require("../models/AdventureReview");

router.get("/",async(req,res)=>{
  try{
   let reviews = await adventureReview.find({}); // {restaurant: req.query.restaurant} 
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
    await new adventureReview({
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
