// 原始数据类型

// JavaScript 的类型分为两种：原始类型与对象类型
// 原始类型包括：布尔值，数值，字符串，null、undefined 以及 ES6中的新类型 Symbol

// 布尔值
// let isDone:boolean = false;
// console.log(isDone)

// 布尔值视最基础的数据类型，在TypeScript中，使用boolean定义布尔值类型：
// 注意，使用构造函数Boolean创造的对象不是布尔值：
// let createaByNewBoolean: boolean = new Boolean(1);
// 事实上，new Boolean() 返回的是一个Boolean对象：
// let createByNewBoolean: Boolean = new Boolean(1);
// 直接调用Boolean 也可以返回一个boolean类型：
// let  createByBoolean: boolean = Boolean(1);

// 在TypeaScript中，boolean是JavaScript中的基本类型，而Boolean是JavaScript中的构造函数。其他基本类型（除了null和undefined）一样，不再赘述

// 数值
// 使用number 定义数值类型:
// let binaryLiteral: number = 5;

// 字符串
// 使用string定义字符串类型：
// let myName: string = 'Tom';

// 模板字符串
// let sentence: string = `my name is ${myName}`;

// 空值
// JavaScript没有空值 void 的概念，在typescript中，可以用void表示没有任何返回值的函数：
// function alertName(): void {
    // alert('2232')
// }

// 声明一个void 类型的变量没有什么用，因为你只能将他赋值为 undefined 和 null

// let unusable: void = undefined


// null 和 undefined

// 在 Typescript 中，可以使用 null 和 undefined 来定义这两个原始数据类型

// let u: undefined = undefined;
// let n: null = null;

// 与 void 的区别是，undefined 和 null 是所有类型的子类型，也就是说undefined 类型的变量，可以赋值给 number 类型的变量

// let num: number = undefined

// let u: undefined;
// let num: number = u;

// 而 void 类型的变量不能赋值给number 类型的变量
// let u: void;
// let num: number = u; 报错

// 任意值（any）

// 任意值用来表示允许赋值为任意类型

// 什么是任意类型

// 如果一个普通类型，在复制过程中改变类型是不允许的
// let mynumber: string = 'serven';
// mynumber = 7 报错

// 但如果是any类型，则允许被赋值为任意类型
// let mynumber: any = 'server';
// mynumber = false

// 任意值的属性和方法
// 在任意值上访问任何属性都是允许的

// let anyThing: any = 'hello';
// console.log(anyThing.myName);
// console.log(anyThing.myName.firstName);

// 也允许调用任何方法：
// let anyThing: any = 'tom';
// anyThing.setName('ddd');
// anyThing.setName('222').sayHello();
// anyThing.myName.setFirstName('cat');

// 可以认为，声明一个变量为任意值之后，对他的任何操作，返回的内容的类型都是任意值

// 未声明类型的变量

// 变量如果自声明的时候，未指定其类型，那么他会被识别为任意类型
// let someThing;
// someThing = 1
// someThing = 'ddd'

// someThing.setName('22')


// 类型推断
// 如果没有明确的指定类型，那么TypeScript会依照类型推论的规则推断出一个类型

// 什么是类型推断
// 以下代码虽然没有指定类型，但是会在编译的时候报错：

// let myFavoriteNumber = 'server';
// myFavoriteNumber = 7

// typescript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推断

// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成any类型而完全不被类型检查

// let ddd;
// ddd = '222';
// ddd = 2;

// 联合类型
// 联合类型表示取值的可以为多种类型中的一种。
// 简单的例子

// let myd: string | number;
// myd = 'ddd';
// myd = 1;

// 联合类型使用 | 分隔每个类型
// 这里let myd: string | number 的含义是，允许 myd 的类型是 string 或者 number, 但不能是其他类型

// 访问联合类型的属性和方法
// 当 typescript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：

// function getLenght(someThing: string| number): number {
//     return someThing.toString();
// }

// 上例中，length不是string 和 number 的公有属性，所有会报错

// 访问string和number的共有属性是没有问题的

// function getLenght(someThing: string| number): string {
    // return someThing.toString();
// }

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：

// let myNMber: string | number;
// myNMber = 'serve';
// console.log(myNMber.length) // 5
// myNMber = 45;
// console.log(myNMber.length) // 报错

// 对象的类型 - 接口

// 在typescript中，我们使用接口 interface 来定义对象的类型

// 什么是接口

// 在面向对象语言中，接口interfaces 是一个很重要的概念，他是对行为的抽象，而具体如何行动需要由类 classes 去实现 implement 

// typescript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对【对象的形状（Shape）】进行描述

// 简单的例子：

// interface Person {
//     name: string;
//     age: number;
// };

// let tom: Person = {
//     name: '张三',
//     age: 14
// };

// 上面的例子中，我们定义了一个接口Person, 接口定义了一个变量：Tom ，他的类型是person，这样，我们就约束性tom的形状必须和接口Peroson一致。
// 接口一般首字母大写

// 定义的变量比接口少一些属性是不允许的；

// let timi: Person = {
//     name: '李四'
// }

// 多一些属性也是不允许的

// let jik: Person = {
//     name: '王五',
//     age: 2,
//     sex: 1
// }

// 可见，赋值的时候，变量的形状必须和接口的形状保持一致

// 可选属性

// 有时我们希望不要完全匹配一个形状，那么可以用可选属性：

// interface Person {
//     name: string;
//     age?: number;
// }

// let Tom: Person = {
//     name: '张三'
// }

// 可选属性的含义是该属性可以不存在

// 这时任然不允许添加未定义的属性：

// let tom: Person = {
//     name: '李四',
//     age: 2,
//     sex: 1
// } 报错


// 任意属性

// 有时候我们希望一个接口允许有任意的属性，可以使用如下的方式：

// interface Person {
//     name: string;
//     age?: number;
//     [propName: string]: any;
// }

// let tom: Person = {
//     name: '张三',
//     age: 3,
//     sex: '男'
// }

// 使用[propName: string]: any 定义了任意属性取string类型的值
// 需要注意的是，一旦定义了任意属性，那么确定和可选属性的类型都必须是它的类型的子集

// interface Person {
//     name: string;
//     age?: number;
//     [propName: string]: string | number;
// }

// let tom: Person = {
//     name: '张三',
//     age: 4,
//     sex: '男'
// }

// 一个接口中只能定义一个任意属性，如果接口中有多个类型的行书，则可以在任意属性中使用联合类型

// 只读属性

// 有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用readonly定义只读属性：

// interface Person {
//     readonly id: number;
//     name: string;
//     age?: number;
//     [propName: string]: any;
// }

// let tom: Person = {
//     id: 8778, // 报错，使用readonly定义的属性id初始化后，又被赋值，所以报错
//     name: 'Tom',
//     age: 2,
//     sex: '男'
// }

// 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：

