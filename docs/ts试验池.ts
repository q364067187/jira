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

// 单独给o定义为object是没问题的
let o1: object;
o1 = {
  name: 2,
};
// 但如果解构o,因为object的范围很广,有可能是函数这种传统意义上不是键值对的类型,所以ts引擎将处理成空对象
const a = { ...o1 };
// a.key 会报错
// 如果需要使用键值对对象类型,可以定义为
let o2: { [key: string]: unknown };
const a1 = { ...o2 };
// a1.key就不会报错了
