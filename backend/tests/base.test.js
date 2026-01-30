const { test, describe, after, beforeEach } = require('node:test')
const mongoose = require('mongoose')
const assert = require('node:assert')
const supertest = require('supertest')
const app = require('../app')
const Prompt = require('../models/prompt')
const helper = require('../utils/testHelper')
const api = supertest(app)

beforeEach(async () => {
  await Prompt.deleteMany({})
  await Prompt.insertMany(helper.multiplePrompts)
})


describe('get request works', async () => {
  test.only('fetches all prompts', async () => {
    const res = await api
      .get('/api/prompts')
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const received = res.body.map(({
      title, content, username, tags, source, likes
    }) => (
      {title, content, username, tags, source, likes}
    ))

    assert.deepStrictEqual(received, helper.multiplePrompts)
  })
})


test('prompts work with missing optional fields', async () => {

})

after(async () => {
  await mongoose.connection.close()
})
