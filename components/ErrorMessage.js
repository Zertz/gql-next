export default ({ message }) => (
  <aside>
    {message}
    <style jsx>{`
      aside {
        padding: 1.5rem;
        font-size: 1rem;
        color: white;
        background-color: red;
      }
    `}</style>
  </aside>
);
