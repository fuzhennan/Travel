<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {id: '001', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1709/39/b98fdb3ee7478e02.jpg_750x200_be64b756.jpg'},
        {id: '002', imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/06e65ace8dce3638e847b04e975489d1.jpg_750x200_a2dcb0a4.jpg'}
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  //把option小蓝点变成小白点
  .wrapper >>> .swiper-pagination-bullet-active
    background : #fff
  //实现图片宽高自适应比
  .wrapper
    background : #eee
    width : 100%
    height : 0
    padding-bottom : 26.67%
    .swiper-img
      width : 100%
</style>
