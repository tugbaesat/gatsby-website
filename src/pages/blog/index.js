import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul className="text-left">
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2 className="text-red-400 py-2 underline cursor-pointer text-lg ">
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p className="text-xs">Posted: {node.frontmatter.date}</p>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="Blog Posts" />;

export default Blog;
