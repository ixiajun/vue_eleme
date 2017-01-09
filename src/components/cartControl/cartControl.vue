<template lang="html">
  <div class="cartControl">
    <transition name="move">
      <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click="removeCart($event)"></div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{ food.count }}</div>
    <div class="cart-add icon-add_circle" @click="addCart($event)"></div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  data () {
    return {}
  },
  props:{
    food:{
      type: Object
    }
  },
  created(){
    // console.log(this.food)
  },
  computed: {},
  mounted () {},
  methods: {
    addCart(event) {
      if(!event._constructed) {
        return;
      }
      if(!this.food.count) {
        Vue.set(this.food,'count' ,1)
      } else {
        this.food.count++;
      }
      this.$root.eventHub.$emit('cart.add', event.target);
    },
    removeCart(event) {
      if(!event._constructed) {
        return;
      }
      if(this.food.count) {
        this.food.count--;
      }
    }
  },
  components: {}
}
</script>

<style lang="scss">
  .cartControl {
    font-size: 0;
    .cart-decrease, .cart-add {
      display: inline-block;
      padding: 6px;
      line-height: 24px;
      font-size: 24px;
      color: rgb(0, 160, 220);
    }
    .cart-count {
      vertical-align: top;
      width: 12px;
      padding-top: 6px;
      line-height: 24px;
      text-align: center;
      font-size: 10px;
      color: rgb(147, 153, 159);
      display: inline-block;
    }
    .move-enter-active, .move-leave-active {
      transform: translate3d(0,0,0);
      transition: all .4s linear;
      /*transform: rotate(180deg);*/
    }
    .move-enter, .move-leave-active {
      transform: translate3d(24px,0,0);
      opacity: 0;
      /*transform: rotate(0);*/
    }
  }
</style>
