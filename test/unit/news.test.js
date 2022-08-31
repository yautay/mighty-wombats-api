import {getNews} from "../../controllers/news.js";

describe("firsttest", ()=> {
    it("cos powiunien miec", () => {
        expect(typeof getNews).toBe("function")

    })

})