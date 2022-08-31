import express from "express";
import {getNews} from "../controllers/news.js"


const newsRouter = express.Router();
/**
 * GET /news
 * @summary Gets News
 * @return {object} 200 - success response
 */
newsRouter.get('/', getNews);

export default newsRouter;
