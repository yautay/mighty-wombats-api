import express from "express";
import { getBulletins, postBulletin } from "../controllers/controller-bulletins.js"
import { body } from "express-validator"

const bulletinsRouter = express.Router();
/**
 * GET /bulletins
 * @summary Gets bulletins
 * @return {object} 200 - success response
 */
/**
 * POST /bulletins
 * @summary Post bulletin
 * @return {object} 200 - success response
 */
bulletinsRouter.get('/', getBulletins);
bulletinsRouter.post(
    '/post',
    [
        body("title").trim().isLength({min: 5}),
        body("content").trim().isLength({min: 5})],
    postBulletin)

export default bulletinsRouter;