// interface Person {
//     readonly id: number;
//     name: string;
//     age?: number;
//     [propName: string]: any;
// }

// let tom: Person = {
//     id: 222,
//     name: 'tom',
//     sex: 'dd'
// }

// console.log(tom.id);

// 数组的类型

// 在typescript中，数组类型有多重定义方式，比较灵活

// [类型 + 方括号] 表示法

// 最简单的方法是使用类型+方括号来表示数组：
// let fib: number [] = [2,2.4, 2];

// 数组中的项不允许出现其他类型
// let fis: string [] = ['张三', '李四', 2]

// 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
// let fibd: number[] = [1,2,34,4,5];
// fibd.push('dd')
// 上例中，push方法只允许传入number类型的参数，但是却传入一个'dd'类型的参数，所以报错，

// 数组泛型
// 我们也可以使用数组泛型 Array<>来表示数组
// let finb: Array<number> = [1,2,34,5];

// 用接口来表示数组
// 接口也可以用来描述数组
// interface NumberArray {
    // [index:number]: number;
// }
// let finb: NumberArray = [2222,444]

// NumberArray表示：只要索引的类型是数字时，那么值得类型必须是数字。
// 虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了
// 不过也有一种情况例外，那就是它常用来表示类数组

// 类数组

// 类数组不是数组类型，比如arguments：

// function sum () {
//     let args: number[] = arguments;
// }

// 上例中，arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口

// function sum () {
//     let args: {
//         [index: number]: number;
//         length: number;
//         callee: Function;
//     } = arguments;
// }

// 在这个例子中，我们除了约束当索引的类型是数字时，值得类型也必须是数字意外，也约束了它还有length 和 callee两个属性

// 事实上常用的类型都有自己的接口定义，如： NodeList， HTMLCollection等

// function sum () {
//     let args: IArguments = arguments
// }

// 其中 IArguments 是typescript中定义好了的类型，它实际上就是：

// interface IArguments {
//     [index: number]: any;
//     length: number;
//     callee: Function;
// }

// any 在数组中的应用
// 一个比较常见的做法是，用any表示数组中允许出现任意类型：
// let list: any[] = [2, '333', false, null, undefined]

// 函数的类型

// 函数是JavaScript中的一等公民

// 函数声明
// 在JavaScript中，有两种常见的定义函数的方式 --  函数声明 和 函数表达式

// function sum (x, y) {
//     return x + y;
// };

// let mySum = function (x, y) {
//     return x + y;
// };

// 一个函数有输入和输出，要在Typescript中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：

// function sum (x: number, y: number): number {
//     return x + y;
// }

// 注意，输入多余的（或者少于要求的）参数，是不被允许的

// sum(1, 2, 3)
// sum(1)
// sum(1, 2)

// 函数表达式

// 如果要我们现在写一个对函数表达式的定义，可能会写成这样：

// let mySum = function (x: number, y:number): number {
    // return x + y;
// }

// 这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum, 是通过赋值操作进行类型推断出来的，如果我们需要手动给
// mySum 添加类型，则应该这样：

// let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
//     return x + y;
// }
// 注意不要混淆 Typescript 中的 => 和 ES6 中的 =>

// 在Typescript的类型定义中，=>用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型
// 在 ES6 中， => 叫做箭头函数，应用十分广泛，可以参考 ES6 中的箭头函数

// 用接口定义函数的形状

// 我们也可以使用接口的方式来顶一个函数需要的形状

// interface ISearchFunc {
//     (source: string, subString: string): boolean;
// }

// let mySearch: ISearchFunc;

// mySearch = function(source: string, subString: string) {
//     return source.search(subString) !== -1;
// }

// 采用 函数表达式 | 接口 定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数，参数类型，返回值类型不变

// 可选参数

// 前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选参数呢

// 与接口中的可选属性类型，我们用？表示可选的参数：

// function buildName(fisrName: string, lastName?: string) {
//     if (lastName) {
//         return fisrName + '  ' + lastName;
//     } else {
//         return fisrName
//     }
// }

// let tomcat = buildName('Tom', 'Cat');
// let tom = buildName('Tom')

// 需要注意的是，可选参数必须接在必须参数后面。换句话说，可选参数后面不允许再出现必选参数了：

// function buildName(firstName?: string, lastName: string) {  // 报错
//     if (lastName) {
//         return fisrName + '  ' + lastName;
//     } else {
//         return fisrName
//     }
// }

// 参数默认值

// 在ES6中，我们允许给函数的参数添加默认值，Typescript会将添加了默认值的参数识别为可选参数

// function buildName(firstName: string, lastName: string = 'cat') {
//     return firstName + lastName;
// }

// let tomcat = buildName('tom', 'cat')
// let tom = buildName('Tom')

// 此时就不受[可选参数必须接在必须参数后面]的限制了

// 剩余参数

// ES6中，可以使用 ...rest 的方式获取函数中的剩余参数 (rest 参数)：

// function push (array, ...items) {
//     items.forEach(function(item) {
//         array.push(item)
//     });
// }
// let a: any[] = [];
// push(a, 1, 2, 3, '张三');

// 重载

// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
// 比如，我们需要实现一个函数 reverse , 输入数字 123 的时候，输出反转数字 321, 输入字符串 'hello' 的时候， 输出反转的字符串 'olleh'
// 利用联合类型，我们可以这么实现

// function reverse(x: number | string): number | string {
//     if (typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join());
//     } else if (typeof x === 'string') {
//         return x.split('').reverse().join('');
//     }
// }

// 然而这样有一个缺点，就是不能够精确的表达，输入数字的时候，输出的也应该为数字，输入为字符串的时候，输出的也应该为字符串。

// 这时，我们可以使用重载定义多个 reverse 的函数类型

// function reverse(x:number):number;
// function reverse(x:string):string;
// function reverse(x: number | string): number | string {
//     if (typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join());
//     } else if (typeof x === 'string') {
//         return x.split('').reverse().join('');
//     }
// }

// 上例中，我们重复定义了多次函数reverse， 前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。
// 注意，Typescript会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精准的定义写在前面


// 类型断言

// 类型断言可以用来手动指定一个值的类型

// 语法

// 值 as 类型
// 或
// <类型>值

// 在tsx语法（React的jsx语法的ts版）中必须使用前者，即 值 as 类型
// 形如 <Foo> 的语法在 tsx 中表示的是一个 ReactNode， 在ts中除了表示类型断言之外， 也可能是表示一个泛型
// 故建议大家在使用类型断言时，统一使用 值 as 类型这样的语法

// 类型断言的用途

// 1、将一个联合类型断言为其中一个类型

// 之前提到过，当Typescript不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性或方法：

// interface Cat {
//     name: string;
//     run(): void;
// }

// interface Fish {
//     name: string;
//     swim(): void;
// }

// function getName (animal: Cat | Fish) {
//     return animal.name
// }

