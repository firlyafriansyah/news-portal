import type { NewsService } from '@/domain/news/news-service.ts';
import type { Article } from '@/domain/news/article.ts';

export function NewsServiceImpl(repository: { fetchNews: () => Promise<{ total: number, data: Article[] }> }): NewsService {
  return {
    async getNews(): Promise<{ total: number, data: Article[] }> {
      return repository.fetchNews();
    }
  };
}
