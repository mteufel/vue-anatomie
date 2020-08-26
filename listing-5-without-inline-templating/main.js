import { createApp, h, resolveComponent as _resolveComponent, createVNode as _createVNode, Fragment as _Fragment, openBlock as _openBlock, createBlock as _createBlock } from 'https://unpkg.com/vue@3.0.0-rc.7/dist/vue.runtime.esm-browser.js'

const app = createApp({
    render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_counter = _resolveComponent("counter")

    return (_openBlock(), _createBlock(_Fragment, null, [
        _createVNode(_component_counter, {
            no: 1,
            "count-forward": true,
            "initial-value": 0
        }),
        _createVNode(_component_counter, {
            no: 2,
            "count-forward": false,
            "initial-value": 500
        }),
        _createVNode(_component_counter, {
            no: 3,
            "count-forward": true,
            "initial-value": 200
        })
    ], 64 /* STABLE_FRAGMENT */))
    }
})

app.component('counter', {
    render() {
        return h('h1', `Counter ${this.no}: ${this.counter}`)
    },
    props: {
        no: Number,
        countForward: Boolean,
        initialValue: Number
    },
    data() {
        return {
            counter: this.initialValue
        }
    },
    mounted() {
        setInterval(() => {
            if (this.countForward) {
                this.counter++
            } else {
                this.counter--
            }
        }, 1000)
    }
})
app.mount('#app')