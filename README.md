# Vue Components - Advanced

- [Vue Components - Advanced](#vue-components---advanced)
  - [Deploymet](#deploymet)
  - [Problem](#problem)
  - [Provide and Inject](#provide-and-inject)
    - [Provide](#provide)
    - [Inject](#inject)
  - [Function Injection](#function-injection)

## Deploymet

- Check deploment at https://gagandeep39.github.io/vue-components-2/

## Problem

- Parent cild communication is easy
- However in large application there are multilevel childs
- Communication becomes difficut in such purposes

## Provide and Inject

### Provide

- Used to provide data to components and sub components
- Data is avaiable to child ad sub child component
- Instead of `data()`, we use `provide: {}`

```js
// Providing data through parent
export default {
  provide: {
    topics: [],
  },
};
```

- However `provide: {}` data is not accessible through function
- To fix this, we can simply create data in data() {return {}} and refer it from provide

```js
// Providing data through parent
export default {
  provide: {
    topics: this.topics,
  },
  data() {
    return {
      topics: ['asas', 'asas'],
    };
  },
};
```

### Inject

- Variable name specified in child component
- Using the data from parent
- Only data that has been provided in higher level parent is accessible here

```js
// Recieving data thrugh multilevel child
export default {
  inject: ['topics'],
};
```

## Function Injection

- Similar to data injection
- We simpliy provide a referece to a method in `provide` in parent
- Use the method hrough `inject` in Child

```js
// Parent
export default {
  provide() {
    return {
      activateTopic: this.activateTopic,
    };
  },
  methods: {
    activateTopic(topicId) {
      // Logic
    },
  },
};
```

```js
// Multi level Child
export default {
  inject: ['activateTopic'],
};
```