// 而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法，比如：

// function isFish (animal: Cat | Fish) {
//     if (typeof animal.swim === 'function') {  // 报错
//         return true;
//     }
//     return false;
// }

// 此时可以使用类型断言，将animal断言为Fish

// function isFish (animal: Cat | Fish) {
//     if (typeof (animal as Fish).swim === 'function') {
//         return true;
//     }
//     return false;
// }

// 这样就可以解决访问 animal.swim 时报错的问题了

// 需要注意的是，类型断言只能够[欺骗] Typescript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误

// interface Cat {
//     name: string;
//     run(): void;
// }

// interface Fish {
//     name: string;
//     swim(): void;
// }

// function swim(animal: Cat|Fish) {
//     (animal as Fish).swim();
// }

// const tom:Cat = {
//     name: 'Tom',
//     run () {
//         console.log('run')
//     }
// }

// swim(tom);

// 运行时报错， Uncaught TypeError: animal.swim is not a function '

// 原因是 (animal as Fish).swim() 这段代码隐藏了 animal 可能为 Cat 的情况，将 animal 直接断言为 Fish 了， 而Typescript 编译器信任了我们的断言
// 故在调用 swim() 时没有编译错误

// 可是 swim 函数接受的参数时 Cat | Fish , 一旦传入的参数时Cat类型的变量，由于Cat上没有swim方法，就会导致运行时错误了。
// 总之，使用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误。

// 将一个父类断言为更加具体的子类
// 当类之间有继承关系时，类型断言也是很常见的：

// class ApiError extends Error {
//     code: number = 0;
// }

// class HttpError extends Error {
//     statusCode: number = 200;
// }

// function isApiError (error: Error) {
//     if (typeof (error as ApiError).code === 'number') {
//         return true;
//     }
//     return false;
// }

// 上面的例子中，我们声明了函数 isApiError , 它用来判断传入的参数是不是 ApiError 类型, 为了实现这样一个函数，它的参数的类型肯定得是比较抽象的父类 Error，
// 这样的话这个函数就能接受 Error 或它的子类作为参数了。

// 但是由于父类 Error 中没有 code 属性，故直接获取 erro.code 或报错，需要使用类型断言获取 (error as ApiError).code .

// 大家可能会注意到，在这个例子中有一个更合适的方式来判断是不是 ApiError， 那就是使用 instanceof:

// class ApiError extends Error {
//     code: number = 0;
// }

// class HttpError extends Error {
//     statusCode: number = 200;
// }

// function isApiError (error: Error) {
//     if (error instanceof ApiError) {
//         return true;
//     }
//     return false;
// }

// 上面例子中，确实使用 instanceof 更加合适，因为 ApiError 是一个 JavaScript 的类，能够通过 instanceof 来判断 error 是否是它的实例。
// 但是有的情况下 ApiError 和 HttpError 不是一个真正的类，而只是一个 Typescript 的接口（interface），接口是一个类型，不是一个真正的值，它在
// 编译结果中会被删除，当然就无法使用 instanceof 来做运行时判断了：

// interface ApiError extends Error {
//     code: number;
// }

// interface HttpError extends Error {
//     statusCode: number;
// }

// function isApiError (error: Error) {
//     if (error instanceof ApiError) { // 报错
//         return true;
//     } 
//     return false;
// }

// 此时就只能用类型断言，通过判断是否存在 code 属性，来判断传入的参数是不是 ApiError 了

// function isApiError (error: Error) {
//     if (typeof (error as ApiError).code === 'number') {
//         return true;
//     }
//     return false
// }



// 将任何一个类型断言为 any

// 理想情况下，Typescript 的类型系统运转良好，每个值的类型都具体而精确。
// 当我们引用一个在此类型上不存在的属性或方法是，就会报错：

// const foo: number = 1;
// foo.length = 1;

// 上面的例子中，数字类型的变量 foo 上是没有 length 属性的， 故 TypeScript 给出了相应的错误提示
// 这种错误提示显然是非常有用的。
// 但有的时候，我们非常确定这段代码不会出错，比如下面的例子：

// window.foo = 1

// 上面的例子中，我们需要将 window 上添加一个属性 foo, 但typescript编译时会报错，提示我们 window 上不存在foo属性、
// 此时我们可以使用 as any 临时将 window 断言为 any 类型

// (window as any).foo = 1;

// 在 any 类型的变量下，访问任何属性都是允许的

// 需要注意的是，将一个变量断言为 any 可以说是解决 Typescript 中类型问题的最后一个手段

// 它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用 as any

// 上面的例子中，我们也可以通过 [扩展 window 的类型 (TODO)][] 解决这个错误，不过如果只是临时的增加 foo 属性， as any 会更加方便

// 总之，一方面不能滥用 as any, 另一方面也不能完全否定它的作用，我们需要在类型的严格性和开发的便利性之间掌握平衡（这也是Typescript的设计理念之一），才能发挥出
// Typescript最大的价值

// 将 any 断言为一个具体的类型

// 在日常的开发中，我们不可避免的需要处理 any 类型的变量，他们可能是由于第三方库未能定义好自己的类型，也有可能是历史遗留的或其他人编写的烂代码，还可能是受到Typescript
// 类型系统的限制而无法精确定义类型的场景

// 遇到 any 类型的变量时，我们可以选择无视它，任由它滋生更多的any
// 我们也可以选择改进它，通过类型断言及时的把 any 断言为精确的类型，亡羊补牢，使我们的代码想着高可维护性的目标发展

// 举例来说，历史遗留的代码中有个 getCacheData, 它返回值是 any：

// function getCacheData(key: string): any {
//     return (window as any).cache[key];
// }

// 那么我们在使用它时，最好能够将调用了它之后的返回值断言成一个精确的类型，这样就方便了后续的操作

// interface Cat {
//     name: string;
//     run(): void;
// }

// const tom = getCacheData('tom') as Cat;
// tom.run();

// 上面的例子中，我们调用完 getCacheData 之后，立即将它断言为 Cat 类型。这样的话明确了 tom 的类型, 后续对 tom 的访问时就有了代码补全，提高了代码的可维护性

// 类型断言的限制

// 从上面的例子中，我们可以总结出：

// 1、联合类型可以被断言为其中一个类型
// 2、父类可以被断言为子类
// 3、任何类型都可以被断言为any
// 4、any可以被断言为任何类型

// 那么类型断言有没有什么限制呢？是不是任何一个类型都可以被断言为任何另一个类型呢？
// 答案是否定的 -- 并不是任何一个类型都可以被断言为任何另一个类型

// 下面我们通过一个简化的例子，来理解类型断言的限制：

// interface Animal {
//     name: string;
// }

// interface Cat {
//     name: string;
//     run(): void;
// }

// let tom: Cat = {
//     name: 'Tom',
//     run: () => {console.log('run')}
// }

