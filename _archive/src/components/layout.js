import React from "react";
import { Link } from "gatsby";
const ListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default function Layout({ children }) {
  return (
    <div style={{ margin: `1rem auto`, maxWidth: 800, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Naveen N. Sinha</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/books/">Books</ListLink>
          <ListLink to="/podcasts/">Podcasts</ListLink>
          <ListLink to="/tutorials/">Tutorials</ListLink>
          <ListLink to="/tools/">Tools</ListLink>
        </ul>
      </header>
      {children}
    </div>
  );
}
