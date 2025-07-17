import type {Article} from './Article';

export interface NewsService {
  getNews(): Promise<{ total: number, data: Article[] }>;
}
