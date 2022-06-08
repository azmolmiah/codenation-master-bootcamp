// Libraries
import React from "react";

// Components
import NewsCard from "./NewsCard";

// Resources
import ArticleOne from "../../images/news/article1.webp";
import ArticleTwo from "../../images/news/article2.webp";
import ArticleThree from "../../images/news/article3.webp";
import ArticleFour from "../../images/news/article4.webp";

const News = () => {
  return (
    <div className="flex container">
      <NewsCard
        src={ArticleOne}
        alt="article one"
        title="Lawbreaker Could win again: case against ousting Boris Johnson"
        shortText="Some of the key arguments being deployed by both sides as spin war begins ahead of ..."
        duration="2h"
        category="Boris The Animal"
      />
      <NewsCard
        src={ArticleTwo}
        alt="article one"
        title="From May to Heath: Tories who have faced votes on their leadership"
        shortText="May faced a vote of no confidence in December 2018 after she lost the support of Tory colleagues ..."
        duration="1h"
        category="May Day"
      />
      <NewsCard
        src={ArticleThree}
        alt="article three"
        title="Queen’s platinum jubilee: key timings for official celebrations"
        shortText="As Britain embarks on a four-day weekend to mark the Queen’s platinum jubilee, here are the ..."
        duration="2h"
        category="Lovely Jubliee"
      />

      <NewsCard
        src={ArticleFour}
        alt="article four"
        title="Hands off our park: Shrewsbury takes its council to the supreme court"
        shortText="AIn the Greenfields recreation ground in Shrewsbury, a yoga class is wrapping up while, nearby, …"
        duration="2h"
        category="Local News"
      />
    </div>
  );
};

export default News;
