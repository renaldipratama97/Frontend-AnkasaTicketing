<template>
    <div>
        <Header/>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
import Footer from '../../components/module/Footer'
import Header from '../../components/module/Header'
export default {
  name: 'Main',
  components: {
    Footer,
    Header
  }
}
</script>

<style scoped>
div {
  background: #E5E5E5;;
}
</style>
