// 加入下行可以在组件上使用css
/** @jsxImportSource @emotion/react */
import { Form, Input } from "antd";
import { IdSelect } from "components/idSelect";
import { User } from "types/user";

interface SearchProps {
  param: Partial<{
    name: string;
    personId: number;
  }>;
  setParam: (param: SearchProps["param"]) => void;
  users: User[];
  loading: boolean;
}

const Search = ({ param, setParam, users, loading }: SearchProps) => {
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
        <IdSelect
          value={param.personId}
          defaultValue="请选择负责人"
          options={users}
          loading={loading}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        />
      </Form.Item>
    </Form>
  );
};

export default Search;
