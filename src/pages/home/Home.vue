<template>
<div>
    <Home-header></Home-header>
    <Home-swiper></Home-swiper>
    <Home-icons></Home-icons>
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style>

</style>
