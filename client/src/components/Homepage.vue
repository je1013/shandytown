<template>
  <div id="game" @click="click" >
    <Overlay v-if="gameStarted" />
    <template v-else>
      Game has started
    </template>
  </div>
</template>

<script>
import { store, methods } from "@/store";
export default {
  name: 'Homepage',

  computed: {
    gameStarted: () => store.state.hasStarted,
  },
  methods: {
    click() {
      methods.click();
    }
  }
}
</script>

<style lang="scss" scoped>
#game {
  margin: 0 auto;
}
</style>