import bulletins from "../models/bulletins.js";
// noinspection JSUnusedLocalSymbols

import { validationResult } from "express-validator";
import {sequelizeLogger} from "../utils/logger.js";

export function getBulletins(req, res, next) {
    bulletins.findAll().then(
        bulletins => {
            res.status(200).json({
                bulletins: bulletins
            })
        }
    ).catch(err => {
        sequelizeLogger.error(err);
        res.status(500).json({
            message: "Server error", post: {
                err: err.toString()
            }
        })
    })
}

export function postBulletin(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({message: "Validation failed", errors: errors.array()});
    }

    const title = req.body.title;
    const text = req.body.text;
    const date = req.body.date;
    bulletins.create({
        bulletin_title: title,
        bulletin_text: text,
        bulletin_date: date
    }).then(result => {
        res.status(201).json({
            message: "Bulletin created", post: {
                title: title,
                text: text,
                date: date
            }
        })
    }).catch(err => {
        sequelizeLogger.error(err);
        res.status(500).json({
            message: "Server error", post: {
                err: err.toString()
            }
        })
    })
}
