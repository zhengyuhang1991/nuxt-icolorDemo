<template>
  <div class="case container">
    <a href="javascript:;"
       class="backPrevPage"
       @click="backPrevPage"
    >← Back Prev Page</a>
    <div class="case-from">当前案例来源：{{$store.state.city.name}}</div>

    <div class="case-details" v-if="caseData">
      <a target="_blank" :href="caseData.mainImageList[0].targetURL">
        <img v-lazy="retImageUrl(caseData.imgUrl)" class="case-banner">
      </a>
      <div class="case-infos">
        <h2 class="name">{{caseData.juZhuangStyle}} - {{caseData.name}}</h2>
        <div class="style">案例风格：{{caseData.decorationStyle}}</div>
        <div class="price">装修价格：￥{{caseData.totalPrice}}</div>
        <div class="desc">案例描述：{{caseData.description}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "case-code",
    data: () => ({
      caseData: null
    }),
    created() {
      this.getCaseCode()
    },
    methods: {
      // 获取案例code
      getCaseCode() {
        const {code} = this.$route.params
        this.getCaseDetails(code)
      },
      // 根据案例code获取案例数据
      getCaseDetails(code) {
        const url = `/api/v2/icolor/wxma/experience-halls/${code}`
        this.$axios({url})
          .then(res => {
            this.caseData = res
          })
      },
      // 拼接完整图片链接
      retImageUrl(url) {
        const host = `https://www.icolor.com.cn`
        return `${host}${url}`
      },
      // 返回上一页
      backPrevPage() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/stylus/variable"

  .backPrevPage {
    font-size: $font-title-normal
    color: $color-main
  }

  .case {
    &-from {
      margin-top: 20px
      font-size: $font-text-normal
      color: $color-text
    }
    &-details {
      margin: 30px auto 0
      width: 500px
    }
    &-banner {
      display: block
      width: 100%
    }
    &-infos {
      margin-top: 30px
      padding-bottom: 30px
      .name {
        font-size: $font-title-small
        font-weight: 700
      }
      .style, .price, .desc {
        margin-top: 10px
      }
    }
  }
</style>
