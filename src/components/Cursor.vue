<template>
  <div>
    <div class="discover">
      <!-- The image is placed right here -->
    </div>
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
    background-image: url('../assets/images/background.jpg');
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

    circle {
      transition: all .65s cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }
  }
</style>
