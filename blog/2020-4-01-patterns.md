---
id: Patterns
title: 前端中的设计模式
author: delldi
author_title: 学而时习之
author_url: https://github.com/delldi
author_image_url: https://avatars3.githubusercontent.com/u/40460351?s=60&u=ba9637be7363625f2322319ab99fe8508e4bce87&v=4
tags: [js, patterns]
---
## 设计模式分类
设计模式可以分为三大类：

1.  **结构型（Structural Patterns**设计模式： 根据组件间的关系进行简化系统的设计
2.  **创建型模式（Creational Patterns）**：处理对象的创建，根据实际的情况使用合适的方式去创建的对象，一般是通过某种方式去控制对象的创建去解决问题
3.  **行为型模式（Behavioral Patterns）**，用于识别对象之间常见的交互模式并加以实现，如此，增加了这些交互的灵活性。

<!--truncate-->

## 设计模式分类
设计模式可以分为三大类：
1. **结构型（Structural Patterns**设计模式： 根据组件间的关系进行简化系统的设计
2. **创建型模式（Creational Patterns）**：处理对象的创建，根据实际的情况使用合适的方式去创建的对象，一般是通过某种方式去控制对象的创建去解决问题
3. **行为型模式（Behavioral Patterns）**，用于识别对象之间常见的交互模式并加以实现，如此，增加了这些交互的灵活性。

## 一. 结构型模式
---
### 1.外观模式（Facade Pattern）

> 一般来说，外观设计模式就是把多个子系统中复杂逻辑进行抽象，从而提供一个更统一、更简洁、更易用的API。例如`jQuery`，既把原生的DOM进行了一层封装，又扩展了兼容性的问题。

应用外观模式封装一个统一的DOM元素事件绑定/取消方法
```js
// 绑定事件
function addEvent(element, event, handler) {
  if (element.addEventListener) {
    element.addEventListener(event, handler, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + event, handler);
  } else {
    element['on' + event] = fn;
  }
}

// 取消绑定
function removeEvent(element, event, handler) {
  if (element.removeEventListener) {
    element.removeEventListener(event, handler, false);
  } else if (element.detachEvent) {
    element.detachEvent('on' + event, handler);
  } else {
    element['on' + event] = null;
  }
}    
```

### 2. 代理模式（Proxy Pattern）

> 当访问一个对象本身的代价太高（比如太占内存、初始化时间太长等）或者需要增加额外的逻辑又不修改对象本身时便可以使用代理。ES6中也增加了 Proxy 的功能。

归纳一下，代理模式可以解决以下的问题：

- 增加对一个对象的访问控制
- 当访问一个对象的过程中需要增加额外的逻辑

实现代理模式需要三部分
1. 源对象 `Real Subject`
2. `Proxy`: 代理对象
3. subject接口：Real Subject和Proxy都需要实现的接口

```js

    // 延迟模拟真实的API
    function SomeRestAPI() {
      // Subject Interface实现
      this.getValue = function (stock, callback) {
        console.log('Calling external API ... ');
        setTimeout(() => {
          switch (stock) {
            case 'type1':
              callback('1');
              break;
            case 'type2':
              callback('2');
              break;
            case 'type3':
              callback('3');
              break;
            default:
              callback('');
          }
        }, 1000);
      }
    }
    // 代理模式 增加缓存和额外的逻辑处理
    function TypeAPIProxy() {
      this.cache = {};
          // 真实API对象
      this.realAPI = new SomeRestAPI();
      // Subject Interface实现
      this.getValue = function (type, callback) {
        const cachedValue = this.cache[type];
        if (cachedValue) {
          console.log('Got value from cache');
          callback(cachedValue);
        } else {
          this.realAPI.getValue(type, (value) => {
            this.cache[type] = value;
            callback(price);
          });
        }
      }
    }
    
    const api = new StockPriceAPIProxy();
    api.getValue('type1', (value) => { console.log(value) });
    api.getValue('type2', (value) => { console.log(value) });
    api.getValue('type3', (value) => { console.log(value) });
    
    setTimeout(() => {
      api.getValue('type1', (value) => { console.log(value) });
      api.getValue('type2', (value) => { console.log(value) });
      api.getValue('type3', (value) => { console.log(value) });
    }, 2000)
```
## 二. 创建型模式（Creational Patterns）
---

### 1. 工厂模式（Factory Pattern）
> 有同一个父类、实现同一个接口等时，不妨使用工厂模式.一般是有特定的同一结构，但传参不同，对应实例对象又不同

构造函数过多，不方便管理，就需要引入工厂模式，利用枚举创建不同的类。

```js
    // 汽车品牌枚举
const BRANDS = {
  suzuki: 1,
  honda: 2,
  bmw: 3
}

/**
 * 汽车工厂
 */
function CarFactory() {
  this.create = function (brand, color) {
    switch (brand) {
      case BRANDS.suzuki:
        return new SuzukiCar(color);
      case BRANDS.honda:
        return new HondaCar(color);
      case BRANDS.bmw:
        return new BMWCar(color);
      default:
        break;
    }
  }
}
```

