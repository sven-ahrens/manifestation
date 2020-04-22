<template>
  <section class="manifest">
    <h1>Hey.</h1>
    <section class="about-me">
      <div class="portrait">
        <img alt="" src="../assets/images/me.png"/>
      </div>
    </section>
    <section class="references">
      <ul>
        <li>
          <a>
            <img src="../assets/images/GitHub.png">
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/images/Instagram.png">
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/images/Twitter.png">
          </a>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Manifest',
  setup () {
    return {
      references: ['GitHub.png', 'Twitter.png', 'Instagram.png']
    }
  }
}
</script>

<style lang="scss">
  .manifest {
    position: absolute;
    left: 0;
    top: 0;
    padding: 20px;
    height: 100%;
    width: 100%;

    .about-me {
      display: flex;
      flex-direction: column;
      height: 50%;
      justify-content: center;
      align-items: center;
    }

    .portrait {
      overflow: hidden;
      width: 10rem;
      height: 10rem;
      border-radius: 9999px;
      img {
        max-width: 100%;
      }
    }

    .references {
      width: 100%;
      ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;

        li {
          padding: 10px;
          list-style-type: none;
        }
      }
      img {
        width: 32px;
        height: 32px;
      }
    }
  }
</style>
