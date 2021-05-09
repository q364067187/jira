type Person = {
  name: string;
  age: number;
};

// 将type中的属性设为可选
const xiaohong: Partial<Person> = {
  name: "xiaohong",
};

// 删除type中的属性
const xiaoming: Omit<Person, "name"> = {
  age: 7,
};

// 一个类型中的key数组类型
type PersonKeys = keyof Person;
// 选择一个类型中指定key作为新类型
type PersonOnlyName = Pick<Person, "name">;
// 对key数组类型排除指定类型key
type OnlyAge = Exclude<PersonKeys, "name">;

// Partial实现
type DiyPartial<T> = {
  [P in keyof T]?: T[P];
};
const xiaolong: DiyPartial<Person> = {
  name: "xiaolong",
};

// Omit实现
type DiyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
const xiaopang: DiyOmit<Person, "name"> = {
  age: 21,
};
