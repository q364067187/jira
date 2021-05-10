import { useArray, useMount } from "utils";

const PageUseArray = () => {
  const persons: { name: string; age: number }[] = [
    { name: "jack", age: 21 },
    { name: "ma", age: 22 },
  ];
  const { value, clear, removeIndex, add } = useArray(persons);

  useMount(() => {
    // 期待报错
    // console.log(value.notExst)
    // add({name: 'david'})
    // removeIndex('123')
  });

  return (
    <div>
      {/* 期待：点击以后增加 john */}
      <button onClick={() => add({ name: "john", age: 30 })}>add John</button>
      {/* 期待：点击以后删除第一项 */}
      <button onClick={() => removeIndex(0)}>delete first</button>
      {/* 期待：清除所有 */}
      <button onClick={() => clear()}>clear all</button>
      {value.map((person, index) => (
        <div key={index}>
          <span style={{ color: "red" }}></span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};

export default PageUseArray;
