<template>
  <div id="app" class="app">
    <Header />
    <Homepage />
  </div>
</template>

<script>
import Homepage from './components/Homepage'
import Header from './components/Header'

export default {
  name: 'App',

  components: {
    Homepage,
    Header
  }
}
</script>

<style lang="scss" src="@/App.scss" />
