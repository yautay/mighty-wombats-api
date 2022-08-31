import express from "express";
import {getBulletins, postBulletin} from "../controllers/controller-bulletins.js"


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
bulletinsRouter.post('/', postBulletin)

export default bulletinsRouter;
