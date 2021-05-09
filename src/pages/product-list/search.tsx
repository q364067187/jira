import { Form, Input, Select } from "antd";
import { User } from "./list";

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
    <Form>
      <Input
        onChange={(ev) =>
          setParam({
            ...param,
            name: ev.target.value,
          })
        }
      />
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
    </Form>
  );
};

export default Search;
