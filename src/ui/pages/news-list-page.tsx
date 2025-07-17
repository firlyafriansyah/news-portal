import * as React from 'react';
import { Button, Flex, List, Typography } from 'antd';
import { useNews } from '../hooks/use-news.ts';
import MainLayout from "@/ui/components/layout.tsx";
import { FormatDate } from "@/shared/utils.ts";
import NewsModal from "@/ui/components/news-modal.tsx";
import type { Article } from "@/domain/news/article.ts";

const { Text } = Typography;

export const NewsListPage = () => {
  const [pagination, setPagination] = React.useState({ page: 1, pageSize: 5 });
  const [selectedData, setSelectedData] = React.useState<Article>({} as Article);
  const [showNewsDetail, setShowNewsDetail] = React.useState<boolean>(false);

  const { news, total } = useNews(pagination.page, pagination.pageSize)

  return (
    <>
      <MainLayout>
        <List
          itemLayout="vertical"
          size="large"
          pagination={news.length ? {
            onChange: (page) => {
              setPagination({
                ...pagination,
                page,
              })
            },
            total: total,
            pageSize: pagination.pageSize,
          } : false}
          dataSource={news}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                <p key="published-date">Published Date: {item.publishedAt && FormatDate(item.publishedAt)}</p>
              ]}
              extra={item.urlToImage ? (
                <img
                  width={272}
                  alt="logo"
                  src={item.urlToImage}
                />
              ) : (
                <Flex justify="center" align="center" style={{ width: "272px", height: "180px", backgroundColor: '#d1d1d1' }}>
                  <Text>No Image</Text>
                </Flex>
              )}
            >
              <List.Item.Meta
                title={item.title}
                description={item.author}
              />
              <div>
                <div>
                  {item.description}
                </div>
                <Button
                  type="link"
                  style={{ padding: '0', marginTop: '8px' }}
                  onClick={() => {
                    setShowNewsDetail(true)
                    setSelectedData(item);
                  }}
                >
                  Read Detail
                </Button>
              </div>
            </List.Item>
          )}
        />
      </MainLayout>

      <NewsModal
        data={selectedData}
        isOpen={showNewsDetail}
        setIsOpen={setShowNewsDetail}
      />
    </>
  );
};