// let animal: Animal = tom;

// 我们知道， Typescript 是结构类型系统，类型之间的对比只会比较它们最终的结构，而会忽略他们定义时的关系。
// 在上面的例子中，Cat包含了 animal 中所有属性，除此之外，它还有一个额外的方法 run。 Typescript 并不关心 Cat 和 Animal 之间定义是什么关系，
// 而只会看他们最终的机构有什么关系 -- 所以它与 Cat extends Animal 是等价的

// interface Animal {
//     name: string;
// }

// interface Cat extends Animal {
//     run(): void;
// }

// 那么也不难理解为什么 Cat 类型的 tom 可以赋值给 Animal 类型的 animal 了 -- 就像面向对象编程中我们可以将子类的实例赋值给类型为父类的变量
// 我们把它换成 Typescript 中更专业的说法，即： Animal 兼容了 Cat。
// 当 Animal 兼容 Cat 时，他们就可以互相进行类型断言了

// function tsetAniaml (animal: Animal) {
//     return (animal as Cat);
// }

// function testCat (cat: Cat) {
//     return (cat as Animal)
// }

// 这样的设计其实也很容易理解

// 1、允许 animal as Cat 是因为 [父类可以被断言为子类]
// 2、允许 cat as Animal 是因为既然子类拥有父类的属性和方法，那么被断言为父类，获取父类的属性、调用父类的方法，就不会有任何问题，故[子类可以被断言为父类]

// 需要注意的是，这里我们使用了简化的父类子类的关系来表达类型的兼容性，而实际上 TypeScript 在判断类型的兼容性时，比这种情况复杂很多。

// 要使得 A 能够被断言为 B， 只需要 A 兼容 B 或  B 兼容 A 即可，这样是为了在类型断言时的安全考虑，毕竟毫无根据的断言是非常危险的

// 综上所述：

// 联合类型可以被断言为其中一个类型
// 父类可以被断言为子类
// 任何类型都可以被断言成any
// any可以被断言成任何类型
// 要使得A断言成B，只需要A兼容B或者B兼容A即可

// 其实前四种情况都是最后一个的特例

// 双重断言

// 既然：
// 任何类型都可以断言为Any
// any可以断言为任何类型

// 那么我们是不是可以使用双重断言 as any as Foo 来将任何一个类型断言为任何另一个类型？

// interface Cat {
//     run(): void;
// }

// interface Fish {
//     swim(): void;
// }

// function testCat(cat: Cat) {
//     return (cat as any as Fish);
// }

// 若你使用这种双重断言，那么十有八九是非常错误的，它很可能会导致运行时错误，除非迫不得已，千万别用双重断言


// 类型断言 vs 类型转换

// 类型断言只会影响 Typescript 编译时的类型，类型断言语句在编译结果中会被删除：

// function toBoolean(someThing: any): boolean {
//     return someThing as boolean;
// }

// toBoolean(1);

// 在上面例子中，将something断言为 boolean 虽然可以通过斌阿姨，但是并没有什么用，代码在编译后会变成：

// function toBoolean(someThing) {
//     return someThing
// }

// toBoolean(1)

// 所以类型断言不是类型转换，它不会真的影响到变量的类型
// 若要进行类型转换，需要直接调用类型转换的方法

// function toBoolean(somthing: any):boolean {
//     return Boolean(somthing);
// }

// toBoolean(1);


// 类型断言 vs  类型声明

// 在这个例子中：

// function getCacheData(key: string): any {
//     return (window as any).cache[key]
// }

// interface Cat {
//     name: string;
//     run(): void;
// }

// const tom = getCacheData('Tom') as Cat;
// tom.run();


// 我们使用 as Cat 将 any 类型断言为了 Cat  类型
// 但实际上还有其他方式可以解决这个问题：

// const ltom: Cat = getCacheData('tom');
// ltom.run();

// 上面的例子中，我们通过类型声明的方式，将 tom 声明 为 Cat，然后再将 any 类型的 getCacheData('tom') 赋值给 Cat 类型的 tom

// 这和类型断言时非常相似的，而且产生的经过也几乎是一样的 --- tom 在接下来的代码中都变成了 Cat 类型
// 它们的区别，可以通过这个例子来理解

// interface Animal {
//     name: string;
// }

// interface Cat {
//     name: string;
//     run(): void;
// }

// const animal: Animal = {
//     name: 'tom'
// }

// let tom = animal as Cat;

// 在上面这的例子中，由于Animal兼容Cat，故可以将animal 断言为 Cat 赋值给 tom

// 但是若直接声明tom 为 Cat 类型，则会直接报错

// let tom: Cat = animal;

// 这很容易理解， Animal 可以看做 Cat 的父类，当然不能将父类的实例赋值给类型为子类的变量
// 深入的讲，他们的核心区别就在于：
// animal 断言为 Cat , 只需要满足 animal 兼容 Cat 或 Cat 兼容 Animal 即可
// animal 赋值给 tom , 只需要满足 Cat 兼容 Animal 才行
// 但是Cat 不兼容 Animal

// 而在前一个例子中，由于getCacheData('tom') 是any 类型， any兼容Cat，  Cat 也兼容 any 故

// const tom = getCacheData('tom') as Cat;
// 等价于
// const tom: Cat = getCacheData('tom')

// 知道了他们的核心区别，就知道了类型声明是比类型断言更加严格的。
// 所以为了增加代码的质量，我们最好优先使用类型声明，这也比类型断言的 as  语法更加优雅

// 类型断言 vs 泛型

// 还是这个例子

// function getCacheData(key: string): any {
//     return (window as any).cache[key];
// }

// interface Cat {
//     name: string;
//     run(): void;
// }

// const tom = getCacheData('tom') as Cat;
// tom.run();

// 我们还有第三种方式可以解决这个问题，那就是泛型

// function getCacheData<T>(key:string): T {
//     return (window as any).cache[key];
// }

// interface Cat {
//     name: string;
//     run(): void;
// }

// const tom = getCacheData<Cat>('tom')

// tom.run();

// 通过给 getCacheData 函数添加一个泛型<T> 我们可以更加规范的实现对 getCacheData 返回值的约束，这也同时去除掉了代码中的any，是最优的一个解决方案

// 声明文件
// 当使用第三方库是，我们需要引用他的声明文件，才能获得对应的补全代码，接口提示等功能

// 新语法索引

// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
// interface 和 type 声明全局类型
// export 导出变量
// export namespace 导出（含有子属性的）对象
// export default ES6 默认导出
// export =  commonjs 导出模块
// export as namespace UMD 库声明全局变量
// declare global 扩展全局变量
// declare module 扩展模块
// /// <reference /> 三斜线指令

// 什么是声明语句

// 假如我们想使用第三方库 jQuery，一种常见的方式是在 html 中通过 <script> 标签引入 jQuery，然后就可以使用全局变量 $ 或 jQuery 了。
// 我们通常这样获取一个ID是foo的元素

