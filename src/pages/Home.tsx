import React, { useState } from "react";
import ArticleCard from "../components/ArticleCard";
import FilterPanel from "../components/FilterPanel";
import { useArticles } from "../hooks/useArticles";

const Home: React.FC = () => {
  const [filters, setFilters] = useState({
    keyword: "",
    category: "",
    dateRange: "",
  });
  const { articles, loading } = useArticles(filters);

  return (
    <div className="container">
      <FilterPanel onFilterChange={setFilters} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {articles.map((article) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 p-2"
              key={article.url}
            >
              <ArticleCard
                title={article.title}
                url={article.url}
                imgSrc={article.urlToImage ? article.urlToImage : ""}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
