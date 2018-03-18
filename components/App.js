export default ({ children }) => (
  <main>
    {children}
    <style global jsx>{`
      body {
        background-color: #fafafa;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        font-size: 18px;
        margin: 0;
      }
    `}</style>
    <style global jsx>{`
      main {
        display: grid;
        grid-template-rows: min-content 1fr min-content;
        width: 100%;
        height: 100%;
        position: absolute;
      }
    `}</style>
  </main>
);