// $('#foo') || jQuery('#foo')

// 但是在ts中，编译器并不知道 $ 或 jQuery 是什么东西：
// 这时，我们需要使用 declare var 来定义它的类型

// declare var jQuery: (selector: string) => any;
// jQuery('#foo')

// 什么是声明文件

// 通常我们会把声明语句放到一个单独的文件 (jQuery.d.ts) 中，这就是声明文件：

// src/jQuery.d.ts

// declare var jQuery: (selector: string) => any;

// src/index.ts

// jQuery('#foo')

// 声明文件必须以 .d.ts 为后缀

// 一般来说，ts会解析项目中所有的 *.ts 文件，当然也包含以 .d.ts 结尾的文件。所以当我们将 jQuery.d.ts 放到项目中时，其他所有 *.ts 文件就都可以获得 jQuery 的类型定义了
// 假如仍然无法解析，那么可以检查下 tsconfig.json中的 files、include和 exclude 配置，确保其包含了 jQUery.d.ts文件


// 第三方声明文件

// @types 统一管理第三方库的声明文件
// @types 的使用方法很简单，直接用 npm 安装对应的声明模块即可，以jQuery 举例
// npm install @types/jquery --save-dev


// 书写声明文件

// 在不同的场景下，声明文件的内容和使用方式会有所区别
// 库的使用场景主要以下几种：
// 全局变量： 通过 <script> 标签引入第三方库，注入全局变量
// npm 包：通过 import foo from 'foo' 导入，符合ES6模板规范
// UMD 库：既可以通过 <script> 标签引入，又可以通过 import 导入
// 直接扩展全局变量： 通过 <script> 标签引入后，改变一个全局变量的结果
// 在 npm 包 或 UMD 库中扩展全局变量： 引用 npm 包 或 UMD 库后，改变一个全局变量的结构
// 模块插件： 通过 <script> 或 import 导入后，改变另一个模块的结构

// 全局变量

// 全局变量是最简单的一种场景，之前举的例子就是通过 script 标签 引入 JQuery，注入全局变量 $ 或 jQuery
// 使用全局变量的声明文件时，如果是以 npm install @types/xxx --save-dev 安装的，则不需要任何配置
// 如果没有生效，可以检查下 tsconfig.json 中 files、include、exclude 配置，确保其包含了 *.d.ts 文件

// 全局变量的声明文件主要有以下几种语法：

// declare var 声明全局变量

// 在所有声明语句中， declare var 是最简单的，如之前所学，它能够用来定义一个全局变量的类型。与其类似的，还有 declare let 和 declare const, 使用 let 和 var 没有什么区别
// 一般来说，全局变量都是禁止修改的常量，所以大部分情况都应该使用 const 而不是 var 或 let

// declare const jQuery: (selector: string) => any;
// jQuery('#foo');

// declare function 声明全局方法

// declare function 用来定义全局函数的类型，jQuery其实就是一个函数，所以也可以用 function 来定义：

// declare function jQuery(selector: string): any;

// declare class 声明全局类

// 当全局变量是一个类的时候，我们用 declare class 来定义它的类型

// declare class Animal {
//     name: string;
//     constructor(name: string);
//     sayHi(): string;
// }

// let cat = new Animal('Tom');

// 同样的，declare class 语句也只能用来定义类型，不能用来定义具体的实现，比如定义sayHi方法的具体实现则会报错

// declare enum 声明全局枚举类型

// 使用 declare enum 定义的枚举类型也称作外部枚举，举例如下：

// declare enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }

// let directions = [Directions.Up]

// 与其他全局变量的类型声明一致，declare enum 仅用来定义类型，而不是具体的值

// declare namespace 声明（含有子属性的）全局对象

// namespace 是 ts 早期是为了解决模块化而创造的关键词，中文成为命名空间
// 由于历史遗留问题，在早期还没有ES6的时候，ts提供了一种模块化方案，使用module关键字表示内部模块，但由于后来ES6也使用了 module 关键词，ts为了兼容ES6，使用了namespace 替代了自己的module，更名为命名空间
// 随着ES6的广泛应用，现在已经不建议在使用TS中的namespace，而推荐使用ES6的模块化方案了，故我们不再需要学习namespace的使用了

// namespace 被淘汰了，但是在声明文件中，declare namespace 还是比较常用的，它用来表示全局变量是一个对象，包含很多子属性
// 比如jQuery 是一个全局变量，它是一个对象，提供了一个 jQuery.ajax方法可以调用，那么我们就应该使用 declare namespace jQuery 来声明这个拥有多个子属性的全局变量

// declare namespace jQuery {
//     function ajax(url: string, setting?: any): void;
// }

// jQuery.ajax('/api/get_something');

// 类似的，也可以使用 const, class, enum等语句

// /src/jQuery.d.ts
// declare namespace jQuery {
//     function ajax(url:string, setting?:any): void;
//     const version: number;
//     class Event {
//         blur(eventType: EventType): void;
//     }
//     enum EventType {
//         CustomClick
//     }
// }

// /src/index.ts
// jQuery.ajax('/api/get_something');
// console.log(jQuery.version);
// const e = new jQuery.Event();
// e.blur(jQuery.EventType.CustomClick);

// 嵌套的命名空间
// 如果对象拥有深层的层级，则需要用嵌套的 namespace 来声明深层的属性的类型

// src/jQuery.d.ts

// declare namespace jQuery {
//     function ajax(url:string, settings?:any): void;
//     namespace fn {
//         function extend(object: any): void;
//     }
// }

// src/index.ts

// jQuery.ajax('/api/get_something');
// jQuery.fn.extend({
//     check: function() {
//         return this.each(function(){
//             this.checked = true;
//         })
//     }
// })

// 假如jQuery下仅有fn这一个属性（没有ajax等其他属性或方法），则可以不需要嵌套namespace：

// src/jQuery.d.ts

// declare namespace jQuery.fn {
//     function extend(object: any): void;
// }

// src/index.ts

// jQuery.fn.extend({
//     check: function(){
//         return this.each(function() {
//             this.checked = true;
//         })
//     }
// })

// interface 和 type 声明全局类型

// 除了全局变量之外，可能有一些类型我们也希望能暴露出来。在类型声明文件中，我们可以直接使用interface或type来声明一个全局的接口或类型

// src/jQuery.d.ts

// interface AjaxSettings {
//     method?: 'GET' | 'POST'
//     data?: any;
// }

// declare namespace jQuery {
//     function ajax(url:string, settings?:AjaxSettings): void;
// }

// 这样的话，在其他文件中也可以使用这个接口或类型了

// src/index.ts

// let settings: AjaxSettings = {
//     method: 'POST',
//     data: {
//         name: 'foo'
//     }
// };

// jQuery.ajax('/api/get_something', settings);

