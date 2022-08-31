// noinspection JSUnusedLocalSymbols

export function getBulletins(req, res, next) {
    res.status(200).json({news: ["sdfsdfsdf", "sdfsdfsdf", "grergergergerg"]});
}

export function postBulletin(req, res, next) {
    const title = req.body.title;
    const content = req.body.content;
//    DB
    res.status(201).json({
        message: "Bulletin posted successfully", post: {
            id: new Date().toISOString(),
            title: title,
            content: content,
        }
    })
}
