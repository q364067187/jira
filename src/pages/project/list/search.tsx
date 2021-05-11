// 加入下行可以在组件上使用css
/** @jsxImportSource @emotion/react */
import { Form, Input, Select } from "antd";
import { User } from "types/user";

interface SearchProps {
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchProps["param"]) => void;
  users: User[];
}

const Search = ({ param, setParam, users }: SearchProps) => {
  return (
    <Form css={{ marginBottom: "2rem" }} layout="inline">
      <Form.Item>
        <Input
          placeholder="项目名"
          onChange={(ev) =>
            setParam({
              ...param,
              name: ev.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        >
          <Select.Option value="">请选择负责人</Select.Option>
          {users.map((user) => (
            <Select.Option key={user.id} value={user.id || ""}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default Search;
