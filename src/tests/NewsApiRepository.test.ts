import { NewsApiRepository } from '@/infrastructure/news/NewsApiRepository';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      articles: [
        { title: 'Test', description: 'desc', content: 'content', url: 'http://example.com' }
      ]
    })
  })
) as jest.Mock;

test('fetchNews returns articles', async () => {
  const repo = new NewsApiRepository();
  const articles = await repo.fetchNews();
  expect(articles).toHaveLength(1);
  expect(articles[0].title).toBe('Test');
});
