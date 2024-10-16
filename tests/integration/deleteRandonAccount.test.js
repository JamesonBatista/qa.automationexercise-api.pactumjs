const pactum = require("../../pactumConfig");
const { deleteRandomAccount } = require("../../schemas/deleteRandomAccount");
const { faker } = require("@faker-js/faker");

describe("Delete Account - Contract Test", () => {
  it("should delete account and return correct response", async () => {
    const response = await pactum
      .spec()
      .delete("/deleteAccount")
      .withQueryParams("email", faker.internet.email())
      .withQueryParams("password", faker.internet.password())
      .expectStatus(200)
      .returns();

    deleteRandomAccount.validate(response, {
      abortEarly: false,
    });
  });
  
});
