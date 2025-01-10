import { serve } from "@hono/node-server";
import { app } from "./app.js";
import { serveStatic } from "@hono/node-server/serve-static";

const port = 3000;
app.use("/static/*", serveStatic({ root: "./" }));

serve({
  fetch: app.fetch,
  port,
});

console.log("Wow this is so creative!");
console.log(`Server is running on http://localhost:${port}`);
