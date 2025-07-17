import {Button, Flex, Modal} from "antd";
import type {Article} from "@/domain/news/Article.ts";
import { Typography } from 'antd';

const { Text } = Typography;

interface NewModalProps {
  data: Article;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function NewsModal({ data, isOpen, setIsOpen }: NewModalProps) {
  return (
    <Modal
      open={isOpen}
      closable={false}
      title={data.title}
      onCancel={() => setIsOpen(false)}
      footer={[
        <Button key="back" onClick={() => setIsOpen(false)}>
          Close
        </Button>
      ]}
    >
      <Text type="secondary" style={{ textAlign: 'justify' }}>{data.description}</Text>
      {data.urlToImage ? (
        <img src={data.urlToImage} alt="articel-image" style={{ width: '100%', margin: "10px auto" }} />
      ) : (
        <Flex justify="center" align="center" style={{ width: '100%', height: '250px', backgroundColor: '#e5e5e5' }}>
          <Text>No Image</Text>
        </Flex>
      )}
      <Text style={{ textAlign: 'justify' }}>{data.content}</Text>
      <Button type="link" style={{ padding: !data.content ? "0" : '0px 16px' }} onClick={() => window.open(data.url, '_blank')}>Read Full Article</Button>
    </Modal>
  )
}
