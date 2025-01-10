import { app } from "../src/app.js";

describe("app", () => {
  it("should return 200 for the root path", async () => {
    const res = await app.request("/");
    expect(res.status).toBe(200);
    const text = await res.text();
    expect(text).toContain("To jest przykładowa aplikacja");
  });

  it("should return 404 for an unknown path", async () => {
    const res = await app.request("/unknown");
    expect(res.status).toBe(404);
  });

  it("should have the correct content-type header", async () => {
    const res = await app.request("/");
    expect(res.headers.get("content-type")).toContain("text/html");
  });
});
