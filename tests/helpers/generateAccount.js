const { faker } = require('@faker-js/faker');

function generateAccountBody() {
  const name = faker.person.middleName();
  const email = faker.internet.email();
  const password = faker.internet.password();
  const title = faker.helpers.arrayElement(['Mr', 'Mrs', 'Miss']);
  const birthdate = faker.date.birthdate({ min: 18, max: 60, mode: 'age' });
  const birth_date = birthdate.getDate();
  const birth_month = birthdate.getMonth() + 1; 
  const birth_year = birthdate.getFullYear();
  const firstname = faker.person.firstName();
  const lastname = faker.person.lastName();
  const company = faker.company.name();
  const address1 = faker.location.streetAddress();
  const address2 = faker.location.secondaryAddress();
  const country = faker.location.country();
  const zipcode = faker.location.zipCode();
  const state = faker.location.state();
  const city = faker.location.city();
  const mobile_number = faker.phone.number();

  return {
    name,
    email,
    password,
    title,
    birth_date,
    birth_month,
    birth_year,
    firstname,
    lastname,
    company,
    address1,
    address2,
    country,
    zipcode,
    state,
    city,
    mobile_number
  };
}

module.exports = { generateAccountBody };
