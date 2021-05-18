发生情况：
在一个函数组件中，设置一个变量
再设置一个 useState
在 useEffect 中 set 一下这个 state
以这个变量为依赖
就会出现无限循环的情况

原因：
当 setState 的时候，函数组件会重新渲染，此时，创建的变量将和原来的变量不一致，就会使 useEffect 生效，导致无限循环
详见如下：

// 当 obj 是基本类型的时候，就不会无限循环
// 当 obj 是对象的时候，就会无限循环
// 当 obj 是对象的 state 时，不会无限循环
const [obj, setObj] = useState({ name: "Jack" });
// const obj = 1;
// const obj = {name: 'Jack'}
const [num, setNum] = useState(0);

useEffect(() => {
console.log("effect");
setNum(num + 1);
}, [obj]);

解决办法：

1. 用 useRef 将创建的对象固定
   const a = useRef({b: 1});
   useRef 固定后，不会再改变这个对象的引用
   但是这个对象也不能轻易修改了
2. 用 useState，把对象处理成组件的状态，就不会出问题了
   而且可以修改，产生有效的变化
