import React from "react";
import styles from "./css-modules.module.css";

import Layout from "../components/layout";

const Tutorial = (props) => (
  <li>
    <div className={styles.tutorial}>
      <a className={styles.link} href={props.link}>
        {props.title}
      </a>
    </div>
  </li>
);

export default function Tutorials() {
  return (
    <Layout>
      <h1>Tutorials</h1>
      <h2>Data</h2>

      <ul>
        <Tutorial
          title="Coding Habits for Data Scientists - David Tan"
          link="https://www.youtube.com/playlist?list=PLO9pkowc_99ZhP2yuPU8WCfFNYEx2IkwR"
        />
        <Tutorial
          title="Conducto"
          link="https://conducto.com/docs/getting-started"
        />
        <Tutorial
          title="Data Science in Visual Studio Code"
          link="https://code.visualstudio.com/docs/python/data-science-tutorial"
        />
        <Tutorial
          title="Great Expectations"
          link="https://docs.greatexpectations.io/en/latest/guides/tutorials.html"
        />
        <Tutorial
          title="Kedro"
          link="https://kedro.readthedocs.io/en/stable/index.html"
        />
        <Tutorial
          title="Prefect"
          link="https://docs.prefect.io/core/tutorial/01-etl-before-prefect.html"
        />
      </ul>

      <h2>Productivity</h2>

      <ul>
        <Tutorial
          title="Testing The “Impossible”: 17 Questions That Changed My Life"
          link="https://tim.blog/2016/12/07/testing-the-impossible-17-questions-that-changed-my-life/"
        />
        <Tutorial
          title="How to Configure Your iPhone to Work for You, Not Against You"
          link="https://betterhumans.coach.me/how-to-set-up-your-iphone-for-productivity-focus-and-your-own-longevity-bb27a68cc3d8"
        />
      </ul>
    </Layout>
  );
}
