<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sellers">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import header from './components/header/header'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import sellers from './components/sellers/sellers'

const ERR_OK = 0;

export default {
  name: 'app',
  data() {
    return {
        seller:{}
    }
  },
  created(){
    this.$http.get('/api/seller').then((response) => {
      response = response.body;

      if(response.errno === ERR_OK) {
        this.seller = response.data;
        // console.log(this.seller)
      }
    })
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="scss">
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    .tab-item {
      flex: 1;
      text-align: center;
      & > a {
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);
        &.active {
          color: rgb(240, 20, 20);
        }
      }
    }

  }
</style>
