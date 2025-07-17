import type { Article } from '@/domain/news/Article';

export const NewsApiRepository = (page: number, pageSize: number) => {
  const fetchNews = async (): Promise<{ total: number, data: Article[] }> => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&page=${page}&apiKey=d8b8bf06d187458ab1aaa9b562162e87`
    );
    const data = await response.json();
    return {
      total: data.totalResults,
      data: data.articles
    };
  };

  return {
    fetchNews,
  };
};
