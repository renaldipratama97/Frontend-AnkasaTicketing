<template>
    <div>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
import Footer from '../../components/module/Footer'
export default {
  name: 'Main',
  components: {
    Footer
  }
}
</script>

<style scoped>

</style>
