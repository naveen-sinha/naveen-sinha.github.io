import React from "react";
import styles from "./css-modules.module.css";

import Layout from "../components/layout";

const Podcast = (props) => (
  <li>
    <div className={styles.podcast}>
      <a className={styles.link} href={props.link}>
        {props.title}
      </a>
    </div>
  </li>
);

export default function Podcasts() {
  return (
    <Layout>
      <h1>Podcasts</h1>
      <h2>Favorites</h2>

      <ul>
        <Podcast
          link="https://fs.blog/the-knowledge-project/"
          title="The Knowledge Project"
        />
        <Podcast
          link="https://madeyouthinkpodcast.com/"
          title="Made You Think"
        />
        <Podcast
          link="https://tim.blog/podcast/"
          title="The Tim Ferriss Show"
        />
        <Podcast
          link="https://www.perell.com/podcast"
          title="North Star Podcast"
        />
      </ul>

      <h2>Food</h2>

      <ul>
        <Podcast
          link="https://www.farmtotaber.com/episodes"
          title="Farm to Taber"
        />
        <Podcast link="https://www.fieldworktalk.org/" title="Field Work" />
        <Podcast
          link="https://podcasts.apple.com/us/podcast/future-food/id1400395761"
          title="Future Food"
        />
        <Podcast
          link="https://www.listennotes.com/podcasts/future-of-agriculture-tim-hammerich-0Fqmng_Noei/"
          title="Future of Ag"
        />
        <Podcast link="https://themodernacre.com/" title="Modern Acre" />
      </ul>

      <h2>Data</h2>

      <ul>
        <Podcast
          link="http://investorfieldguide.com/podcast/"
          title="Invest Like the Best"
        />
        <Podcast
          link="https://animalspiritspod.libsyn.com/"
          title="Animal Spirits"
        />
        <Podcast link="https://hiddenforces.io/" title="Hidden Forces" />
        <Podcast
          link="https://lexfridman.com/ai/"
          title="Artificial Intelligence: AI Podcast"
        />
        <Podcast
          link="https://podcasts.voxmedia.com/show/land-of-the-giants"
          title="Land of the
                    Giants"
        />
        <Podcast
          link="https://www.dataengineeringpodcast.com/"
          title="Data Engineering Podcast"
        />
        <Podcast link="https://www.pythonpodcast.com/" title="Python Podcast" />
      </ul>

      <h2>Science</h2>

      <ul>
        <Podcast link="https://after-on.com/" title="After On" />
        <Podcast
          link="https://www.listennotes.com/podcasts/long-now-conversations-at-the-interval-the-i_IflpMs5Y0/"
          title="Long
                    Now: Conversations at the Interval"
        />
        <Podcast
          link="https://www.preposterousuniverse.com/podcast/"
          title="Mindscape"
        />
      </ul>
    </Layout>
  );
}
