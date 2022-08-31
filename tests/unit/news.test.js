import {getNews} from "../../controllers/controller-news.js";

describe("firsttest", ()=> {
    it("cos powiunien miec", () => {
        expect(typeof getNews).toBe("function")

    })

})