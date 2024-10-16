const pactum = require("../../pactumConfig");
const { productsListSchema } = require("../../schemas/getList");
describe("Get All Products List", () => {
  it("should return status code 200 for /api/productsList", async () => {
    const response = await pactum
      .spec()
      .get("/productsList")
      .expectStatus(200)
      .returns();
    productsListSchema.validate(response, { abortEarly: false });
  });
});
