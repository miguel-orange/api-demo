const bookService = require("./book");
describe("Book Service", () => {
    test("should work", async () => {
        expect(await bookService.getBooks()).toEqual({ "books": [{ "author": "Miguel", "title": "How to break your first quadcopter in 30 seconds" }] })
    })
})