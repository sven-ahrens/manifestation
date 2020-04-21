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
  * {
    cursor: none;
    box-sizing: border-box;
  }

  html {
    @font-face {
      font-family: 'Alegreya Sans';
      font-style: normal;
      font-weight: 400;
      src: url('~@/assets/fonts/alegreya-sans/alegreya-sans-v10-latin-ext_latin-regular.eot');
      src: local('Alegreya Sans Regular'), local('AlegreyaSans-Regular'),
      url('~@/assets/fonts/alegreya-sans/alegreya-sans-v10-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'),
      url('~@/assets/fonts/alegreya-sans/alegreya-sans-v10-latin-ext_latin-regular.woff2') format('woff2'),
      url('~@/assets/fonts/alegreya-sans/alegreya-sans-v10-latin-ext_latin-regular.woff') format('woff'),
      url('~@/assets/fonts/alegreya-sans/alegreya-sans-v10-latin-ext_latin-regular.ttf') format('truetype'),
      url('~@/assets/fonts/alegreya-sans/alegreya-sans-v10-latin-ext_latin-regular.svg#AlegreyaSans') format('svg');
    }

    /* alegreya-sans-500 - latin-ext_latin */
    @font-face {
      font-family: 'Alegreya Sans';
      font-style: normal;
      font-weight: 500;
      src: url('~@/assets/fonts/alegreya-sans/alegreya-sans-v10-latin-ext_latin-500.eot'); /* IE9 Compat Modes */
      src: local('Alegreya Sans Medium'), local('AlegreyaSans-Medium'),
      url('~@/assets/fonts/alegreya-sans/alegreya-sans-v10-latin-ext_latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('~@/assets/fonts/alegreya-sans/alegreya-sans-v10-latin-ext_latin-500.woff2') format('woff2'), /* Super Modern Browsers */
      url('~@/assets/fonts/alegreya-sans/alegreya-sans-v10-latin-ext_latin-500.woff') format('woff'), /* Modern Browsers */
      url('~@/assets/fonts/alegreya-sans/alegreya-sans-v10-latin-ext_latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
      url('~@/assets/fonts/alegreya-sans/alegreya-sans-v10-latin-ext_latin-500.svg#AlegreyaSans') format('svg'); /* Legacy iOS */
    }
  }

  body {
    margin: 0;
  }
</style>
