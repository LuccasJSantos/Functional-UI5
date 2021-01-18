🚧 **Work in progress**

A bunch of general purpose and UI5 focused functional helpers to be used within SAPUI5 environment.
It can be easily imported just like the `utilities.js` file on controllers.

All functions are **curried**, meaning that if the calling function **was not provided** with all the required arguments, **it will return another function** that expects the remaining arguments.
The function itself **will be called when all the arguments are fulfilled**.

So you can leverage the power of partial application within sapui5 models.

# UI5 functions

## model : p => \{ k: fn }

Given a parent **p**, **returns** model handler functions bound to the provided parent.

**_parent examples:_**

-  View
-  Component
-  Fragment

**Usage**

_models.js_

```javascript
return {
   handler: undefined,

   // called from Component.js
   init: function (comp) {
      this.handler = L.model(comp)

      console.log(this.handler)
      /**
       * Outputs: Functions to handle models
       * {
       *  assignTo: fn,
       *  compose: fn,
       *  filter: fn,
       *  for: fn,
       *  getData: fn,
       *  getModel: fn,
       *  map: fn,
       *  pick: fn,
       *  pipe: fn,
       *  prop: fn,
       *  pushTo: fn,
       *  reduce: fn,
       *  setData: fn,
       *  setModel: fn
       * }
       */
   },
}
```

## setModel : s => a => JSONModel

Given a model name **s** and **any** data, sets model with the given name and data into the model handler provider. **Returns** the set model.

**Usage**

_models.js_

```javascript
return {
   // called from Component.js. The Component instance is passed as a parameter using 'this' keyword
   init: function (comp) {
      this.handler = L.model(comp)
      this.handler.setModel('Todos', []) // saves list of todos
      this.handler.setModel('Todo', {}) // saves data for new todos

      // All models are set to the Component when using 'this.handler', since the component was passed as an argument of L.model function.

      const Todos = comp.getModel('Todos')

      console.log(Todos.getData())
      /**
       * Outputs: []
       */
   },
}
```

## getModel : s => JSONModel

Given a model name **s**, gets model with the given name from the provided parent.

**Usage**

_Todo.controller.js_

```javascript
return {
   addTodo: function () {
      const Todos = models.handler.getModel('Todos')
      const todos = L.clone(Todos.getData())

      const Todo = models.handler.getModel('Todo')
      const todo = Todo.getData()

      todos.push({
         id: 1,
         description: todo.description,
         checked: false,
      })

      console.log(todos)
      /**
       * Outputs: [{
       *  id: 1
       *  description: 'Do something',
       *  checked: false
       * }]
       */
   },
}
```

## setData : s => a => b

Given a model name **s** and **any** data, sets data onto the given model name inside the model handler provider. **Returns** the set data.

**Usage**

_Todo.controller.js_

```javascript
return {
   addTodo: function () {
      const Todos = models.handler.getModel('Todos')
      const todos = L.clone(Todos.getData())

      const Todo = models.handler.getModel('Todo')
      const todo = Todo.getData()

      todos.push({
         id: 1,
         description: todo.description,
         checked: false,
      })

      models.handler.setData('Todos', todos)

      console.log(Todos.getData())
      /**
       * Outputs: [{
       *  id: 1
       *  description: 'Do something',
       *  checked: false
       * }]
       */
   },
}
```

## getData : s => a

Given a model name **s**, fetches data from the given model name inside the model handler provider. This function **does not** return a reference, it returns a copy of the data.

**Usage**

_Todo.controller.js_

```javascript
return {
   addTodo: function () {
      const todos = models.handler.getData('Todos')
      const todo = models.handler.getData('Todo')

      todos.push({
         id: 1,
         description: todo.description,
         checked: false,
      })

      models.handler.setData('Todos', todos)

      console.log(models.handler.getData('Todos'))
      /**
       * Outputs: [{
       *  id: 1
       *  description: 'Do something',
       *  checked: false
       * }]
       */
   },
}
```

## assignTo : s => \{ k: v } => \{ k: v }

Given a model name **s** and an **object**, assign the provided object to the model data. **Returns** the assign result.

\*_can also be used as an update method, since it replaces props if them already exist_

**Usage**

_Todo.controller.js_

```javascript
return {
   addTodo: function () {
      const Todo = models.handler.getModel('Todo')

      const todos = models.handler.getData('Todo')
      const todo = models.handler.getData('Todo')

      todos.push({
         id: 1,
         description: todo.description,
         checked: false,
      })

      models.handler.setData('Todos', todos)

      console.log(Todo.getData())
      /**
       * Outputs: { description: 'Do something' }
       */

      models.handler.assignTo('Todo', {
         description: '',
         newProp: 'Hello',
      })

      console.log(Todo.getData())
      /**
       * Outputs: { description: '', newProp: 'Hello' }
       */
   },
}
```

## pushTo : s => a => [ a ]

Given a model name **s** and **any** data, push the data to the model. **Returns** the push result.

**Usage**

_Todo.controller.js_

