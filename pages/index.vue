<template>
  <section class="home container">
    <!--城市列表-->
    <div class="city-content">
      <h2 class="city-title">城市选择</h2>
      <div class="city-list" v-if="cityList">
        <div class="item"
             v-for="(item, index) in cityList"
             :key="item.code"
             :class="{active: currentCity === index}"
             @click="chooseCity(index)"
        >{{item.name}}
        </div>
      </div>
      <template v-if="cityList">
        <p class="city-current"
        >当前城市数据为：{{$store.state.city.name}}</p>
        <p class="city-current"
        >当前城市code为：{{$store.state.city.code}}</p>
      </template>
      <template v-else>
        <div class="loading-data">
          <img class="gif" src="~assets/images/loading.gif">
        </div>
      </template>
    </div>
    <!--案例列表-->
    <div class="case-content">
      <h2 class="case-title">案例列表</h2>
      <div class="case-list"
           v-if="caseList"
      >
        <div class="item"
             v-for="(item, index) in caseList"
             :key="index"
        >
          <div class="case-left"
               @click="toCaseDetails(item.code)"
          >
            <img v-lazy="retImageUrl(item.imgUrl)" class="case-image">
            <img src="~assets/images/hot.png"
                 class="case-hot"
                 v-if="item.hot"
            >
          </div>
          <div class="case-right">
            <h6 class="name">{{item.juZhuangStyle}} - {{item.name}}</h6>
            <div class="style">案例风格：{{item.decorationStyle}}</div>
            <div class="price">装修价格：￥{{item.totalPrice}}</div>
            <div class="desc">案例描述：{{item.description}}</div>
            <a class="details"
               href="javascript:;"
               @click="toCaseDetails(item.code)"
            >查看案例详情</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'

  export default {
    data: () => ({
      homePageShow: 1,
      cityList: null,
      caseList: null,
      currentCity: 0
    }),
    created() {
      this.getCitysData()
    },
    methods: {
      // 获取当前开通的城市列表数据
      getCitysData() {
        const url = `/api/v2/icolor/wxma/juzhuangsiteconfig`
        this.$axios({url})
          .then(res => {
            this.cityList = res.supportCities
            // 设置默认城市为列表返回的第一个城市
            this.setCityStore()
            this.getCaseList()
          })
      },
      // 获取案例列表数据
      getCaseList() {
        const url = `/api/v2/icolor/wxma/experience-halls`
        const formData = {
          homePageShow: this.homePageShow,
          query: 'kitchen',
          cityCode: this.$store.state.city.code
        }
        this.$axios({url, formData})
          .then(res => {
            this.caseList = res.data
          })
      },
      // 更新vuex中的城市数据
      setCityStore() {
        let name = this.cityList[this.currentCity].name
        let code = this.cityList[this.currentCity].code
        this.$store.dispatch('city/refreshCityInfo', {
          name,
          code
        })
      },
      // 切换城市
      chooseCity(index) {
        // 如果点击的是相同城市则跳出
        if (this.currentCity === index) return
        this.currentCity = index
        // 更新当前选中城市信息
        this.setCityStore()
        // 城市切换后刷新对应城市的案例数据
        this.caseList = null
        this.getCaseList()
      },
      // 拼接完整图片链接
      retImageUrl(url) {
        const host = `https://www.icolor.com.cn`
        return `${host}${url}`
      },
      // 跳转到案例详情页
      toCaseDetails(code) {
        this.$router.push({
          path: `/case/${code}`
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/stylus/variable.styl"

  .city {
    &-content {
      .loading-data {
        width: 50px
        .gif {
          width: 100%
        }
      }
    }
    &-title {
      font-size: $font-title-normal
      font-weight: 500
      color: $color-text
    }
    &-list {
      margin-top: 15px
      .item {
        display: inline-block
        margin-right: 5px
        padding: 5px 10px
        font-size: $font-text-normal
        color: $color-text
        text-align: center
        border: 1px solid $color-disabled
        border-radius: 6px
        vertical-align: top
        cursor: pointer
        &.active {
          color: $color-main
          border-color: $color-main
        }
      }
    }
    &-current {
      margin-top: 5px
      font-size: $font-text-normal
      color: $color-text
    }
  }

  .case {
    &-content {
      margin-top: 20px
    }
    &-title {
      font-size: $font-title-normal
      font-weight: 500
      color: $color-text
    }
    &-list {
      margin-top: 15px
      padding-bottom: 15px
      .item {
        font-size: 0
        transition: all .3s
        &:hover {
          background: rgba(0, 0, 0, .02)
        }
        &:not(:first-of-type) {
          margin-top: 15px
        }
        > div {
          display: inline-block
          vertical-align: middle
        }
      }
    }

    &-left {
      position: relative
      width: 300px
      cursor: pointer
    }
    &-image {
      width: 100%
    }
    &-hot {
      position: absolute
      top: 0
      left: 0
      z-index: 1
      width: 50px
    }

    &-right {
      margin-left: 30px
      font-size: $font-text-normal
      color: $color-text
      .name {
        font-size: $font-title-small
        font-weight: 700
      }
      .style, .price, .desc {
        margin-top: 10px
      }
      .details {
        display: inline-block
        margin-top: 15px
        padding: 5px 10px
        color: #fff
        line-height: 2
        border-radius: 6px
        background: $color-main
      }
    }
  }
</style>

