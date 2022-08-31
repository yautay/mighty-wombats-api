// noinspection JSUnusedLocalSymbols

import { validationResult } from "express-validator";

export function getBulletins(req, res, next) {
    res.status(200).json({news: ["sdfsdfsdf", "sdfsdfsdf", "grergergergerg"]});
}

export function postBulletin(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({message: "Validation failed", errors: errors.array()});
    }

    const title = req.body.title;
    const content = req.body.content;
    const date = req.body.date;
//    DB
    res.status(201).json({
        message: "Bulletin posted successfully", post: {
            _id: new Date().toISOString(),
            title: title,
            content: content,
            date: date
        }
    })
}
