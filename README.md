# vue-popmotion
A small wrapper for integrating popmotion to Vuejs

## How to install:
### CommonJS:
```bash
npm install --save lodash vue-popmotion
#or
yarn add moon-lodash 
```

And in your entry file:
```javascript
import Vue from 'vue'
import popmotion from 'popmotion'
import VuePopmotion from 'vue-popmotion'

Vue.use(VuePomotion, popmotion)
```

### Script:
Just add 3 scripts in order: `vue`, `popmotion` and `vue-popmotion` to your `document`.
```html
<script src="https://unpkg.com/vue-popmotion"></script>
```

## Usage:
This wrapper bind `popmotion` to `Vue` or `this` if you're using single file component.

You can `popmotion` like this:
```javascript
// the following are available:
Vue.popmotion

Vue.pm

this.popmotion

this.pm
```

##

# License

Copyright [Daksh Miglani](https://dak.sh/), Licensed Under MIT 2017.