```javascript
return {
   addTodo: function () {
      const todo = models.handler.getData('Todo')

      models.handler.pushTo('Todos', {
         id: 1,
         description: todo.description,
         checked: false,
      })

      console.log(models.handler.getData('Todos'))
      /**
       * Outputs: [{
       *  id: 1
       *  description: 'Do something',
       *  checked: false
       * }]
       */
   },
}
```

## for : s => \{k: fn}

Given a model name **s**, return the equivalent of L.model, but with the model name bound to it. It creates the model if it doesn't exist, whose data will default to an empty object: { }

This allows you to use every single function for model handling. Please, refer to L.model function at the top to see what functions are available.

_Note: 'for' function will not be included as a result of calling 'for', since it has no purpose of using it in this occasion_

**Usage**

_models.js_

```javascript
return {
   Todos: undefined,
   Todo: undefined,

   // called from Component.js. The Component instance is passed as a parameter using 'this' keyword
   init: function (comp) {
      this.Todos = L.model(comp).for('Todos')
      this.Todo = L.model(comp).for('Todo')

      this.Todos.setData([])
   },
}
```

---

_Todo.controller.js_

```javascript
return {
   addTodo: function () {
      const { description } = models.Todo.getData()

      models.Todos.pushTo({
         id: 1,
         description: description,
         checked: false,
      })

      console.log(models.Todos.getData())
      /**
       * Outputs: [{
       *  id: 1
       *  description: 'Do something',
       *  checked: false
       * }]
       */
   },
}
```

## prop : s => p => a || [a]

Given a model name **s** and a **prop** name, return the prop from the model data.
Can be used with objects and arrays. When using with arrays it will **map** through the array fetching the **prop**.

**Usage**

_Todo.controller.js_

```javascript
return {
   addTodo: function () {
      const description = models.Todo.prop('description')

      models.Todos.pushTo({
         id: 1,
         description,
         checked: false,
      })

      console.log(models.Todos.getData())
      /**
       * Outputs: [{
       *  id: 1
       *  description: 'Do something',
       *  checked: false
       * }]
       */
   },
}
```

## pick : s => [ps] => a || [\{ k: v }]

Given a model name **s** and an array of n **props** names, return the props from the model data.
Can be used with objects and arrays. When using with arrays it will **map** through the array fetching the **props**.

**Usage**

_Todo.controller.js_

```javascript
return {
   addTodo: function () {
      const description = models.Todo.prop('description')

      models.Todos.pushTo({
         id: 1,
         description,
         checked: false,
      })

      models.Todos.pushTo({
         id: 2,
         description,
         checked: true,
      })

      const data = models.Todos.pick(['id', 'checked'])

      console.log(data)
      /**
       * Outputs: [{
       *  id: 1,
       *  checked: false
       * },
       * {
       *  id: 2,
       *  checked: true
       * }]
       */
   },
}
```

## filter : s => (fn => a) => [ a ]

Given a model name **s** and a **function**, filter the model **s** with the passed function. **Returns** data filtered with the function.

**Usage**

_Todo.controller.js_

```javascript
return {
   addTodo: function () {
      const description = models.Todo.prop('description')

      models.Todos.pushTo({
         id: 1,
         description,
         checked: false,
      })

      models.Todos.pushTo({
         id: 2,
         description,
         checked: true,
      })

      const getCompletedOnly = todo => todo.checked
      /**
       * Could be:
       * const getCompletedOnly = L.prop('checked')
       */

      const data = models.Todos.filter(getCompletedOnly)

      console.log(data)
      /**
       * Outputs: [{
       *  id: 2,
       *  checked: true
       * }]
       */
   },
}
```

## map : s => (fn => a) => [ a ]

Given a model name **s** and a **function**, map through the model **s** with the passed function. **Returns** data mapped with the function.

**Usage**

_Todo.controller.js_

```javascript
return {
   addTodo: function () {
      const description = models.Todo.prop('description')

      models.Todos.pushTo({
         id: 1,
         description,
         checked: false,
      })

      models.Todos.pushTo({
         id: 2,
         description: 'My Description',
         checked: true,
      })

      const getDescriptions = todo => todo.description
      /**
       * Could be:
       * const getDescriptions = L.prop('description')
       */

      const data = models.Todos.map(getDescriptions)

      console.log(data)
      /**
       * Outputs: ['Do something', 'My Description']
       */
   },
}
```

## reduce : s => (fn => a) => b => a

Given a model name **s**, a **function** and an initial value **b**, reduce through the model **s** with the passed function using the initial value as the starting accumulator. **Returns** data reduced with the function.

**Usage**

_Todo.controller.js_

```javascript
return {
   addTodo: function () {
      const description = models.Todo.prop('description')

      models.Todos.pushTo({
         id: 1,
         description,
         checked: false,
      })

      models.Todos.pushTo({
         id: 2,
         description: 'My Description',
         checked: true,
      })

      // There are better ways of doing it, this is just for demonstration purposes
      const checkIfAllCompleted = (result, todo) => result && todo.checked

      const result = models.Todos.reduce(checkIfAllCompleted, true)

      console.log(result)
      /**
       * Outputs: false
       */
   },
}
```
