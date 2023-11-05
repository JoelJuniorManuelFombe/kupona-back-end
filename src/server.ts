import express from "express";
import { conectionMongoDB } from "./connections/MongoDB/mongodb";
import { router } from "./routes/routes";
import cors from "cors"

const PORT = process.env.PORT || 8000
const app = express();
app.use(cors());
app.use(express.json())
app.use(router);

conectionMongoDB()

app.listen(PORT, () => {
    console.log(`Server online http://localhost:${PORT}`)
})