let Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  let e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via letructor arguments", () => {
  let name = "Alice";
  let e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via letructor argument", () => {
  let testValue = 100;
  let e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via letructor argument", () => {
  let testValue = "test@test.com";
  let e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  let testValue = "Alice";
  let e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  let testValue = 100;
  let e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  let testValue = "test@test.com";
  let e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  let testValue = "Employee";
  let e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
