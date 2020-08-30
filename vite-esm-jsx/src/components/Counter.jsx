export default {
  name: 'Counter',
  props: {
    no: Number,
    countForward: Boolean,
    initialValue: Number
  },
  render() {
    return <h1>Counter {this.no}: {this.counter}</h1>
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
}
