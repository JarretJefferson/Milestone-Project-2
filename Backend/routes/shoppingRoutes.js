const express = require("express");
const router = express.Router();
const shoppingReview = require("../models/Shopping");

router.get("/",async(req,res)=>{
  try{
   let reviews = await shoppingReview.find({}); 
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
    await new shoppingReview({
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