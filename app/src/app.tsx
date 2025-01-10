import { Hono } from "hono";
import { Layout } from "./components/layout.js";

export const app = new Hono();

app.get("/", (c) => {
  return c.html(
    <Layout>
      <p>
        To jest przykładowa aplikacja na przedmiot "Cykl życia i narzędzia
        DevOps"
      </p>
      <hr />
      <p>Przykładowe dane:</p>
      <img src="http://localhost:3000/static/data.webp" />
    </Layout>
  );
});
