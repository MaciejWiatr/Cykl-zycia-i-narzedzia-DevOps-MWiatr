import { Hono } from "hono";
import { Layout } from "./components/layout.js";

export const app = new Hono();

app.get("/", (c) => {
  return c.html(
    <Layout>
      <p>
        To jest przykładowa aplikacja na przedmiot "Cykl życia i narzędzia
        DevOps". Test
      </p>
      <hr />
      <p>Przykładowe dane:</p>
      <img src="/static/data.webp" />
    </Layout>
  );
});

app.get("/druga", (c) => {
  return c.html(<Layout>Hello second</Layout>);
});
