<template>

  <div class="category inline-block">
    
    <div v-for="(item, index) in lists" :key="index">
      <div
        class="title"
        :ref="'Card_' + index"
        @mouseover="showCard(index)"
        @mouseleave="hiddenCard(index)"
      >
        {{ item.title }}
      </div>
      <div
        class="subCard"
        :ref="'subCard_' + index"
        @mouseover="showCard(index)"
        @mouseleave="hiddenCard(index)"
      >
        <div v-for="(element, inx) in item.childrens" :key="inx">
          <div class="sub">
            <div>
              <div class="subTitle">
                {{ element.title }}
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import lists from './category.config'
export default {
  name: 'Category',
  data() {
    return {
      lists
    };
  },
  methods: {
    showCard(index) {
      // console.log('显示的是 ' + index);
      this.$refs['subCard_' + index][0].classList.add('active');
      this.$refs['Card_' + index][0].classList.add('active');
    },
    hiddenCard(index) {
      // console.log('隐藏的是 ' + index);
      this.$refs['subCard_' + index][0].classList.remove('active');
      this.$refs['Card_' + index][0].classList.remove('active');
    },
  },
};
</script>

<style scoped>
.category {
  box-sizing: border-box;
  width: 190px;
  height: 470px;
  background: rgb(224, 220, 220);
  position: relative;
  padding: 50px 0;
  top: 0;
  left: 0;
  font-size: 25px;
}


.category .title {
  width: 100%;
  padding: 2px 18px;
  padding-left: 25px;
}

.subCard {
  display: none;
  position: absolute;
  top: 0;
  left: 190px;
  z-index: 1000;
  width: 600px;
  height: 470px;
  background: #fff;
  box-shadow: #bbb 0px 0px 10px;
}

.title.active {
  display: block;
  background: #eee;
}

.active {
  display: block;
}

.title_active {
  color: rgb(4, 0, 255);
  background: #d9d9d9;
}

.subCard {
  padding: 10px 0;
}

.sub {
  display: flex;
  margin: 12px 0;
}

.subTitle {
  font-size: 50px;
  color: rgb(2, 154, 201);
  font-weight: 600;
  width: 1000px;
  text-align: left;
}


</style>