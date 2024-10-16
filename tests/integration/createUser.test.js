const pactum = require("../../pactumConfig");
const { createUser } = require("../../schemas/createUser");
const { generateAccountBody } = require("../helpers/generateAccount");
describe("Create Account - Contract Test with FormData and Schema Validation", () => {
  it("should create a new account and return correct response", async () => {
    const requestBody = generateAccountBody();

    const response = await pactum
      .spec()
      .post("/createAccount")
      .withForm(requestBody)
      .expectJson({ message: "User created!", responseCode: 201 })
      .returns();
    createUser.validate(response, {
      abortEarly: false,
    });
  });

  it("should return error when email is missing", async () => {
    const requestBody = generateAccountBody();
    delete requestBody.email;

    const response = await pactum
      .spec()
      .post("/createAccount")
      .withForm(requestBody)
      .expectJson({
        responseCode: 400,
        message: "Bad request, email parameter is missing in POST request.",
      })
      .returns();
  });
  it("should return error for invalid email format", async () => {
    const requestBody = generateAccountBody();
    requestBody.email = "invalid-email-format"; // Define um email inválido

    const response = await pactum
      .spec()
      .post("/createAccount")
      .withForm(requestBody)
      .expectJson({
        responseCode: 400,
        message: "Email already exists!",
      })
      .returns();
  });

  ////// Entre outros cenários que dariam para testar dos outros campos
});
