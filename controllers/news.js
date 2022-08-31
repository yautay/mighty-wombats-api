export function getNews(req, res, next) {
    res.status(200).json({news: ["sdfsdfsdf", "sdfsdfsdf", "grergergergerg"]});
}

export function postNews(req, res, next) {
    const title = req.body.title;
    const content = req.body.content;
//    DB
    res.status(201).json({
        message: "NEWS ADDED", post: {
            id: new Date().toISOString(),
            title: title,
            content: content
        }
    })
}
