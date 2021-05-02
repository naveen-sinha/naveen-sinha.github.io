import React from "react";

import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <h1>Welcome</h1>
    <p>
    I combine approaches from experimental physics and software engineering to answer business-critical, data-intensive questions for fast-growing companies, with applications ranging from personal health to climate change.
    </p>
    <p>
      I'm currently on the Field Experimentation team at{" "}
      <a href="https://www.indigoag.com/">Indigo Agriculture</a>. Previously I
      was a founding member of the Business Intelligence Infrastructure team at{" "}
      <a href="https://www.fitbit.com/home">Fitbit</a> and a founding Teaching
      Fellow of the{" "}
      <a href="https://sciencecooking.seas.harvard.edu/">
        Harvard Science and Cooking
      </a>{" "}
      course.
    </p>
    <p>
      Outside of work, I seek ways to escape computer screens, whether it's
      running, cooking, or writing in analog journals.
    </p>
  </Layout>
);

export default IndexPage;
