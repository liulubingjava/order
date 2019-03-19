<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
  </div>
</template>

<script type="text/ecmascript-6">
  import vHeader from './components/v-header/v-header'
  import { getSeller } from "./api";

  export default {
    name: 'app',
    data() {
      return {
        seller: {}
      }
    },
    created() {
      this._getSeller();
    },
    methods: {
      _getSeller() {
        // 用function方法时就得注意this,that,用this识别不出
        // var that=this
        // getSeller().then(function (seller) {
        //   that.seller = seller
        // })
        getSeller().then((seller)=>{
          this.seller = seller
        })
      },
    },
    components: {
      vHeader
    }
  }
</script>
<style lang="stylus" scoped>

</style>
