🚧 **Work in progress**

A bunch of general purpose and UI5 focused functional helpers to be used within SAPUI5 environment.
It can be easily imported just like the `utilities.js` file on controllers.

All functions are **curried**, meaning that if the calling function **was not provided** with all the required arguments, **it will return another function** that expects the remaining arguments.
The function itself **will be called when all the arguments are fulfilled**.

So you can leverage the power of partial application with sapui5 functions.

# UI5 functions

## model : p => \{k: fn}

Given a parent **p**, **returns** model handler functions bound to the provided parent.

**_parent examples:_**

- View
- Component
- Fragment

**Usage**

```javascript
L.model(this.getView())

/* outputs:
{
	setModel: fn,
	getModel: fn,
	getData: fn,
	setData: fn,
	assignTo: fn,
	pushTo: fn,
	for: fn
}
*/
```

## setModel : s => a => JSONModel

Given a name **s** and **any** data, sets model with the given name and data onto the model handler provider. **Returns** the model just set.

**Usage**

```javascript
const viewHandler = L.model(this.getView())

const model = viewHandler.setModel('Address', { zipcode: '90210' })

model.getData()
// outputs: { zipcode: '90210' }

hanaPromise.then(viewHandler.setModel('Products')).then(() => {
  this.getView().oModels
  /* outputs: 
		{
			Address: constructor,
			Products: constructor
		}
		*/
})
```

## getModel : s => JSONModel

Given a name **s**, gets model with the given name from the model handler provider.

**Usage**

```javascript
const viewHandler = L.model(this.getView())

const model = viewHandler.setModel('Address', { zipcode: '90210' })

viewHandler.getModel('Address')
// outputs: JSONModel object

viewHandler.getModel('Address').getData()
// outputs: { zipcode: '90210' }
```

## setData : s => a => JSONModel

Given a name **s** and **any** data, sets data onto the given model name inside the model handler provider.

**Usage**

```javascript
const viewHandler = L.model(this.getView())

let model = viewHandler.setModel('Address', {})

model.getData('Address')
// outputs: { }

model = viewhandler.setData('Address', { zipcode: '90210' })

model.getData()
// outputs: { zipcode: '90210' }
```

## getData : s => a

Given a name **s**, fetches data from the given model name inside the model handler provider.

**Usage**

```javascript
const viewHandler = L.model(this.getView())

viewHandler.setModel('Address', { zipcode: '90210' })

viewHandler.getData('Address')
// outputs: { zipcode: '90210' }
```

## assignTo : s => \{ k: v } => \{ k: v }

Given a name **s** and an object, assign the provided object to the data into the provided model from the model handler provider. **Returns** the assign result object.

\*_can also be used as an update method, since it replaces props if already exists_

**Usage**

```javascript
const viewHandler = L.model(this.getView())

viewHandler.setModel('Address', { zipcode: '90210' })

viewHandler.assignTo('Address', { city: 'California' })

viewHandler.getData('Address')
// outputs: { zipcode: '90210', city: 'California' }
```

## pushTo : s => a => [ ..., a ]

Given a name **s** and an object, assign the provided object to the data into the provided model from the model handler provider. **Returns** the assign result object.

**Usage**

```javascript
const viewHandler = L.model(this.getView())

viewHandler.setModel('Alphabet', ['a', 'b', 'c'])

viewHandler.pushTo('Alphabet', 'd')

viewHandler.getData('Alphabet')
// outputs: [ 'a', 'b', 'c', 'd' ]
```

## for : s => \{k: fn}

Given a name **s**, **returns** model handler to the given model name.

**Usage**

```javascript
const viewHandler = L.model(this.getView())

viewHandler.setModel('Address', { zipcode: '90210' })

const addressHandler = viewHandler.for('Address')

addressHandler.assignTo({ city: 'California' })

addressHandler.getData()
// outputs: { zipcode: '90210', city: 'California' }
```
