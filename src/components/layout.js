import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className="p-6 flex flex-col justify-center items-center text-center bg-red-200">
      <header className="font-bold text-5xl text-blue-600">
        {data.site.siteMetadata.title}
      </header>
      <nav className="py-4">
        <ul className="flex">
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="text-red-400 text-5xl py-4">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
