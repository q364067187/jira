type A = {
  name: string;
  age: number;
};

// 将type中的属性设为可选
const xiaohong: Partial<A> = {
  name: "xiaohong",
};

// 删除type中的属性
const xiaoming: Omit<A, "name"> = {
  age: 7,
};
