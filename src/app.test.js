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

// When I make a request to /api/books
  // return an object with one book
  // return as valid json
  // 404 should be json, not HTML
describe("App", () => {
  test("should test that supertest works", async() => {
    const response = await request(initApp(app)).get('/api/books')
    expect(response.status).toBe(200)
  })
  test("should test that supertest works", async() => {
    const response = await request(initApp(app)).get('/api/books')
    expect(response.status).toBe(200)
  })
  test.only("should respond with books body", async() => {
    const response = await request(initApp(app)).get('/api/books')
    expect(response.body).toEqual({
      books: [{
          author: "Migo", title: "How to break your first quadcopter in 30 seconds"
      }]
  })
  })
  test("should display text Hello World!", async() => {
    const response = await request(initApp(app)).get('/')
    expect(response.text).toBe("Hello World!")
  })
  test("should display valid json", async() => {
    const response = await request(initApp(app)).get('/')
    const myVariable = JSON.parse(response.text)
    
    expect(myVariable).toEqual([])
  })
})

