<!-- .slide: data-auto-animate -->

### Mutating code

```js
function isAllowedToBuyAlcohol(customer) {
    return customer.age >= 18;
}
```

```js
const customer = { name: 'Professor X', age: 96 };
expect(isAllowedToBuyAlcohol(customer)).to.equal(true);
```

---

<!-- .slide: data-auto-animate -->

### Mutating code

```js
function isAllowedToBuyAlcohol(customer) {
    return customer.age >= 18;
    /* 👽 1 */ return customer.age < 18;
    /* 👽 2 */ return customer.age > 18;
    /* 👽 3 */ return false;
    /* 👽 4 */ return true;
}
```

```js
const customer = { name: 'Professor X', age: 96 };
expect(isAllowedToBuyAlcohol(customer)).to.equal(true);
```

---

<!-- .slide: data-auto-animate -->

### Mutating code

```js
function isAllowedToBuyAlcohol(customer) {
    return customer.age >= 18;
    /* 👽 1 */ return customer.age < 18; /* ✅ Killed */
    /* 👽 2 */ return customer.age > 18; /* ❌ Survived */
    /* 👽 3 */ return false; /* ✅ Killed */
    /* 👽 4 */ return true; /* ❌ Survived */
}
```

```js
const customer = { name: 'Professor X', age: 96 };
expect(isAllowedToBuyAlcohol(customer)).to.equal(true);
```

---

<!-- .slide: data-auto-animate -->

### Mutating code

```js
function isAllowedToBuyAlcohol(customer) {
    return customer.age >= 18;
    /* 👽 1 */ return customer.age < 18; /* ✅ Killed */
    /* 👽 2 */ return customer.age > 18; /* ✅ Killed */
    /* 👽 3 */ return false; /* ✅ Killed */
    /* 👽 4 */ return true; /* ✅ Killed */
}
```

```js
const customer = { name: 'Professor X', age: 96 };
expect(isAllowedToBuyAlcohol(customer)).to.equal(true);
```

Additional tests:

```js
expect(isAllowedToBuyAlcohol({ age: 18 })).to.equal(true);
expect(isAllowedToBuyAlcohol({ age: 16 })).to.equal(false);
```
