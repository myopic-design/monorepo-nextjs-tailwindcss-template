import { getCspContent } from ".";

describe("csp", () => {
  describe("getCspContent", () => {
    describe("when `NODE_ENV=development`", () => {
      const oldEnv = process.env;

      beforeEach(() => {
        jest.resetModules();
        process.env = { ...oldEnv, NODE_ENV: "development" };
      });

      afterEach(() => {
        process.env = oldEnv;
      });

      it("returns CSP directives flattened as a string", () => {
        const cspContent = getCspContent("alert('OHAI')");
        expect(cspContent).toMatchInlineSnapshot(
          `"default-src 'none'; connect-src 'self'; font-src 'self'; frame-src 'self'; img-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'"`,
        );
      });
    });

    describe("when `NODE_ENV=production`", () => {
      const oldEnv = process.env;

      beforeEach(() => {
        jest.resetModules();
        process.env = { ...oldEnv, NODE_ENV: "production" };
      });

      afterEach(() => {
        process.env = oldEnv;
      });

      it("returns CSP directives flattened as a string", () => {
        const cspContent = getCspContent("alert('OHAI')");
        expect(cspContent).toMatchInlineSnapshot(
          `"upgrade-insecure-requests; default-src 'none'; connect-src 'self'; font-src 'self'; frame-src 'self'; img-src 'self'; script-src 'self' 'sha256-eMuh8xiwcX72rRYNAGENurQBAcH7kLlAUQcoOri3BIo=' 'sha256-qR24ahFUfDwOYNDgoxwK9PYcT5onKsO99GDSCLphspk='; style-src 'self' 'unsafe-inline'"`,
        );
      });
    });
  });
});
