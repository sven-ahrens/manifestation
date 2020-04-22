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
