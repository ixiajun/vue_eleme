<template lang="html">
  <div class="food" v-show="showFlag">

  </div>
</template>

<script>
export default {
  data () {
    return {
      showFlag:false
    }
  },
  props:{
    food:{
      type:Object
    }
  },
  computed: {},
  mounted () {},
  methods: {
    show() {
      this.showFlag = true;
    }
  },
  created() {
    // this.$emit('food',this.show());
  },
  components: {}
}
</script>

<style lang="scss">
  .food {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 48px;
    z-index: 30;
    width: 100%;
    background-color: #fff;

  }
</style>
