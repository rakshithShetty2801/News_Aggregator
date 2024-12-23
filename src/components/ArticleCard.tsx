import React from "react";
import "../styles/global.scss";
import { Card, CardFooter, CardHeader } from "reactstrap";

interface ArticleProps {
  title: string;
  url: string;
  imgSrc: string | undefined;
}

const ArticleCard: React.FC<ArticleProps> = ({
  title,
  url,
  imgSrc,
}) => (
  <Card className="articleCard">
    <div className="articleCardImage">
      <img src={imgSrc} alt="articleImage"/>
    </div>
    <CardHeader>
      <h5>{title}</h5>
    </CardHeader>
    <CardFooter>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </CardFooter>
  </Card>
);

export default ArticleCard;
