import { useState, useEffect } from 'react';
import type {Article} from '@/domain/news/article.ts';
import { NewsApiRepository } from '@/infrastructure/news/news-api-repository.ts';
import { NewsServiceImpl } from '@/application/news/news-service-impl.ts';
import { useSearchStore } from "@/ui/stores/search-store.ts";
import { SearchNewsApiRepository } from "@/infrastructure/news/search-news-api-repository.ts";

export const useNews = (page: number, pageSize: number) => {
  const { search } = useSearchStore();
  const [news, setNews] = useState<Article[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const repo = search ? SearchNewsApiRepository(search, page, pageSize) : NewsApiRepository(page, pageSize);
    const service = NewsServiceImpl(repo);

    service.getNews().then((res) => {
      setTotal(res.total);
      setNews(res.data);
    });
  }, [page, pageSize, search]);

  return { news, total };
};
