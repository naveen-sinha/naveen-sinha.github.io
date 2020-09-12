import React from "react";
import styles from "./css-modules.module.css";

import Layout from "../components/layout";

const Book = (props) => (
  <li>
    <div className={styles.book}>
      <a className={styles.link} href={props.link}>
        {props.title}
      </a>
    </div>
  </li>
);

export default function Books() {
  return (
    <Layout>
      <h1>Books</h1>
      <h2>What I'm Reading</h2>

      <ul>
        <Book
          link="https://www.amazon.com//New-Jim-Crow-Incarceration-Colorblindness-ebook/dp/B086CFB2NT"
          title="The New Jim Crow: Mass Incarceration in the Age of Colorblindness"
        />
        <Book
          link="https://www.amazon.com/Lies-My-Teacher-Told-Everything/dp/1620973928/"
          title="Lies My Teacher Told Me: Everything Your American History Textbook Got Wrong"
        />
        <Book
          link="https://www.amazon.com/Young-China-Restless-Generation-Country/dp/1250078814"
          title="Young China: How the Restless Generation Will Change Their Country and the World"
        />
        <Book
          link="https://www.amazon.com/Road-Reality-Complete-Guide-Universe/dp/0679776311"
          title="The Road to Reality: A Complete Guide to the Laws of the Universe"
        />
      </ul>

      <h2>What I've Read</h2>

      <h3>Healthy</h3>

      <ul>
        <Book
          link="https://www.amazon.com/4-Hour-Chef-Cooking-Learning-Anything/dp/1328519163"
          title="The 4-Hour Chef: The Simple Path to Cooking Like a Pro, Learning Anything, and Living the Good Life"
        />
        <Book
          link="https://www.amazon.com/Breath-New-Science-Lost-Art/dp/0735213615/"
          title="Breath: The New Science of a Lost Art"
        />
        <Book
          link="https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692"
          title="Deep Work: Rules for Focused Success in a Distracted World"
        />
        <Book
          link="https://www.amazon.com/Dirt-Soil-Familys-Regenerative-Agriculture/dp/1603587632"
          title="Dirt to Soil: One Family’s Journey into Regenerative Agriculture"
        />
        <Book
          link="https://www.amazon.com/Discipline-Equals-Freedom-Field-Manual/dp/1250156947"
          title="Discipline Equals Freedom"
        />
        <Book
          link="https://www.amazon.com/Folks-This-Aint-Normal-Healthier/dp/0892968192"
          title="Folks, This Ain't Normal: A Farmer's Advice for Happier Hens, Healthier People, and a Better World"
        />
        <Book
          link="https://www.amazon.com/Gaijin-Cookbook-Japanese-Lifelong-Outsider/dp/1328954358"
          title="The Gaijin Cookbook: Japanese Recipes from a Chef, Father, Eater, and Lifelong Outsider"
        />
        <Book
          link="https://www.amazon.com/Growing-Revolution-Bringing-Soil-Back/dp/0393608328"
          title="Growing a Revolution: Bringing Our Soil Back to Life"
        />
        <Book
          link="https://www.amazon.com/Home-Made-Yvette-van-Boven/dp/1584799463"
          title="Home Made"
        />
        <Book
          link="https://www.amazon.com/How-Happier-Parent-Raising-Family/dp/0735210470"
          title="How to be a Happier Parent: Raising a Family, Having a Life, and Loving (Almost) Every Minute"
        />
        <Book
          link="https://www.amazon.com/Ivan-Ramen-Obsession-Recipes-Unlikely/dp/1607744465"
          title="Ivan Ramen: Love, Obsession, and Recipes from Tokyo's Most Unlikely Noodle Joint"
        />
        <Book
          link="https://www.amazon.com/Japanese-Farm-Nancy-Singleton-Hachisu/dp/1449418295"
          title="Japanese Farm Food"
        />
        <Book
          link="https://www.amazon.com/Life-Changing-Magic-Tidying-Decluttering-Organizing/dp/1607747308"
          title="The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing"
        />
        <Book
          link="https://www.amazon.com/My-New-Roots-Inspired-Plant-Based/dp/0804185387"
          title="My New Roots: Inspired Plant-Based Recipes for Every Season"
        />
        <Book
          link="https://www.amazon.com/Six-Seasons-New-Way-Vegetables/dp/1579656315"
          title="Six Seasons: A New Way with Vegetables"
        />
        <Book
          link="https://www.amazon.com/Third-Plate-Field-Notes-Future/dp/1594204071"
          title="The Third Plate: Field Notes on the Future of Food"
        />
        <Book
          link="https://www.amazon.com/What-Doesnt-Kill-Environmental-Conditioning/dp/1623366909"
          title="What Doesn't Kill Us: How Freezing Water, Extreme Altitude, and Environmental Conditioning Will Renew Our Lost Evolutionary Strength"
        />
        <Book
          link="https://www.amazon.com/What-Eat-Around-World-Diets/dp/0984074406"
          title="What I Eat: Around the World in 80 Diets"
        />
      </ul>

      <h3>Wealthy</h3>
      <ul>
        <Book
          link="https://www.amazon.com/Alchemy-Curious-Science-Creating-Business/dp/006238841X"
          title="Alchemy: The Dark Art and Curious Science of Creating Magic in Brands, Business, and Life"
        />
        <Book
          link="https://www.amazon.com/Ascent-Money-Financial-History-World/dp/0143116177"
          title="The Ascent of Money: A Financial History of the World"
        />
        <Book
          link="https://www.amazon.com/Data-Science-Scratch-Principles-Python/dp/1492041130"
          title="Data Science from Scratch: First Principles with Python"
        />
        <Book
          link="https://www.amazon.com/Devils-Financial-Dictionary-Jason-Zweig/dp/1610396995"
          title="The Devil's Financial Dictionary"
        />
        <Book
          link="https://www.amazon.com/Dollars-Sense-Misthink-Money-Smarter/dp/006265120X"
          title="Dollars and Sense: How We Misthink Money and How to Spend Smarter"
        />
        <Book
          link="https://www.amazon.com/Door-Magnificent-Maddening-Mysterious-Transportation/dp/0062372084/"
          title="Door to Door: The Magnificent, Maddening, Mysterious World of Transportation"
        />
        <Book
          link="https://www.amazon.com/Economist-Gets-Lunch-Everyday-Foodies/dp/0525952667"
          title="An Economist Gets Lunch: New Rules for Everyday Foodies"
        />
        <Book
          link="https://www.amazon.com/Effective-Executive-Definitive-Getting-Things/dp/0062574345"
          title="The Effective Executive: The Definitive Guide to Getting the Right Things Done"
        />
        <Book
          link="https://www.amazon.com/Fooled-Randomness-Hidden-Markets-Incerto/dp/1400067936"
          title="Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets (Incerto)"
        />
        <Book
          link="https://www.amazon.com/Intelligent-Investor-Classic-Value-Investing/dp/0060752610"
          title="The Intelligent Investor: The Classic Text on Value Investing"
        />
        <Book
          link="https://www.amazon.com/Loonshots-Nurture-Diseases-Transform-Industries/dp/1250185963"
          title="Loonshots: How to Nurture the Crazy Ideas That Win Wars, Cure Diseases, and Transform Industries"
        />
        <Book
          link="https://www.amazon.com/Man-Who-Solved-Market-Revolution/dp/073521798X"
          title="The Man Who Solved the Market: How Jim Simons Launched the Quant Revolution"
        />
        <Book
          link="https://www.amazon.com/No-Filter-Inside-Story-Instagram/dp/1982126809"
          title="No Filter: The Inside Story of Instagram"
        />
        <Book
          link="https://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X"
          title="The Pragmatic Programmer: From Journeyman to Master"
        />
        <Book
          link="https://www.amazon.com/Ride-Lifetime-Lessons-Learned-Company/dp/0399592091"
          title="The Ride of a Lifetime: Lessons Learned from 15 Years as CEO of the Walt Disney Company"
        />
        <Book
          link="https://www.amazon.com/Will-Teach-You-Be-Rich/dp/0761147489"
          title="I Will Teach You To Be Rich"
        />
      </ul>

      <h3>Wise</h3>

      <ul>
        <Book
          link="https://www.amazon.com/Almost-Nearly-Perfect-People-Scandinavian/dp/1250061962/"
          title="The Almost Nearly Perfect People: Behind the Myth of the Scandinavian Utopia"
        />
        <Book
          link="https://www.amazon.com/Antifragile-Things-That-Disorder-Incerto/dp/1400067820"
          title="Antifragile: Things That Gain from Disorder (Incerto) "
        />
        <Book
          link="https://www.amazon.com/Artificial-Intelligence-Guide-Thinking-Humans/dp/0374257833/"
          title="Artificial Intelligence: A Guide for Thinking Humans"
        />
        <Book
          link="https://www.amazon.com/Bed-Procrustes-Philosophical-Practical-Aphorisms/dp/0812982401"
          title="The Bed of Procrustes: Philosophical and Practical Aphorisms (Incerto)"
        />
        <Book
          link="https://www.amazon.com/Bill-Bryson-History-Private-12-2-2009/dp/B00HTK1TNG"
          title="At Home: A Short History of Private Life"
        />
        <Book
          link="https://www.amazon.com/Book-Why-Science-Cause-Effect/dp/046509760X"
          title="The Book of Why: The New Science of Cause and Effect"
        />
        <Book
          link="https://www.amazon.com/Dataclysm-When-Think-Ones-Looking/dp/0385347375"
          title="Dataclysm: Who We Are (When We Think No One's Looking)"
        />
        <Book
          link="https://www.amazon.com/Deep-Freediving-Renegade-Science-Ourselves/dp/0547985525"
          title="Deep: Freediving, Renegade Science, and What the Ocean Tells Us about Ourselves"
        />
        <Book
          link="https://www.amazon.com/Everybody-Lies-Internet-About-Really-ebook/dp/B01AFXZ2F4/"
          title="Everybody Lies: Big Data, New Data, and What the Internet Can Tell Us About Who We Really Are"
        />
        <Book
          link="https://www.amazon.com/Homo-Deus-Brief-History-Tomorrow/dp/0062464310"
          title="Homo Deus: A Brief History of Tomorrow"
        />
        <Book
          link="https://www.amazon.com/Kitchen-Confidential-Adventures-Culinary-Underbelly/dp/158234082X"
          title="Kitchen Confidential: Adventures in the Culinary Underbelly"
        />
        <Book
          link="https://www.amazon.com/Model-Thinker-What-Need-Know/dp/0465094627"
          title="The Model Thinker: What You Need to Know to Make Data Work for You"
        />
        <Book
          link="https://www.amazon.com/Most-Human-Talking-Computers-Teaches/dp/0385533063"
          title="The Most Human Human: What Talking with Computers Teaches Us About What It Means to Be Alive"
        />
        <Book
          link="https://www.amazon.com/Nothing-Envy-Ordinary-Lives-North/dp/0385523904"
          title="Nothing to Envy: Ordinary Lives in North Korea"
        />
        <Book
          link="https://www.amazon.com/Rice-Noodle-Fish-Travels-Through/dp/0062394037"
          title="Rice, Noodle, Fish: Deep Travels Through Japan's Food Culture"
        />
        <Book
          link="https://www.amazon.com/Scale-Universal-Innovation-Sustainability-Organisms/dp/1594205582"
          title="Scale: The Universal Laws of Growth, Innovation, Sustainability, and the Pace of Life in Organisms, Cities, Economies, and Companies"
        />
        <Book
          link="https://www.amazon.com/Short-History-Nearly-Everything/dp/0767908171"
          title="A Short History of Nearly Everything"
        />
        <Book
          link="https://www.amazon.com/Super-Sushi-Ramen-Express-Adventure/dp/1250145686"
          title="Super Sushi Ramen Express: A Culinary Adventure Through Japan"
        />
        <Book
          link="https://www.amazon.com/Superforecasting-Science-Prediction-Philip-Tetlock/dp/0804136718"
          title="Superforecasting: The Art and Science of Prediction"
        />
        <Book
          link="https://www.amazon.com/This-View-Life-Completing-Revolution/dp/1101870206"
          title="This View of Life: Completing the Darwinian Revolution"
        />
        <Book
          link="https://www.amazon.com/Three-Tigers-One-Mountain-Conflicts-ebook/dp/B07S9MJR2P/"
          title="Three Tigers, One Mountain: A Journey Through the Bitter History and Current Conflicts of China, Korea, and Japan"
        />
        <Book
          link="https://www.amazon.com/Tools-Titans-Billionaires-World-Class-Performers/dp/1328683788"
          title="Tools of Titans: The Tactics, Routines, and Habits of Billionaires, Icons, and World-Class Performers"
        />
        <Book
          link="https://www.amazon.com/Undoing-Project-Friendship-Changed-Minds/dp/0393254593"
          title="The Undoing Project: A Friendship That Changed Our Minds"
        />
        <Book
          link="https://www.amazon.com/What-Eat-Around-World-Diets/dp/0984074406"
          title="What I Eat: Around the World in 80 Diets"
        />
      </ul>

      <h3>Fiction</h3>

      <ul>
        <Book
          link="https://www.amazon.com/After-Silicon-Valley-Rob-Reid/dp/1524798053"
          title="After On"
        />
        <Book
          link="https://www.amazon.com/Anathem/dp/B001GS0QF4"
          title="Anathem"
        />
        <Book
          link="https://www.amazon.com/Dark-Forest-Remembrance-Earths-Past-ebook/dp/B00R13OYU6"
          title="The Dark Forest (Remembrance of Earth's Past Book 2)"
        />
        <Book
          link="https://www.amazon.com/Martian-Novel-Andy-Weir/dp/0804139024"
          title="The Martian: A Novel"
        />
        <Book
          link="https://www.amazon.com/Millennial-Project-Colonizing-Galaxy-Eight/dp/0316771635"
          title="The Millennial Project: Colonizing the Galaxy in Eight Easy Steps"
        />
        <Book
          link="https://www.amazon.com/Seveneves-Novel-Neal-Stephenson/dp/0062190377"
          title="Seveneves: A Novel"
        />
        <Book
          link="https://www.amazon.com/Stories-Your-Life-Others-Chiang/dp/1101972122/"
          title="Stories of Your Life and Others"
        />
        <Book
          link="https://www.amazon.com/Three-Body-Problem-Remembrance-Earths-Past/dp/0765377063"
          title="The Three-Body Problem (Remembrance of Earth's Past)"
        />
      </ul>
    </Layout>
  );
}
