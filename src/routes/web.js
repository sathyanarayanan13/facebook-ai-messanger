import express from "express";
import {getHomepage} from "../controllers/homepageController.js";
import {postWebhook, getWebhook} from "../controllers/chatBotController.js";

let router = express.Router();

let initWebRoutes = (app)=> {
    router.get("/", getHomepage);
    router.get("/test", (req, res)=>{
        return res.send("Hello, it's working");
    });
    router.get("/webhook", getWebhook);
    router.post("/webhook", postWebhook);

    return app.use("/", router);
};

export default initWebRoutes;