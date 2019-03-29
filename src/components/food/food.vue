<template>
  <transition name="move" @after-leave="afterLeave">
    <div class="food" v-show="visible">
      <cube-scroll ref="scroll">
        <div class="food-content">
          <div class="img-header">
            <img :src="food.image" alt="">
            <div class="back" @click="hide()">
              <span class="icon-arrow_lift"></span>
            </div>
          </div>
          <div class="content">
            <div class="name">{{food.name}}</div>
            <div class="sellCount">
              <span class="count">月售{{food.sellCount}}份</span>
              <span class="rating">好评率{{food.rating}}%</span>
            </div>
            <div class="price">
              <span class="newPrice">￥{{food.price}}</span>
              <span v-show="food.oldPrice" class="oldPrice">￥{{food.oldPrice}}</span>
            </div>
            <div class="cart-control-wrapper">
              <cart-control @add="addFood()" :food="food"></cart-control>
            </div>
            <transition name="fade">
              <div @click.stop="addFirst($event)" class="buy" v-show="!food.count">
                加入购物车
              </div>
            </transition>
          </div>
          <split v-show="food.info"></split>
          <div class="desc" v-show="food.info">
            <div class="title">商品介绍</div>
            <div class="text">{{food.info}}</div>
          </div>
          <split></split>
        </div>
      </cube-scroll>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Split from "../spilt/split"
  import CartControl from "../cart-control/cart-control"

  const EVENT_ADD = 'add'
  export default {
    name: 'food',
    props: {
      food: {
        type: Object
      }
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      show() {
        this.visible = true
        this.$nextTick(()=>{
          this.$refs.scroll.refresh()
        })
      },
      hide() {
        this.visible = false
      },
      afterLeave(el) {
        this.$emit('leave')
      },
      addFirst(event) {
        this.$set(this.food, 'count',1)
        this.$emit(EVENT_ADD,event.target)
      },
      addFood(target) {
        this.$emit(EVENT_ADD,target)
      }
    },
    components: {
      Split,
      CartControl
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/variable.styl"
  @import "../../common/stylus/mixin.styl"

  .food
    position: absolute
    left: 0
    top: 0
    bottom: 48px
    z-index: 30
    width: 100%
    background-color: $color-white
    &.move-enter-active , &.move-leave-active
      transition: all 0.3s linear
    &.move-enter, &.move-leave-active
      transform: translate3d(100%,0,0)
    .img-header
      position: relative
      /*width:100%,height:0达到等比的效果*/
      width: 100%
      height: 0
      padding-top: 100%
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
      .back
        position: absolute
        left: 0
        top: 10px
        .icon-arrow_lift
          display: block
          padding: 10px
          font-size: $fontsize-large-xx
          color: $color-white
    .content
      position: relative
      padding: 18px
      .name
        font-size: 14px
        font-weight: 700
        color: rgb(7,17,27)
        line-height: 14px
        margin-bottom: 8px
      .sellCount
        margin-bottom: 18px
        font-size: 10px
        color: rgb(147,153,159)
        line-height: 10px
        .count
          margin-right: 12px
      .price
        font-weight: 700
        line-height: 24px
        .newPrice
          font-size: 14px
          color: rgb(240,20,20)
          padding-right: 8px
        .oldPrice
          font-size: 10px
          color: rgb(147,153,159)
          text-decoration: line-through
      .cart-control-wrapper
        position: absolute
        right: 12px
        bottom: 12px
      .buy
        position: absolute
        right: 18px
        bottom: 18px
        z-index: 10
        width: 74px
        height: 24px
        background-color: rgb(0,160,220)
        border-radius: 12px
        font-size: 10px
        line-height: 24px
        color: rgb(255,255,255)
        text-align: center
        /*box-sizing: border-box*/
        /*opacity: 1*/
    .desc
      position: relative
      padding: 18px
      .title
        font-size: 14px
        font-weight: 700
        color: rgb(7,17,27)
        line-height: 14px
        margin-bottom: 6px
      .text
        padding: 0 8px
        font-size: 12px
        font-weight: 200
        line-height: 24px
        color: rgb(77,85,93)
</style>
