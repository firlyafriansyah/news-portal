import type { Article } from '@/domain/news/Article';

export const SearchNewsApiRepository = (search: string) => {
  const fetchNews = async (): Promise<Article[]> => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=d8b8bf06d187458ab1aaa9b562162e87`
    );
    const data = await response.json();
    return data.articles;
  };

  return {
    fetchNews,
  };
};
