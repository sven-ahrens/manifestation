<template>
  <section class="manifest">
    <h1>Hey.</h1>
    <section class="about-me">
      <div class="portrait">
        <img
          alt=""
          src="../assets/images/me.jpg" />
      </div>
    </section>
    <section class="references">
      <references />
    </section>
  </section>
</template>

<script>
import References from '../components/References'
export default {
  name: 'Manifest',
  components: { References }
}
</script>
