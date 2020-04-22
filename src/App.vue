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
  @font-face {
    font-family: 'Alegreya Sans';
    font-style: normal;
    font-weight: 400;
    src: url('assets/fonts/alegreya-sans-v10-latin-ext_latin-regular.eot');
    src: local('Alegreya Sans Regular'), local('AlegreyaSans-Regular'),
    url('assets/fonts/alegreya-sans-v10-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/alegreya-sans-v10-latin-ext_latin-regular.woff2') format('woff2'),
    url('assets/fonts/alegreya-sans-v10-latin-ext_latin-regular.woff') format('woff'),
    url('assets/fonts/alegreya-sans-v10-latin-ext_latin-regular.ttf') format('truetype'),
    url('assets/fonts/alegreya-sans-v10-latin-ext_latin-regular.svg#AlegreyaSans') format('svg');
  }

  @font-face {
    font-family: 'Alegreya Sans';
    font-style: normal;
    font-weight: 500;
    src: url('assets/fonts/alegreya-sans-v10-latin-ext_latin-500.eot');
    src: local('Alegreya Sans Medium'), local('AlegreyaSans-Medium'),
    url('assets/fonts/alegreya-sans-v10-latin-ext_latin-500.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/alegreya-sans-v10-latin-ext_latin-500.woff2') format('woff2'),
    url('assets/fonts/alegreya-sans-v10-latin-ext_latin-500.woff') format('woff'),
    url('assets/fonts/alegreya-sans-v10-latin-ext_latin-500.ttf') format('truetype'),
    url('assets/fonts/alegreya-sans-v10-latin-ext_latin-500.svg#AlegreyaSans') format('svg');
  }

  html {
    font-family: 'Alegreya Sans', sans-serif;
    font-size: 16px;
  }

  * {
    box-sizing: border-box;

    @media only screen and (min-width: 1024px) {
      cursor: none;
    }
  }

  body {
    margin: 0;
  }

  h1 {
    font-weight: 500;
    font-size: 2.5rem;
  }
</style>
