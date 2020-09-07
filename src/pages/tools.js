import React from "react";
import styles from "./css-modules.module.css";

import Layout from "../components/layout";

const Tool = (props) => (
  <li>
    <div className={styles.tool}>
      <a className={styles.link} href={props.link}>
        {props.title}
      </a>
    </div>
  </li>
);

export default function Tools() {
  return (
    <Layout>
      <h1>Tools</h1>
      <h2>Digital</h2>

      <ul>
        <Tool link="https://www.listennotes.com/" title="Listen Notes" />
        <Tool link="https://roamresearch.com/" title="Roam Research" />
        <Tool link="https://vimium.github.io/" title="Vimium" />
        <Tool
          link="https://code.visualstudio.com/"
          title="Visual Studio Code"
        />
      </ul>

      <h2>Analog</h2>

      <ul>
        <Tool
          link="https://www.amazon.com/Roost-Laptop-Stand-Adjustable-Portable/dp/B01C9KG8IG"
          title="Roost Laptop Stand"
        />
        <Tool
          link="https://www.intelligentchange.com/products/the-five-minute-journal"
          title="Five Minute Journal"
        />
        <Tool
          link="http://The Tools Method for the Digital Age"
          title="Bullet Journal: The Tools Method for the Digital Age"
        />
        <Tool
          link="https://rhodiapads.com/collections_dot_goalbook.php"
          title="Rhodia Goalbook"
        />
        <Tool
          link="https://bestself.co/collections/all/products/self-journal?variant=18866392563781"
          title="SELF Journal"
        />
        <Tool
          link="https://www.amazon.com/Leuchtturm-Softcover-Medium-Dotted-Notebook/dp/B003EVHV6S"
          title="Leuchtturm Softcover Medium A5 Dotted Notebook"
        />
      </ul>
    </Layout>
  );
}
