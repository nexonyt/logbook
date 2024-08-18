const express = require("express");
const router = express.Router();
const { test, registerUser,loginUser,getProfile,getUserID } = require("../controllers/authController");
const { addFlightQuery,getFlightsDurationSum,getAllFlights } = require("../controllers/queriesController");
const cors = require("cors");

router.use(
  cors({
    credentials: false,
    // origin: "http://localhost:5173",
    origin: '*'
  })
);
router.get('/profile',getProfile)
router.get("/", test);
router.post("/register", registerUser);
router.post('/login',loginUser)
router.get('/getuserid',getUserID)
router.post('/addflightquery',addFlightQuery)
router.post('/getflightdurationsum',getFlightsDurationSum)
router.post('/getAllFlights',getAllFlights);
module.exports = router;
