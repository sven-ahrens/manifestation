<template>
  <div>
    <div class="discover">
      <!-- The image is placed right here -->
    </div>
    <h1>Hey!</h1>
    <svg
      class="cursor"
      height="30"
      width="30">
      <circle
        :cx="x"
        :cy="y"
        r="100"
        stroke-width="0">
      </circle>
    </svg>
  </div>
</template>

<script>
import { useMousePosition } from '../services/cursor'

export default {
  name: 'Cursor',
  setup () {
    const { x, y } = useMousePosition()

    return {
      x,
      y
    }
  }
}
</script>

<style lang="scss">
  .discover {
    background-color: #CB96A6;
    background-image: url('../../public/images/blue-lemon.jpg');
    background-size: cover;
    height: 100vh;
  }

  .cursor {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    mix-blend-mode: screen;
  }
</style>
