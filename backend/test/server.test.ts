import { Entry } from "@prisma/client";
import Prisma from "../src/db";
import { server } from "../src/server";

describe("sum test", () => {
  it("should assert 1 + 1 is 2", () => {
    expect(1 + 1).toEqual(2);
  });
});

describe("sever tests", () => {
  it("test test", () => {
    expect(server.get).toBeDefined();
  });

  // it("test db returns error when entry does not exist", () => {
  //   const entry = <Entry> {id: "title",
  //     title: "title",
  //     description: "",
  //     created_at: new Date,
  //     scheduled_for: new Date}
  //   expect(server.get("title"))
  // })
});
// console.log(server.get)
// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// beforeAll(() => {

// })

// server.get<{ Body: Entry; Params: { id: string } }>(
//   "/get/:id",
//   async (req, reply) => {
//     const dbEntry = await Prisma.entry.findUnique({
//       where: { id: req.params.id },
//     });
//     if (!dbEntry) {
//       reply.status(500).send({ msg: `Error finding entry with id ${req.params.id}` });
//     }
//     reply.send(dbEntry);
//   }
// );

// describe("test", () => {
//   it("should..",  () => {
//     expect().toEqual();
//   })
// })

// const { test } = require('tap')
// const build = require('./app')

// test('requests the "/" route', async t => {
//   const app = build()

//   const response = await app.inject({
//     method: 'GET',
//     url: '/'
//   })
//   t.equal(response.statusCode, 200, 'returns a status code of 200')
// })

// fastify.inject({
//   method: String,
//   url: String,
//   query: Object,
//   payload: Object,
//   headers: Object,
//   cookies: Object
// }, (error, response) => {
//   // your tests
// })

// const { test } = require('tap')
// const build = require('./app')

// test('requests the "/" route', async t => {
//   const app = build()

//   const response = await app.inject({
//     method: 'GET',
//     url: '/'
//   })
//   t.equal(response.statusCode, 200, 'returns a status code of 200')
// })
