import * as React from "react";
import {Layout} from "antd";
import CustomHeader from "@/ui/components/header.tsx";

const { Content } = Layout;

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <CustomHeader />
      <Content>
        <div style={{ width: '80%', margin: '0 auto', padding: '20px 0' }}>
          {children}
        </div>
      </Content>
    </Layout>
  )
}