// type 与 interface 类似，不再赘述

// 防止命名冲突

// 暴露在最外层的 interface 或 type 会作为全局类型作用于整个项目中，我们应该尽可能的减少全局变量或者全局类型的数量，故最好将他们放到 namespace 下

// declare namespace jQuery {
//     interface AjaxSettings {
//         method?: 'GET' | 'POST'
//         data?: any
//     }

//     function ajax (url: string, settings?: AjaxSettings): void;
// }

// 注意，在使用这个 interface 的时候，也应该加上 jQuery 前缀

// let lsettings: jQuery.AjaxSettings = {
//     method: 'POST',
//     data: {
//         name: 'foo'
//     }
// }
// jQuery.ajax('/api/post_something', lsettings);

// 声明合并

// 假如 jQuery 既是一个函数，又是一个对象，拥有子属性jQuery.ajax() 事实确实如此，那么我们可以组合多个声明语句，他们会不冲突的合并起来

// declare function jQuery(selector:string):any;
// declare namespace jQuery {
//     function ajax(url:string, settings?:any):void;
// }

// jQuery('#foo');
// jQuery.ajax('/api/get_something');

// npm 包的声明文件主要有以下几种语法：
// export 导出变量
// export namespace 导出（含有子属性的）对象
// export default ES6默认导出
// export = commonjs 导出模块

// 内置对象

// JavaScript 中有很多内置对象，它们可以直接在Typesciprt中当做定义好了的类型。
// 内置对象是指根据标准在全局作用于上存在的对象，这里的标准是指ECMAScript和其他环境（比如DOM）的标准

// ECMAScript 的内置对象

// ECMAScript 标准提供的内容对象有：
// Boolean、Error、Date、RegExp 等
// 我们可以在TypeScript 中将变量定义为这些类型

// let b:Boolean = new Boolean(1);
// let e:Error = new Error('Error occurred');
// let d:Date = new Date();
// let r:RegExp = /[a-z]/;

// DOM和BOM的内置对象
// Document、 HTMLElement、Event、 NodeList等
// Typescript 中会经常用到这些类型

// let body:HTMLElement = document.body;
// let allDiv:NodeList = document.querySelectorAll('div');
// document.addEventListener('click',function (e:MouseEvent) {
//     // Do something
// })

// Typescript 核心库的定义文件
// Typescript核心库的定义文件中定义了所有浏览器环境需要用到的类型，并且是御之灾Typescript中的。当你使用一些常用的方法的时候，Typescript实际上已经帮你做了很多类型判断的工作了

// 注意，Typescript核心库的定义中不包含Node.js部分

// 用Typescript写Node.js

// Node.js不是内置对象的一部分，如果想用Typescript写Node.js，则需要引入第三方声明文件
// npm install @type/node --save-dev


// **************************** 进阶 ***************************************

// 类型别名

// type Name = string;
// type NameResolver = () => string;
// type NameOrResolver = Name | NameResolver;
// function getName(n:NameOrResolver):Name {
//     if (typeof n === 'string') {
//         return n;
//     } else {
//         return n();
//     }
// }

// 上例中，我们使用 type 创建类型别名，类型别名常用于联合类型

// 字符串字面量类型

// 字符串字面量类型用于约束取值只能是某几个字符串中的一个

// type EventNames = 'click' | 'scroll' | 'mousemove';

// function handleEvent(ele:Element, event:EventNames) {
//     // do something
// }

// handleEvent(document.getElementById('hello'), 'scroll');
// handleEvent(document.getElementById('word'), 'dblclick'); //报错, event 不能为 dblclick

// 注意，类型别名与字符串字面量类型都是使用type进行定义

// 元组

// 数组合并了相同的类型对象，而元组(Tuple) 合并了不同类型的对象
// 元组起源于函数变成语音（如 F#），这些语言中会频繁使用元组

// 简单的例子
// 定义一対值分别为 stirng 和 number 的元组

// let tom: [string, number] = ['tom', 21];

// 当赋值或访问一个已知索引的元素时，会得到正确的类型：

// let tom: [string, number];
// tom[0] = 'tom';
// tom[1] = 14;

// tom[0].slice(1);
// tom[1].toFixed(2);

// 也可以赋值其中一项

// tom[0] = 'Tom';

// 但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元素类型中指定的项

// let tom:[string, number];
// tom = ['Tom', 25];

// tom = ['Tom']  // 报错

// 越界的元素

// 当添加越界的元素时，他的额类型会被限制为元组中每个类型的联合类型

// let tom: [string, number];
// tom = ['Tom', 144];
// tom.push('male');
// tom.push(true);  // 报错 类型检测


// 枚举

// 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有7天，颜色限定为红绿蓝等

// 简单的例子
// 枚举使用 enum 关键字来定义：

// enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

// 枚举成员会被赋值为从0开始地递增的数字，同时也会对枚举值到枚举名进行反向映射

// console.log(Days['Sun'] === 0); // true
// console.log(Days[0] === 'Sun'); // true

// 事实上，上面的例子会被编译为

// var Days;
// (function (Days) {
//     Days[Days['Subn'] = 0] = 'Sun';
// })(Days || (Days = {}))

// 手动赋值

// 我们也可以给枚举项手动赋值

// enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};

// 上面的例子中，未手动赋值的枚举项会接着上一个枚举项递增
// 如果未手动赋值的枚举项与手动赋值的重复了，Typescript 是不会察觉到这一点的

// enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};

// console.log(Days["Sun"] === 3); // true
// console.log(Days["Wed"] === 3); // true
// console.log(Days[3] === "Sun"); // false
// console.log(Days[3] === "Wed"); // true

// 上面的例子中，递增到3的时候与前面的Sun的取值重复了，但是Typescript 并没有报错，导致 Days[3] 的值先是 'Sun', 而后又被 'Wed' 覆盖了
// 所以使用的时候需要注意，最好不要出现这种覆盖的情况。
// 手动赋值的枚举项可以不是数字，此时需要使用类型断言来让 tsc 无视类型检查(编译出的js 仍然是可用的)

// enum Days {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S"};

// 常数项和计算所得项
// 枚举项有两种类型： 常数项， 计算所得项

// 前面我们所举的例子都是常数项，一个典型的计算所得项的例子：

// enum Color {Red, Green, Blue = 'blue'.length};

// 上面的例子中， 'blue'.length 就是一个计算所得项
// 上面的例子不会报错，但是如果紧接在计算所得项后面的是为手动赋值的项，那么他就会因为无法获取初始值而报错


// 常数枚举
// 常数枚举是使用 const enum 定义的枚举类型
// const enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }

// 外部枚举
// 外部枚举是使用 declare enum 定义的枚举类型

// declare enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }

// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];


// 类

