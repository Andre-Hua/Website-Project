import express from "express"
import cors from "cors"
import reviews from "./api/reviews.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/reviews", reviews) // this is the route for the reviews, route is used for accessing the API to receive and response information

app.use("*", (req, res) => 
res.status(404).json({ error: "not found" })) // this is the error message that will be displayed if the route is not found

export default app // this is the export of the app, you need to export the app at the end of one file so you can import it in a different file (in this case, index.js file) to use it