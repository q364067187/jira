import { Table } from "antd";
import dayjs from "dayjs";

interface Project {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
}

export interface User {
  id?: number;
  name?: string;
  token?: string;
}

interface ListProps {
  list: Project[];
  users: User[];
}

const List = ({ list, users }: ListProps) => {
  return (
    <Table
      pagination={false}
      rowKey="id"
      columns={[
        {
          title: "项目",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "部门",
          dataIndex: "organization",
        },
        {
          title: "负责人",
          dataIndex: "personId",
          render: (value, record) => {
            return users.find((user) => user.id === value)?.name || "未知";
          },
        },
        {
          title: "创建时间",
          dataIndex: "created",
          render: (value, record) => {
            return value ? dayjs(value).format("YYYY-MM-DD") : "无";
          },
        },
      ]}
      dataSource={list}
    />
  );
};

export default List;
