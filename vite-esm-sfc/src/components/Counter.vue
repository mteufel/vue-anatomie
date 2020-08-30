<template>
  <h1>Counter {{ no }}: {{ counter }}</h1>
</template>

<script>
export default {
  name: 'Counter',
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
}
</script>