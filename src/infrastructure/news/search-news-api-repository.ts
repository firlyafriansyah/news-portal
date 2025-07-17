import type { Article } from '@/domain/news/article.ts';

export const SearchNewsApiRepository = (search: string, page: number, pageSize: number) => {
  const fetchNews = async (): Promise<{ total: number, data: Article[] }> => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&pageSize=${pageSize}&page=${page}&apiKey=d8b8bf06d187458ab1aaa9b562162e87`
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
