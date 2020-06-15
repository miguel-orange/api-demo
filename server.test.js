const request = require('supertest');
const express = require("express");
const app = express();
const initApp = require('./app');


// "Hello World"
// {} - empty Json Object
// { name: "Miguel"}
// []

// When I make a request to / 
  // returns a 200 status
  // return Hello World
  // return as valid json

// When I make a request to /books
  // return an object with one book
  // return as valid json
  // 404 should be json, not HTML
describe("App", () => {
  test("should test that supertest works", async() => {
    const response = await request(initApp(app)).get('/books')
    expect(response.status).toBe(200)
  })

  test.skip("should display text Hello World!", async() => {
    const response = await request(initApp(app)).get('/')
    expect(response.text).toBe("Hello World!")
  })
  test.skip("should display valid json", async() => {
    const response = await request(initApp(app)).get('/')
    const myVariable = JSON.parse(response.text)
    
    let migo = "Miguel"
    migo = "Miguel Amaro"
    console.log(migo)// Miguel
    console.log(migo === "Miguel")// true
    console.log("Miguel" === "Miguel") // true
    JSON.parse(response.text)
    expect(myVariable).toEqual([])
  })
})

