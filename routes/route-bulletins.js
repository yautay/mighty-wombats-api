import express from "express";
import {getBulletinById, getBulletins, postBulletin} from "../controllers/controller-bulletins.js"
import {body} from "express-validator"


const bulletinsRouter = express.Router();
/**
 * A bulletin
 * @typedef {object} Bulletin
 * @property {int} id - The title id
 * @property {string} title.required - The title
 * @property {string} text.required - The content
 * @property {string} date.required - The date of submission
 */
/**
 * GET /bulletins-management/bulletins
 * @summary Fetch all bulletins
 * @return {object} 200 - success response
 */
/**
 * POST /bulletins-management/bulletin
 * @summary Post single bulletin
 * @param {Bulletin} request.body.required - bulletin data
 * @return {object} 200 - success response
 */
bulletinsRouter.get('/bulletins', getBulletins);
bulletinsRouter.get('/bulletin', getBulletinById);
bulletinsRouter.post(
    '/bulletin',
    [
        body("title").trim().isLength({min: 5}),
        body("text").trim().isLength({min: 5}),
        body("date").trim().isLength({min: 5})],
    postBulletin)
export default bulletinsRouter;
