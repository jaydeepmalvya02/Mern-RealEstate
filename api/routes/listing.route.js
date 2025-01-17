
import express from "express";
import { createListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const listingRouter=express.Router();
listingRouter.post('/create',verifyToken,createListing)


export default listingRouter