### 2.单例模式（Singleton Pattern）
顾名思义，单例模式中Class的实例个数最多为1
其中单例模式需要思考的问题。
1. 如何确定Class只有一个实例？
2. 如何简便的访问Class的唯一实例？
3. Class 控制实例化的过程
4. 如何将Class的实例个数限制为1

```js
    // 单例构造器
    const FooServiceSingleton = (function () {
      // 隐藏的Class的构造函数
      function FooService() {}
    
      // 未初始化的单例对象
      let fooService;
    
      return {
        // 创建/获取单例对象的函数
        getInstance: function () {
          if (!fooService) {
            fooService = new FooService();
          }
          return fooService;
        }
      }
    })();
    
    const service1 = FooServiceSingleton.getInstance();
    const service2 = FooServiceSingleton.getInstance();
    service1 === service2 // true
```

实现的关键点有：1. 使用IIFE创建局部作用域并即时执行；2. getInstance() 为一个闭包 ，使用闭包保存局部作用域中的单例对象并返回。

单例模式下，经典用法就是toast或者dialog实例，一般都采用的单例模式


## 三. 行为型模式（Behavioral Patterns）
---
### 1. 策略模式（Strategy Pattern）

> 简单来说，就是根据不同的行为和不同的场景，去采用实现不同的算法。实现统一的接口。

Node 生态里的鉴权库 Passport.js API的设计就应用了策略模式。下面是简化流程
```js
    /**
     * 登录控制器
     */
    function LoginController() {
      this.strategy = undefined;
      this.setStrategy = function (strategy) {
      // 分离当前策略类型,导入不同的策略实例
        this.strategy = strategy;
      // 分离当前登录策略
        this.login = this.strategy.login;
      }
    }
    
    /**
     * 用户名、密码登录策略
     */
    function LocalStragegy() {
      this.login = ({ username, password }) => {
        console.log(username, password);
        // authenticating with username and password...
      }
    }
    
    /**
     * 手机号、验证码登录策略
     */
    function PhoneStragety() {
      this.login = ({ phone, verifyCode }) => {
        console.log(phone, verifyCode);
        // authenticating with hone and verifyCode...
      }
    }
    
    /**
     * 第三方社交登录策略
     */
    function SocialStragety() {
      this.login = ({ id, secret }) => {
        console.log(id, secret);
        // authenticating with id and secret...
      }
    }
    
    const loginController = new LoginController();
    
    // 调用用户名、密码登录接口，使用LocalStrategy
    app.use('/login/local', function (req, res) {
      loginController.setStrategy(new LocalStragegy());
      loginController.login(req.body);
    });
    
    // 调用手机、验证码登录接口，使用PhoneStrategy
    app.use('/login/phone', function (req, res) {
      loginController.setStrategy(new PhoneStragety());
      loginController.login(req.body);
    });
    
    // 调用社交登录接口，使用SocialStrategy
    app.use('/login/social', function (req, res) {
      loginController.setStrategy(new SocialStragety());
      loginController.login(req.body);
    });

```

### 2. 迭代器模式（Iterator Pattern）

ES6中的迭代器 `Iterator`迭代器用于遍历容器（集合）并访问容器中的元素，而且无论容器的数据结构是什么（Array、Set、Map等），迭代器的接口都应该是一样的，都需要遵循 迭代器协议。

迭代器接口，通常要实现两个接口

- `hasNext()`: 判断迭代是否结束，返回Boolean
- `next()`: 查找并且返回下一个元素
js的实现方式

```js
   const item = [1, 'red', false, 3.14];
   function Iterator(items) {
       this.items = items;
       this.index = 0;
   }
   
   Iterator.prototype = {
       hasNext: function() {
           return this.index < this.items.length
       },
       next: function() {
           return this.items[this.index ++]
       }
   }
   
   const iterator = new Iterator(item)
   while(iterator.hasNext()) {
       console.log(iterator.next())
   }
```

在ES6中，操作对象需要实现 可迭代协议（The iterable protocol）。对象的[Symbol.iterator]方法要返回一个iterator对象,可以使用迭代循环语法for...of 

本地实现一个`Range`类，并满足自定义的自增区间的迭代
```js
    function Range(start, end) {
        return {
            [symbol.iterator]: function() {
                return {
                    next: function () {
                        if (start <= end) {
                            return { value: start ++, done: false }
                        }
                        return { done: true, value: end}
                    }
                }
            }
        }
    }
    
    for (num of Range(1, 5)) {
        console.log(num) 
    }
    // 1, 2, 3, 4, 5
```
### 3. 观察者模式（Observer Pattern）

