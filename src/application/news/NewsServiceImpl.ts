import type { NewsService } from '@/domain/news/NewsService';
import type { Article } from '@/domain/news/Article';

export function NewsServiceImpl(repository: { fetchNews: any }): NewsService {
  return {
    async getNews(): Promise<Article[]> {
      return repository.fetchNews();
    }
  };
}
