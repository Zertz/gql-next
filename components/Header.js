import Link from "next/link";

import ActiveLink from "./ActiveLink";

export default ({ children }) => (
  <header>
    <style jsx>{`
      header {
        padding: 2rem;
      }
      h1 {
        font-size: 72px;
        font-weight: 300;
        margin: 0;
        padding: 0;
        text-align: center;
      }
      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      li:not(:last-child) {
        margin-right: 1rem;
      }
      li > .active {
        font-weight: 700;
      }
    `}</style>
    <ul>
      <li>
        <ActiveLink prefetch href="/">
          <a>New Releases</a>
        </ActiveLink>
      </li>
    </ul>
    <h1>{children}</h1>
  </header>
);