观察者模式又称发布订阅模式（Publish/Subscribe Pattern）

JavaScript中的事件订阅响应机制,`addEventListener()`就是经典的发布订阅模式.**被观察对象（subject）维护一组观察者（observer），当被观察对象状态改变时，通过调用观察者的某个方法将这些变化通知到观察者。**

`target.addEventListener(type, listener [, options]);`
其中 `target`就是其中的Subject对象`listener`就是观察者Observer

观察者模式中Subject对象一般需要实现以下API：
1. `subscribe()`: 接收一个观察者observer对象，使其订阅自己
2. `unsubscribe()`: 接收一个观察者observer对象，使其取消订阅自己
3. `fire()`: 触发事件，通知到所有观察者
实现一个简单的发布订阅模式

```js
    // 被观察者
    function Subject () {
        this.observers = []
    }
    Subject.prototype = {
        // 订阅
        subscribe: function (observer) {
            this.observers.push(observer)
        }
        // 取消订阅
        unsubscribe: function(observerToRemove) {
            this.observers = this.observers.filter(observer => observer !== observerToRemove)
        }
        // 时间触发
        fire: function(...args) {
            this.observer.forEach(observer => {
                observer.call(args)
            })
        }
    }
```

可以来测试一下

```js
    const subject = new Subject() 
    function observer1() {
        console.log('Observer 1 start')
    }
    function observer2() {
        console.log('Observer 2 start')
    }
    subject.subscribe(observer1)
    subject.fire()
    subject.subscribe(observer2)
    subject.fire()
    subject.unsubscribe(observer2)
    subject.fire()
    // 'Observer 1 start'
    // 'Observer 1 start' 、 'Observer 2 start'
    // 'Observer 1 start'
```

### 4. 中介者模式（Mediator Pattern）

中介者模式和观察者模式有一定的相似性，都是一对多的关系，也都是集中式通信，不同的是中介者模式是处理同级`对象之间`的交互，而观察者模式是处理`Observer和Subject之间`的交互.

经典的聊天室案例

```js
// 成员类
    function Member(name) {
        this.name = name
        // 成员实例方法，需要由中间类构造器实现
        this.chatroom = null
    }
    Member.prototype = {
        send: function(message, toMember) {
            this.chatroom.send(message, this, toMember)
        },
        receive: function(message, fromMember) {
            console.log(`${fromMember.name}to${this.name}:${message}`)
        }
    }
// 聊天室类：
    function Chatroom() {
    // 维护所有聊天室成员
        this.members = {}
    }

    Chatroom.prototype = {
        // 添加聊天室成员，接受成员实例
        addMember: function(member) {
        // 维护成员名，成员实例member，key（name） - value(member 实例)
            this.members[member.name] = member
            // 成员实例获取聊天室实例，继承聊天室类的方法send
            member.chatroom = this
        },
        // 发送消息
        send: function(message, fromMember, toMember) {
            toMember.receive(message, fromMember)
        }
    }
```
最终测试一下

```js
 const chatroom  = new Chatromm()
 const dell = new Member('dell')
 const di = new Member('di')
 
 chatroom.addMember(dell)
 chatroom.addMember(di)
 dell.send('heihei', di)
 // dell to di: heihei
```

得益于中介者模式，Member不需要处理和聊天相关的复杂逻辑，而是全部交给Chatroom中间类，有效的实现了关注分离。

### 5. 访问者模式（Visitor Pattern）
>访问者模式让我们能够在不改变一个对象结构的前提下能够给该对象增加新的逻辑，新增的逻辑保存在一个独立的访问者对象中。访问者模式常用于拓展一些第三方的库和工具。

实现所需要点
1. `Visitor Object`：访问者对象，拥有一个 `visit()` 方法
2. `Receiving Object`：接收对象，拥有一个 `accept()` 方法
3. `visit(receivingObj)`：用于Visitor接收一个`Receiving Object`
4. `accept(visitor)`：用于RecevingObject接收一个Visitor，并通过调用Visitor的 `visit()` 为其提供获取Receiving Object数据的能力

**ReceivingObject：** 
```js
    function Employee(name, salary) {
      this.name = name;
      this.salary = salary;
    }
    
    Employee.prototype = {
      getSalary: function () {
        return this.salary;
      },
      setSalary: function (salary) {
        this.salary = salary;
      },
      accept: function (visitor) {
        visitor.visit(this);
      }
    }
```

**Visitor Object：** 

```js
// 这里就是访问者对象，扩展新加的逻辑
    function Visitor() {}
    Visitor.prototype = {
      visit: function (employee) {
        employee.setSalary(employee.getSalary() * 2);
      }
    }
    
```
验证：

```js
    const employee = new Employee('delldi', 15000);
    const visitor = new Visitor();
    employee.accept(visitor);
    console.log(employee.getSalary());
    // 30000
```
可以看到，这里最终重写了employee.setSalary的逻辑