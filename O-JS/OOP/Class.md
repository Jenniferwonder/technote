* > 类
  
    * ###### 本质
        * > ECMAScript 6 新引入的class关键字具有正式定义类的能力
          
        * > 新的基础性语法糖结构
          
        * > 背后使用的仍然是原型和构造函数的概念
          
        * > 类就是一种特殊函数
          
            * > 把类作为参数传递
              
            * > 立即调用
              
    * > 创建类
      
        * > 类表达式
          
            * > const Animal = class {};
              
            * > 类表达式在它们被求值前也不能引用
              
        * > 类声明
          
            * > class Person {}
              
            * > 函数声明可以提升，但类定义不能
              
            * > 函数受函数作用域限制，而类受块作用域限制
              
        * > 类的构成
          
            * > 空类定义，有效
              
                * > class Foo {}
                  
            * > 有构造函数的类，有效
              
                * > class Bar {   constructor() {} }
                  
            * > 有获取函数的类，有效
              
                * > class Baz {   get myBaz() {} }
                  
            * > 有静态方法的类，有效
              
                * > class Qux {   static myQux() {} }
                  
        * > 类表达式的名称是可选的
          
            * > let Person = class PersonName {
              
            * > 可以通过name属性取得类表达式的名称字符串
              
    * > 类构造函数
      
        * > 不是必需
          
            * > 不定义构造函数相当于将构造函数定义为空函数
              
        * > 类构造函数与构造函数的主要区别
          
            * > 调用类构造函数必须使用new操作符。而普通构造函数如果不使用new调用，那么就会以全局的this（通常是window）作为内部对象
              
            * > 使用对类构造函数的引用创建一个新实例
              
                * > let p2 = new p1.constructor();
                  
            * > 类中定义的constructor方法不会被当成构造函数
              
                * > console.log(p1 instanceof Person.constructor);  // false
                  
                * > console.log(p1 instanceof Person);              // true
                  
        * > 实例化
          
            * > 使用new和类意味着应该使用constructor函数进行实例化
              
            * > 类实例化时传入的参数会用作构造函数的参数
              
    * ###### 实例、原型、类成员
        * > 可以非常方便地定义应该存在于实例上的成员、应该存在于原型上的成员，以及应该存在于类本身的成员
          
        * > 实例成员
          
            * > 类构造函数 (constructor) 内部，可以为新创建的实例（this）添加“自有”属性，该属性不会在原型上共享
              
        * > 原型方法与访问器
          
            * > 在实例间共享方法
              
                * > 在类块中定义的所有内容都会定义在类的原型上
                  
                * > 类方法等同于对象属性，因此可以使用字符串、符号或计算的值作为键
                  
                * > 支持获取和设置访问器。语法与行为跟普通对象一样
                  
            * > 不能在类块中给原型添加原始值或对象作为成员数据
              
        * > 静态类方法
          
            * > 用于执行不特定于实例的操作，也不要求存在类的实例
              
            * > 用static关键字作为前缀
              
                * > static locate() {     console.log('class', this);   }
                  
                * > Person.locate();            // class, class Person {}
                  
        * > 非函数原型和类成员
          
            * > 在类定义外部，可手动添加
              
                * > 在类上定义数据成员
                  
                    * > Person.greeting = 'My name is';
                      
                * > 在原型上定义数据成员
                  
                    * > Person.prototype.name = 'Jake';
                      
            * > ❌在共享目标（原型和类）上添加可变（可修改）数据成员是一种反模式
              
                * > 对象实例应该独自拥有通过this引用的数据
                  
        * > 迭代器与生成器方法
          
          迭代器与生成器
          
          ------
          
            * > 在原型上定义生成器方法
              
                * > *createNicknameIterator() {
                  
            * > 在类上定义生成器方法
              
                * > static *createJobIterator() {
                  
                * > console.log(jobIter.next().value);  // Butcher
                  
            * > 可以通过添加一个默认的迭代器，把类实例变成可迭代对象
              
                * > *[Symbol.iterator]() {     yield *this.nicknames.entries();   }
                  
                    * > ![image](z-Assets/9758d5e1b077c63d80d0e4190b1332c1.png)
            * > 可以只返回迭代器实例
              
                * > [Symbol.iterator]() {     return this.nicknames.entries();   }
                  
                    * > ![image](z-Assets/581766ac713aced178084bb330fc826e.png)
    * > 类继承机制
      
        * > extends关键字
          
            * ###### 功能
                * > 可以继承任何拥有[[Construct]]和原型的对象
                  
                * > 不仅可以继承一个类，也可以继承普通的构造函数（保持向后兼容）
                  
            * > 继承类
              
                * > class Vehicle {}
                  
                * > class Bus extends Vehicle {}
                  
            * > 继承普通构造函数
              
                * > function Person() {}
                  
                * > class Engineer extends Person {}
                  
            * > 继承内置类型
              
                * > 可以方便地扩展内置类型
                  
                    * > class SuperArray extends Array {
                      
                * > 有些内置类型的方法会返回新实例
                  
                    * > 默认情况下，返回实例的类型与原始实例的类型是一致的
                      
                    * > 覆盖Symbol.species访问器
                      
                        * > 决定在创建返回的实例时使用的类
                          
                        * > static get [Symbol.species]() {     return Array;   }
                          
                        * > let a2 = a1.filter(x => !!(x%2))
                          
                        * > console.log(a2 instanceof SuperArray);  // false
                          
            * > this的值会反映调用相应方法的实例或者类
              
                * > class Bus extends Vehicle {}
                  
                * > let b = new Bus();
                  
                * > b.identifyPrototype('bus');       // bus, Bus {}
                  
        * > super关键字
          
            * > 只能在派生类构造函数和静态方法中使用
              
                * > 要么用它调用构造函数，要么用它引用静态方法
                  
                * > 在类构造函数中使用super可以调用父类构造函数
                  
                    * > super(); // 相当于 super.constructor()
                      
                * > 静态方法中可以通过super调用继承的类上定义的静态方法
                  
                    * > static identify() {     super.identify();   }
                      
            * > 调用super()会调用父类构造函数，并将返回的实例赋值给this
              
                * > 不要在调用 super()之前引用 this，否则会抛出 ReferenceError
                  
            * > super()的行为如同调用构造函数，如果需要给父类构造函数传参，则需要手动传入
              
                * > super(licensePlate);
                  
            * > 如果没有定义类构造函数，在实例化派生类时会调用super()，而且会传入所有传给派生类的参数
              
                * > class Vehicle {    constructor(licensePlate) {
                  
                * > class Bus extends Vehicle {}
                  
                * > console.log(new Bus('1337H4X')); // Bus { licensePlate: '1337H4X' }
                  
            * > 如果在派生类中显式定义了构造函数，则要么必须在其中调用super()，要么必须在其中返回一个对象
              
        * > 抽象基类
          
            * > 可供其他类继承，但本身不会被实例化
              
            * > 通过在实例化时检测new.target是不是抽象基类，可以阻止对抽象基类的实例化
              
                * > if (new.target === Vehicle) {       throw new Error('Vehicle cannot be directly instantiated');
                  
            * > 可以要求派生类必须定义某个方法
              
                * > 通过在抽象基类构造函数中进行检查
                  
                * > if (!this.foo) {       throw new Error('Inheriting class must define foo()');     }
                  
        * > 类混入
          
            * > 把不同类的行为集中到一个类
              
                * > 案例：Person类需要组合 A、B、C
                  
                    * > 需要某种机制实现 B 继承 A，C 继承 B，而Person 再继承 C
                      
                * ###### 策略
                    * > 定义一组“可嵌套”的函数，每个函数分别接收一个超类作为参数，而将混入类定义为这个参数的子类，并返回这个类
                      
                        * > let FooMixin = (Superclass) => class extends Superclass {
                          
                        * > class Bus extends FooMixin(BarMixin(BazMixin(Vehicle))) {}
                          
                    * > 写一个辅助函数，可以把嵌套调用展开
                      
                        * > ![image](z-Assets/f8257bb98eb30bb7aa68cb96e10a5ec5.png)
            * > 转向了组合模式
              
                * > 很多 JavaScript 框架（特别是 React）已经抛弃混入模式
                  
                * > 软件设计原则：“组合胜过继承（composition over inheritance）。
                  
                * > 把方法提取到独立的类和辅助对象中，然后把它们组合起来，但不使用继承
                  
            * > 区别：混入多个对象的属性
              
                * > Object.assign()
                  
