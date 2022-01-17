const { calculateServerNeeded } = require("../calculator");

const { serverType, virtualMachines } = require("./data");

test("Expect to return 2 for the supplied parameters", () => {
  expect(calculateServerNeeded(serverType, virtualMachines)).toBe(2);
});

test("Expect empty virtualMachines To return 0", () => {
  expect(calculateServerNeeded(serverType, [])).toBe(0);
});

test("Expect calculateServerNeeded to throw error", () => {
  expect(() => {
    calculateServerNeeded([]);
  }).toThrow();
});
