const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const { serverType, virtualMachines } = require("./data");

it("gets the test endpoint", async (done) => {
  const response = await request
    .post("/api/calculate")
    .send({ serverType, virtualMachines })
    .set("Accept", "application/json");

  expect(response.status).toBe(200);
  expect(response.body.servers).toBe(2);
  done();
});
