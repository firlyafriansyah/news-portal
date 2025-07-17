import {Button, List} from 'antd';
import {useNews} from '../hooks/useNews';
import MainLayout from "@/ui/components/layout.tsx";
import {FormatDate} from "@/shared/utils.ts";

export const NewsListPage = () => {
  const news = useNews();

  return (
    <MainLayout>
      <List
        itemLayout="vertical"
        size="large"
        pagination={news.length ? {
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
        } : false}
        dataSource={news}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <p>Published Date: {item.publishedAt && FormatDate(item.publishedAt)}</p>
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src={item.urlToImage}
              />
            }
          >
            <List.Item.Meta
              title={<a href={item.url}>{item.title}</a>}
              description={item.author}
            />
            <div>
              {item.description}
              <Button type="link">Read Detail</Button>
            </div>
          </List.Item>
        )}
      />
    </MainLayout>
  );
};
