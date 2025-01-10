import type { FC } from "hono/jsx";

export const Layout: FC = ({ children }) => {
  return (
    <html data-theme="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        />
      </head>
      <body>
        <main class="container-fluid">
          <nav>
            <ul>
              <li>
                <strong>Maciej Wiatr 14686</strong>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Pierwsza strona</a>
              </li>
              <li>
                <a href="/druga">Druga strona</a>
              </li>
              <li>
                <a href="/trzecia">Trzecia strona</a>
              </li>
            </ul>
          </nav>

          {children}
        </main>
      </body>
    </html>
  );
};
