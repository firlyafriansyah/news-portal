import { useState, useEffect } from 'react';
import type {Article} from '@/domain/news/Article';
import { NewsApiRepository } from '@/infrastructure/news/NewsApiRepository';
import { NewsServiceImpl } from '@/application/news/NewsServiceImpl';
import {useSearchStore} from "@/ui/stores/searchStore.ts";
import {SearchNewsApiRepository} from "@/infrastructure/news/SearchNewsApiRepository.ts";

export const useNews = () => {
  const { search } = useSearchStore();
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    const repo = search ? SearchNewsApiRepository(search) : NewsApiRepository();
    const service = NewsServiceImpl(repo);

    service.getNews().then(setNews);
  }, [search]);

  return news;
};
