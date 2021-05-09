import { Table } from "antd";

interface Project {
  id: number;
  name: string;
  personId: number;
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
      columns={[
        {
          title: "项目",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          dataIndex: "personId",
          render: (value, record) => {
            return users.find((user) => user.id === value)?.name || "未知";
          },
        },
      ]}
      dataSource={list}
    />
  );
};

export default List;
