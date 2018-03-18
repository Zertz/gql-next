import { graphql } from "react-apollo";
import gql from "graphql-tag";

import ErrorMessage from "./ErrorMessage";
import LoadingMessage from "./LoadingMessage";

function NewReleases({ data: { loading, error, newReleases } }) {
  if (error) {
    return <ErrorMessage message="Error loading new releases" />;
  }

  if (newReleases && newReleases.length) {
    return (
      <section>
        <ul>
          {newReleases.map(release => (
            <li key={release.id}>
              <a href={release.uri}>{`${release.name} (${
                release.album_type
              })`}</a>
            </li>
          ))}
        </ul>
        <style jsx>{`
          section {
            padding: 0 2rem;
          }
          ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            list-style-type: decimal;
            margin: 0;
            padding: 0;
          }
          li {
            font-size: 1rem;
            margin-bottom: 0.5rem;
            transition: transform 200ms ease-out;
            white-space: nowrap;
          }
          li:hover {
            transform: scale(2, 2);
          }
          a {
            text-decoration: none;
          }
        `}</style>
      </section>
    );
  }

  return <LoadingMessage message="Loading new releases..." />;
}

export const newReleases = gql`
  query newReleases {
    newReleases {
      id
      album_type
      artists {
        name
      }
      name
      uri
    }
  }
`;

export default graphql(newReleases, {
  props: ({ data }) => ({
    data
  })
})(NewReleases);
