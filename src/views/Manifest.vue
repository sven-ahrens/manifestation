<template>
  <section class="manifest">
    <h1>
      <span class="text--blue">H</span>
      <span class="text--pink">e</span>
      <span class="text--light-blue">y.</span>
    </h1>
    <section class="about-me">
      <div class="portrait">
        <img
          alt="A picture of myself"
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
