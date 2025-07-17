import type { Article } from './article.ts';

export interface NewsService {
  getNews(): Promise<{ total: number, data: Article[] }>;
}
