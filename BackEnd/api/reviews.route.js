import express from "express"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router() // route user to the reviews part of the application when they access the url

router.route("/").get((req, res) => res.send("hello world"))// this is the route for the reviews, route is used for accessing the API to receive and response information

router.route("/movie/:id").get(ReviewsCtrl.apiGetReviews)
router.route("/new").post(ReviewsCtrl.apiPostReview)
router.route("/:id")
    .get(ReviewsCtrl.apiGetReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview) //calling different functions depending on the request

export default router