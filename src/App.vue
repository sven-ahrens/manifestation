<template>
  <div>
    <Cursor />
    <router-view />
  </div>
</template>

<script>
import Cursor from './components/Cursor'
export default {
  components: { Cursor }
}
</script>

<style lang="scss">
  @import 'assets/styles/app';
</style>
