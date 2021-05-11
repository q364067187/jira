import { Table, TableProps } from "antd";
import dayjs from "dayjs";
import { Project } from "types/project";
import { User } from "types/user";

interface ListProps extends TableProps<Project> {
  users: User[];
}

const List = ({ users, ...props }: ListProps) => {
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
      {...props}
    />
  );
};

export default List;
