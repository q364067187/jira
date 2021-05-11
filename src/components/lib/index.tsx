import styled from "@emotion/styled";
import { Spin, Typography } from "antd";
import { DevTools } from "jira-dev-tool";

export const Row = styled.div<{
  // 子元素是否有右边距
  gap?: number | boolean;
  // 是否左右排列
  between?: boolean;
  marginBottom?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.between ? "space-between" : undefined)};
  margin-bottom: ${(props) => props.marginBottom + "rem"};

  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${(props) =>
      typeof props.gap === "number"
        ? props.gap + "rem"
        : props.gap
        ? "2rem"
        : undefined};
  }
`;

// 整页
export const Fullpage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

// 整页读取
export const FullpageLoading = () => (
  <Fullpage>
    <Spin size="large"></Spin>
  </Fullpage>
);

// 整页报错
export const FullpageError = ({ error }: { error: Error | null }) => (
  <Fullpage>
    <DevTools />
    <Typography.Text type="danger">{error?.message}</Typography.Text>
  </Fullpage>
);
