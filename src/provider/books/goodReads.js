const books = () => Promise.resolve({
    books:[{
        author:"Temple Grandin", title:"Animals Make Us Human: Creating the Best Life for Animals"
    },{
        title:"Life of Pi", author: "Yann Martel"
    }]
})

module.exports = books;