// 传统方法中，JavaScript 通过构造函数实现类的概念，通过原型链实现继承，而在ES6中，我们终于迎来了 class .
// TypeScript 除了实现所有 ES6 中的类的功能以外，还添加了一些新的用法。

// 类的概念

// 虽然 JavaScript 中有类的概念，但是可能大多数 JavaScirpt 程序员并不是非常熟悉类，这里对类相关的概念做了一个简单的介绍。

// 1、类(Class): 定义了一个事物的抽象特点，包含他的属性和方法；
// 2、对象(Object): 类的实现、通过 new 生成；
// 3、面向对象(OOP)的三大特性：封装、继承、多态;
// 4、封装(Encapsulation): 将对数据的操作细节隐藏起来，只暴露对外的接口，外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据；
// 5、继承(Inheritance): 子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
// 6、多态(Polymorphism): 由继承而昌盛了相关的不同的类，对同一个方法可以有不同的响应
// 7、存取器(getter & setter): 用以改变属性的读取和赋值行为
// 8、修饰器(Modifiers): 修饰符是一些关键字，用于限定成员或类型的性质。比如public表示共有属性或方法
// 9、抽象类(Abstract Class): 抽象类是提供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
// 10、接口(Interfaces): 不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现(implements)。一个类只能继承自另一个类，但是可以实现多个接口

// ES6 中类的用法
// 属性和方法

// 使用class定义类，使用constructor定义构造函数。
// 通过new生产新实例的时候，会自动调用构造函数。

// class Animal {
//     public name;
//     constructor (name){
//         this.name = name;
//     }
//     sayHi () {
//         return `My name is ${this.name}`
//     }
// }

// let a = new Animal('Jack');
// console.log(a.sayHi());

// 类的继承

// 使用 extends 关键字实现继承，子类中使用 super 关键字来调用父类的构造函数和方法

// class Cat extends Animal {
//     constructor(name) {
//         super(name);
//         console.log(this.name)
//     }
//     sayHi () {
//         return `Meow, ${super.sayHi()}`
//     }
// }

// let c = new Cat('Tom');
// console.log(c.sayHi());

// 存取器

// 使用 getter 和 setter 可以改变属性的赋值和读取行为：

// class Animal {
//     constructor(name){
//         this.name = name
//     }
//     get name() {
//         return 'Jack';
//     }
//     set name(val) {
//         console.log(`setter: ${val}`);
//     }
// }

// let a = new Animal('Kitty');
// a.name = 'Tom';
// console.log(a.name);

// 静态方法

// 使用 static 修饰符修饰的方法称为静态方法，他们不需要实例化，而是直接通过类来调用

// class Aniaml {
//     static isAniaml(a) {
//         return a instanceof Aniaml;
//     }
// }

// let a = new Aniaml('Jack');
// Aniaml.isAniaml(a);
// a.isAniaml(a);   // 报错 TypeError: a.isAniaml is not a function


// ES7中类的用法
// ES7中有一些关于类的提案，TypeScript也实现了它们，这里做了一个简单的介绍

// 实例属性
// ES6中实例的属性只能 通过构造函数中的this.xxx来定义，ES7提案中可以直接在类里面定义

// class Animal {
//     name = 'Jack';
//     constructor () {
//         // ...
//     }
// }

// let a = new Animal();
// console.log(a.name);

// 静态属性
// ES7 提案中, 可以使用 static 定义一个静态属性

// class Animal {
//     static num = 42;
//     constructor () {

//     }
// }

// console.log(Animal.num);

// TypeScript 中类的用法

// public || private || protected

// TypeScript 可以使用三种访问修饰符，分别是 public、private 和 protected.

// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的；
// private 修饰的属性或方法是私有的，不能再声明他的类的外部访问；
// protected 修饰的属性或方法是受保护的，它和privatre类似，区别是它在子类中也是允许被访问的

// class Aniaml {
//     public name;
//     public constructor (name) {
//         this.name = name;
//     }
// }

// let a = new Aniaml('Jack');
// console.log(a.name);
// a.name = 'Tom';
// console.log(a.name);

// ****************************** //

// class Person {
//     private name;
//     public constructor (name) {
//         this.name = name;
//     }
// }

// let b = new Person('Jack');
// console.log(b.name); // Jack
// b.name = 'Tom';

// 需要注意的是，TypeScript 编译之后的代码，并没有限制 private 属性在外部的可访问性
// 使用 private 修饰的属性或方法，在子类中也是不允许访问的

// class Cat extends Person {
//     constructor (name) {
//         super(name);
//         console.log(this.name);
//     }
// }

// 而如果使用protected修饰，则允许在子类中访问

// class Animal {
//     protected name;
//     constructor (name) {
//         this.name = name;
//     }
// }

// class Cat extends Animal {
//     constructor(name) {
//         super(name);
//         console.log(this.name);
//     }
// }

// 当构造函数修饰符为 private 时，该类不允许被继承或者实例化

// class Person {
//     public name;
//     private constructor (name) {
//         this.name = name;
//     }
// }

// class People extends Person {
//     constructor(name){
//         super(name);
//         console.log(this.name);
//     }
// }

// 参数属性

// 修饰符和 readonly 还可以使用在构造函数参数中，等同于类中定义该属性同时给该属性赋值，使代码更简洁

// class Pro {
//     readonly name;
//     public constructor (name) {
//         this.name = name;
//     }
// }

// let a = new Pro('Tom');
// console.log(a.name);
// a.name = 'Tom';

// 抽象类

// abstract 用于定义抽象类和其中的抽象方法

// 什么是抽象类？

// 首先，抽象类是不允许被实例化的

// abstract class Animal {
//     public name;
//     public constructor(name) {
//         this.name = name
//     }
//     public abstract sayHi();
// }

// let a = new Animal('Jack');

// 其次，抽象类中的抽象方法必须被子类实现

// abstract class Prol {
//     public name
//     public constructor(name) {
//         this.name = name
//     }
//     public abstract sayHi();
// }

// class Cat extends Prol {
//    public sayHi () {
//        console.log(`${this.name} is eating`);
//    }
// }

// let cat = new Cat('Tom');
// cat.sayHi();

// 类的类型

// 给类加上TypeScript的类型很简单，与接口类似：

// class Animal {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     sayHi():string {
//         return `my name is ${this.name}`;
//     }
// }

// let a:Animal = new Animal('T-shirt');
// console.log(a.sayHi());

// 类与接口

// 类实现接口

// 实现是面向对象的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有特性，这时候就可以吧特性提取成接口，用implements关键字来实现。
// 这个特性大大提高了面向对象的灵活性

// interface Alarm {
//     alert(): void;
// }

// class Door {
// }

// class SecurityDoor extends Door implements Alarm {
//    alert() {
//        console.log('SecurityDoor alert')
//    }
// }

// class Car implements Alarm {
//     alert() {
//         console.log('Car alert');
//     }
// }

// 一个类可以实现多个接口

