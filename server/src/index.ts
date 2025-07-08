import express, {Request, Response} from "express";
import cors from "cors";
const app = express();
const port = 5000

app.use(express.json(), cors({origin: "http://localhost:5173"}));

app.get('/new-choices', (req: Request, res: Response) => {
    res.send([{"name": "water bottle", "image": "waterbottle.jpg"},
        {"name": "beanbag chair", "image": "beanbagchair.jpg"}]);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})