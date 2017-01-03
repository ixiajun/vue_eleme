<template lang="html">
  <div class="goods">
    <div class="menu-wrapper">

    </div>
    <div class="foods-wrapper">

    </div>
  </div>
</template>

<script>
const ERR_OK = 0;
export default {
  data () {
    return {}
  },
  created() {
    this.$http.get('api/goods').then((response) => {
      response = response.body;
      if(response.errno === ERR_OK) {
        this.goods = response.data;
        console.log(this.goods)
      }
    })
  },
  props:{
    seller:{
      type: Object
    }
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="scss">
  .goods {
    position: absolute;
    display: flex;
    overflow: hidden;
    top: 174px;
    bottom: 46px;
    width: 100%;
    .menu-wrapper {
      background-color: #f3f5f7;
      flex: 0 0 80px;
      width: 80px;
    }
    .foods-wrapper {
      flex: 1;
    }
  }
</style>
