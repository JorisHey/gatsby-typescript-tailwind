import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps extends PageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const IndexPage = ({ data }: IndexPageProps): JSX.Element => {
  const hello = `Hello`;

  return (
    <Layout>
      <h1>{hello} TypeScript world!</h1>
      <p>
        This site is named{' '}
        <span className="font-extrabold">{data.site.siteMetadata.title}</span>
      </p>
    </Layout>
  );
};

export default IndexPage;
