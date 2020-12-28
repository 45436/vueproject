<template>
  <div id="app">
    <div class="content">
      <el-row type="flex" align="middle" class="row">
        <el-col :span="4">
         
        </el-col>
        <el-col :span="20">
          <!-- 搜索框第一行 -->
          <el-row>
            <el-col :span="12" :push="1">
              <el-row>
                <el-col>
                  <div style="margin-top: 4px">
                    <el-autocomplete
                      v-model="searchData"
                      :fetch-suggestions="querySearch"
                      placeholder="请输入商品信息"
                      :trigger-on-focus="true"
                      @select="handleSelect"
                      style="display: block">
                      <el-button
                        slot="append"
                        icon="el-icon-search"
                      ></el-button>
                    </el-autocomplete>
                  </div>
                </el-col>
              </el-row>
             
            </el-col>
            <!-- 购物车 -->
            <el-col :span="4" :push="2" style="margin-top: 2px">
              <router-link to="/PC/cart">
                <el-badge :value="getCartsLength" :max="99" class="item">
                  <el-button icon="el-icon-shopping-cart-full" size="medium">
                    我的购物车</el-button
                  >
                </el-badge>
              </router-link>
            </el-col>
            <!-- /购物车 -->
          </el-row>
          <!-- /搜索栏第一行 -->
          <!-- 搜索栏第二行 -->
          <el-row class="searchList" :gutter="8">
            <el-col v-for="(item, index) in lists" :key="index" :span="2">
              <el-link :underline="false">
                {{ item }}
              </el-link>
            </el-col>
          </el-row>
          <!-- /搜索栏第二行 -->
        </el-col>
      </el-row>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'Search',
  data() {
    return {
      searchData: '',
      restaurants: [],
      lists: [
        '全部分类',
        '首页',
        '闪购',
        '生鲜',
        '团购',
        '全球购',
        
      ],
    };
  },
  computed: {
    getCartsLength() {
      if (this.$store.state.userInfo === null) {
        return 0;
      } else {
        return this.$store.state.userInfo.carts.length || 0;
      }
    },
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        let patt = new RegExp(queryString.toLowerCase());
        // console.log (patt);
        // console.log (queryString.toLowerCase());
        return patt.test(restaurant.value.toLowerCase());
      };
    },
    
    handleSelect(item) {
      console.log(item);
      
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
};
</script>

<style scoped>
#app {
  background-color: #fff;
  height: 150px;
  box-shadow: 0 4px 4px rgb(228, 12, 12);
}

.content {
  width: 2000px;
  height: 100%;
  margin: 0 auto;
}

.row {
  height: 100%;
}

.searchList {
  position: relative;
  top: 38px;
  left:0px;
}

.searchList .el-link {
  font-size: 16px;
}
</style>