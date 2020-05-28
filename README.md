# Vue Form Helper

Library sederhana untuk membantu membuat form di Vue.js

## Penggunaan

### 1. Import & Instansiasi

Import file `/helper/form.js` seperti es module pada umumnya lalu lakukan instansiasi dengan nilai awal adalah sebuah array.

``` javascript
import FormHelper from './helper/form.js'

const form = new FormHelper([
  'firstname',
  'lastname'
  // ...
])
```

### 2. Bind

Helper perlu instance vue untuk bisa mengelola state, panggil fungsi bind  dari helper didalam lifecycle vue - `mounted`.

``` javascript
// ...
mounted () {
  // ...
  form.bind(this)
  // ...
}
// ...
```