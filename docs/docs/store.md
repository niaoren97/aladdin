# local store

客户端所有的本地状态都存储在vuex的store中.

## schema

分为几个模块:

- cart

    购物车模块

- user

    用户信息,状态

- search

    保存搜索的信息, 历史记录


### cart

```js
{
  state: {
    products: [],
  }
}
state
```

### user

保存用户的登录信息, 地址, 积分, 卡券, 等信息.

```js
{
  state: {
    name: '',
    token: '',
    isLoggedIn: false,
    addresses: [],
    cards: [],
    points: 0,
  }
}
```

### search

```js
{
  state: {
    hot: [],
    history: [],
  }
}
```

