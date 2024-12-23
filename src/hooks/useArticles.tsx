import { useEffect, useState } from 'react';
import axios from 'axios';

interface Article {
  title: string;
  description: string;
  url: string;
  source: { name: string };
  publishedAt: string;
  urlToImage: string | null;
}

export const useArticles = (filters: { keyword: string; category: string; dateRange: string }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: filters.keyword || 'news',
            from: filters.dateRange,
            apiKey: "f8b674775f834c278c9f2cf74e5ff190",
          },
        });

        const articlesWithImages = response.data.articles.filter(
          (article: Article) => article.urlToImage !== null
        );

        setArticles(articlesWithImages);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();

    //Fun("BBC NEWS")
    // const articlesWithSource = response.data.articles.filter(
    //     (article: Article) => article.name === key
    //   );
  }, [filters]);

  return { articles, loading };
};