// interface Ione {
//     alert(): void;
// }

// interface Itwo {
//     lightOn(): void;
// }

// class Car implements Ione, Itwo {
//    alert(){
//        console.log('One')
//    }
//    lightOn(){
//        console.log('Two')
//    }
// }

// let a = new Car();
// a.lightOn();

// 接口继承接口

// interface Peo {
//     alert(): void;
// }

// interface Tl extends Peo {
//     td(): void;
// }

// class Et implements Tl {
//    alert() {
//        console.log('Peo')
//    }
//    td() {
//        console.log('Tl')
//    }
// }

// let b = new Et();
// b.alert();
// b.td();

// 接口继承类

// class Point {
//     x: number;
//     y: number;
//     constructor(x: number, y:number) {
//         this.x = x;
//         this.y = y;
//     }
// }

// interface Point3D extends Point {
//     z: number
// }

// let point3d: Point3D = {x: 1, y: 2, z: 3};

// 为什么TypeScript会支持接口继承类呢？
// 实际上，当我们在声明 class Point 时，除了会创建一个名为 Point 的类之外，同时也创建了一个名为 Pint 的类型 （实例的类型）。
// 也可以将 Point 当做一个类型来用（使用：Point 表示参数的类型）
// 我们新声明的接口，与声明类是创建的类型是等价的，所以支持接口继承类


// 泛型

// 泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候在指定类型的一种特性

// 简单的例子
// 首先，我们实现一个函数 createArray ，它可以创建一个指定长度的数组，同时将每一项都填充一个默认值

// function createArray (length: number, val: any):Array<any> {
//     let result = [];
//     for(let i = 0; i < length; i++) {
//         result[i] = val;
//     }
//     return result;
// }

// let a = createArray(3, 'x')
// console.log(a);

// 这段代码编译不会报错，但是一个显而易见的缺陷是，它并没有准确的定义返回值的类型
// Array<any> 允许数组的每一项都为任意类型，但是我们预期的是，数组中每一项都应该是输入的 val 的类型

// 这时候，泛型就派上用场了

// function createArray<T>(length: number, val: T):Array<T> {
//     let result: T[] = [];
//     for(let i = 0; i < length; i++){
//         result[i] = val;
//     }
//     return result;
// }

// // let a = createArray<string>(3, '2');
// let a = createArray(3, '1');
// console.log(a);

// 多个类型参数
// 定义泛型的时候，可以一次定义多个类型参数

// function swap<T, U>(tuple: [T, U]):[U, T] {
//     return [tuple[1], tuple[0]]
// }
// swap([7, 'seven']);

// 上例中，我们定义一个swap函数，用来交换输入的元组

// 泛型约束

// 在函数内部使用泛型变量的时候，由于事先不知道他是那种类型，所以不能随意的操作它的属性或方法

// function logs<T>(arg:T):T {
//     console.log(arg.length);
//     return arg;
// }

// 上例中， 泛型T不一定包含属性lenght，所以编译的时候报错

// 这时，我们可以对泛型进行约束，只允许这个函数传入那些包含lenght属性的变量，这就是泛型约束

// interface Ilenght {
//     length: number;
// }

// function logs <T extends Ilenght>(arg: T): T {
//     console.log(arg.length);
//     return arg;
// }

// 此时如果调用logs时，传入不包含length的参数，编译阶段就会报错了

// 多个类型参数之间也可以相互约束
// function copyFiles<T extends U, U>(target:T, source: U): T {
//     for(let id in source) {
//         target[id] = (<T>source)[id];
//     }
//     return target;
// }

// let x = {a: 1, b: 2, c: 3, d: 4};
// let result = copyFiles(x, {b: 12, d: 24});
// console.log(result);

// 泛型接口
// 可以使用接口来定义一个函数需要符合的形状：

// interface SeacrFunc {
//     (source: string, subString: string): boolean;
// }

// let mySearch: SeacrFunc;

// mySearch = function(source: string, subString: string) {
//     return source.search(subString) !== -1;
// }

// let d = mySearch('abc', 'b')
// console.log(d);

// 当然也可以使用含有泛型的忌口来定义函数的形状

// interface lsFd {
//     <T>(length: number,val: T): Array<T>;
// }

// let crArra: lsFd;

// cal = function<T>(length: number, val:T):Array<T>{
//     let result: T[] = []
//     for (let i = 0; i < length; i++) {
//         result[i] = val;
//     }
//     return result;
// }

// console.log(cal(3, 2));

// 进一步，我们可以把泛型参数提前到接口名上：

// interface CreateArrayFunc<T> {
//     (length: number, value: T): Array<T>;
// }

// let createArray: CreateArrayFunc<any>;
// createArray = function<T>(length: number, value: T): Array<T> {
//     let result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// }

// createArray(3, 'x'); // ['x', 'x', 'x']

// 注意，此时在使用泛型接口的时候需要定义泛型的类型

// 泛型类
// 与泛型接口类似，泛型也可以用于类的类型定义中

// class Dn<T> {
//     name: T;
//     add: (x:T, y:T) => T
// }

// let d = new Dn<number>();
// d.name = 1;
// d.add = function(x, y) { return x + y }

// 泛型参数的默认类型
// 在 TypeScript 2.3 以后，我们可以为泛型中的类型参数指定默认类型。当使用泛型时没有在代码中直接指定类型参数，从实际参数中也无法推测出时，这个默认类型就会起作用。

// function createArray <T = string> (length:number, val: T): Array<T> {
//     let result: T[] = [];
//     for(let i = 0; i < length; i ++) {
//         result[i]  = val;
//     }
//     return result;
// }

// 声明合并

// 如果定义了两个相同名字的函数、接口或类， 那么他们会合并成一个类型

// 函数的合并
// 我们可以重载定义多个函数类型

// function reverse(x: number): number;
// function reverse(x: string): string;
// function reverse(x: number | string): number | string {
//     if (typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join(''));
//     } else if (typeof x === 'string') {
//         return x.split('').reverse().join('');
//     }
// }

// 接口的合并

// 接口中的属性在合并时会简单的合并到一个接口中：

// interface Alarm {
//     price: number;
// }
// interface Alarm {
//     weight: number;
// }

// 相当于

// interface Alarm {
//     price: number;
//     weight: number;
// }

// 注意，合并的属性的类型必须是唯一的：

// interface Alarm {
//     price: number;
// }
// interface Alarm {
//     price: number;  // 虽然重复了，但是类型都是 `number`，所以不会报错
//     weight: number;
// }


// 接口中方法的合并，与函数的合并一样：

// interface Alarm {
//     price: number;
//     alert(s: string): string;
// }
// interface Alarm {
//     weight: number;
//     alert(s: string, n: number): string;
// }

// 相当于

// interface Alarm {
//     price: number;
//     weight: number;
//     alert(s: string): string;
//     alert(s: string, n: number): string;
// }