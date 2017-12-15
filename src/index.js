const VuePopmotion = {
	install(Vue, popmotion) {
		Vue.popmotion = popmotion
		Object.defineProperties(Vue.prototype, {
			popmotion: {
				get() {
					return popmotion
				}
			}
		})
		Vue.mixin({
			mounted() {
				// Just tell you that it is mounted
				// console.log('VuePopmotion');
			}
		})
		if(typeof window !== 'undefined' && window.Vue) {
			window.Vue.use(VuePopmotion)
		}
	}
}

export default VuePopmotion