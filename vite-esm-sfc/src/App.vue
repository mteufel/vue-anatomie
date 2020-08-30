<template>
  <counter :no="1" :count-forward="true" :initial-value="0"></counter>
  <counter :no="2" :count-forward="false" :initial-value="500"></counter>
  <counter :no="3" :count-forward="true" :initial-value="200"></counter>
</template>

<script>
import Counter from "./components/Counter.vue";

export default {
  name: 'App',
  components: {
    Counter
  }
}
</script>
