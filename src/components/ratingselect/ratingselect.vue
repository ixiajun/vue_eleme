<template lang="html">
  <div class="ratingselect">
    <div class="rating-type">
      <span @click="select(2,$event)" class="block positive" :class="{'active':selectType===2}">{{ desc.all }}<span class="count">{{ratings.length}}</span></span>

      <span @click="select(0,$event)" :class="{'active':selectType===0}" class="block positive">{{ desc.positive }}<span class="count">{{positives.length}}</span></span>

      <span @click="select(1,$event)" class="block nagtive" :class="{'active':selectType===1}">{{ desc.nagtive }}<span class="count">{{nagtives.length}}</span></span>
    </div>
    <div @click="toggleContent($event)" class="switch" :class="{'on':onlyContent}">
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
const POSITIVE = 0;
const NAGTIVE = 1;
const ALL = 2;

export default {
  data () {
    return {

    }
  },
  props:{
    ratings:{
      type:Array,
      default() {
        return [];
      }
    },
    selectType:{
      type: Number,
      default: ALL
    },
    onlyContent:{
      type:Boolean,
      default:false
    },
    desc:{
      type: Object,
      default() {
        return {
          all: '全部',
          positive: '满意',
          nagtive: '不满意'
        }
      }
    }
  },
  computed: {
    positives() {
      return this.ratings.filter((rating) => {
        return rating.rateType === POSITIVE;
      })
    },
    nagtives() {
      return this.ratings.filter((rating) => {
        return rating.rateType === NAGTIVE;
      })
    }
  },
  mounted () {},
  methods: {
    select(type, event) {
      if(!event._constructed) {
        return;
      }
      // this.selectType = type;
      this.$emit('increment','selectType',type)
    },
    toggleContent(event) {
      if(!event._constructed) {
        return;
      }
      this.onlyContent = !this.onlyContent;
      this.$emit('increment', 'onlyContent', this.onlyContent);
    }
  },
  components: {}
}
</script>

<style lang="scss">
  .ratingselect {
    .rating-type {
      padding: 18px 0;
      margin: 0 18px;
      font-size: 0;
      border-bottom: 1px solid rgba(7, 17, 27,0.1);
      .block {
        font-size: 12px;
        display: inline-block;
        padding: 8px 12px;
        margin-right: 8px;
        line-height: 16px;
        border-radius: 1px;
        color: rgb(77, 85, 93);
        &.active {
          color: #fff;
        }
        .count {
          font-size: 8px;
          margin-left: 2px;
        }
        &.positive {
          background-color: rgba(0,160,220,0.2);
          &.active {
            background-color: rgb(0,160,220);
          }
        }
        &.nagtive {
          background-color: rgba(77,85,93,0.2);
          &.active {
            background-color: rgb(77,85,93);
          }
        }
      }
    }
    .switch {
      padding: 12px 18px;
      line-height: 24px;
      border-bottom: 1px solid rgba(7,17,27,0.1);
      color: rgb(147,153,159);
      font-size: 0;
      &.on {
        .icon-check_circle {
          color: #00c850;
        }
      }
      .icon-check_circle {
        font-size: 24px;
        margin-right: 4px;
      }
      .text {
        font-size: 12px;
        vertical-align: top;
      }
    }
  }
</style>
