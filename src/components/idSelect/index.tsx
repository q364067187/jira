import { Select } from "antd";

type SelectProps = React.ComponentProps<typeof Select>;

interface IdSelectProps
  extends Omit<SelectProps, "value" | "options" | "onChange"> {
  value?: string | number | null;
  options?: { name: string; id: number }[];
  defaultValue: string;
  onChange: (value?: number) => void;
}

export const IdSelect = (props: IdSelectProps) => {
  const { value, options, defaultValue, onChange, ...resProps } = props;
  return (
    <Select
      value={toNum(value)}
      onChange={(value) => onChange(toNum(value) || undefined)}
      {...resProps}
    >
      {defaultValue ? (
        <Select.Option value={0}>{defaultValue}</Select.Option>
      ) : null}
      {options?.map((option) => (
        <Select.Option value={option.id} key={option.id}>
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
};

function toNum(value: unknown) {
  const n = Number(value);
  return isNaN(n) ? 0 : n;
}
