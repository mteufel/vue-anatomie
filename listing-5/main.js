import {createApp, h} from 'https://unpkg.com/vue@3.0.0-rc.7/dist/vue.esm-browser.js'

const app = createApp({})

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