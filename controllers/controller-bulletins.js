import bulletins from "../models/bulletins.js";
// noinspection JSUnusedLocalSymbols

import {validationResult} from "express-validator";
import {sequelizeLogger} from "../utils/logger.js";


export function getBulletins(req, res, next) {
    if (req.query.last) {
        bulletins
            .findAll({
                limit: parseInt(req.query.last),
                order: [['bulletin_id', 'DESC']]
            })
            .then(
                bulletins => {
                    res.status(200).json({
                        bulletins
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
    } else if (req.query.bulletin_id) {
        bulletins
            .findAll({
                where: {
                    bulletin_id: parseInt(req.query.bulletin_id)
                }
            })
            .then(
                bulletins => {
                    res.status(200).json({
                        bulletins
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
    } else {
        bulletins
            .findAll()
            .then(
                bulletins => {
                    res.status(200).json({
                        bulletins
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
                id: result.bulletin_id,
                title: result.bulletin_title,
                text: result.bulletin_text,
                date: result.bulletin_date,
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
