'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var VuePopmotion = {
	install: function install(Vue, popmotion) {
		Vue.popmotion = popmotion;
		Object.defineProperties(Vue.prototype, {
			popmotion: {
				get: function get() {
					return popmotion;
				}
			}
		});
		Vue.mixin({
			mounted: function mounted() {
				// Just tell you that it is mounted
				// console.log('VuePopmotion');
			}
		});
		if (typeof window !== 'undefined' && window.Vue) {
			window.Vue.use(VuePopmotion);
		}
	}
};

exports.default = VuePopmotion;