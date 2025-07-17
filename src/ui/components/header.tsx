import {Button, Flex, type GetProps, Input, type InputRef, Layout, Tooltip, Typography} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import * as React from "react";
import {useSearchStore} from "@/ui/stores/searchStore.ts";

type SearchProps = GetProps<typeof Input.Search>;

const { Header } = Layout;
const { Title } = Typography;
const { Search } = Input;

export default function CustomHeader() {
  const { setSearch } = useSearchStore();
  const searchInputRef = React.useRef<InputRef>(null);
  const [showSearch, setShowSearch] = React.useState<boolean>(false);

  const onSearch: SearchProps['onSearch'] = (value) => {
    setSearch(value);
  };

  React.useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus?.();
    }
  }, [showSearch]);

  return (
    <Header
      style={{
        height: '42px',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Flex
        align="center"
        justify="space-between"
        style={{
          width: '80%',
          margin: '0px auto'
        }}
      >
        <Flex align="center" gap="middle" style={{ width: '33%' }}>
          <Tooltip title="search">
            <Button
              shape="circle"
              icon={<SearchOutlined />}
              onClick={() => setShowSearch((prev) => !prev)}
            />
          </Tooltip>
          {showSearch && (
            <Search
              ref={searchInputRef}
              style={{ width: '70%' }}
              placeholder="Input search text"
              allowClear
              enterButton="Go"
              size="middle"
              onSearch={onSearch}
            />
          )}
        </Flex>
        <Title level={4} style={{ width: '66%', textAlign: 'left', margin: 0, fontFamily: 'cursive' }}>News Portal - Eigen Tri Mathema</Title>
      </Flex>
    </Header>
  )
}
