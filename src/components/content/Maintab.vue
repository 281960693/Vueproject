<template>
  <tabbar class="tabbar">
    <div class="tabitemclass">
      <tabitem path="/home">
        <template v-slot:icon>
          <img src="../../assets/img/tabbarimg/首页_home.svg" alt="" />
        </template>
        <template v-slot:iconselect>
          <img src="../../assets/img/tabbarimg/首页_1.svg" alt="" />
        </template>
        <template v-slot:text>
          <div>首页</div>
        </template>
      </tabitem>
    </div>
    <div class="tabitemclass">
      <tabitem path="/category">
        <template v-slot:icon>
          <img src="../../assets/img/tabbarimg/全部_all-application.svg" alt="" />
        </template>
        <template v-slot:iconselect>
          <img src="../../assets/img/tabbarimg/全部_1.svg" alt="" />
        </template>
        <template v-slot:text>
          <div>分类</div>
        </template>
      </tabitem>
    </div>
    <div class="tabitemclass">
      <tabitem path="/shopping">
        <template v-slot:icon>
          <img src="../../assets/img/tabbarimg/购物车1_shopping-cart-one.svg" alt="" />
        </template>
        <template v-slot:iconselect>
          <img src="../../assets/img/tabbarimg/购物车1_.svg" alt="" />
        </template>
        <template v-slot:text>
          <div>购物车</div>
        </template>
      </tabitem>
    </div>
    
      <tabitem path="/profile"> 
        <template v-slot:icon>
          <img src="../../assets/img/tabbarimg/用户_user.svg" alt="" />
        </template>
        <template v-slot:iconselect>
          <img src="../../assets/img/tabbarimg/用户_1.svg" alt="" />
        </template>
        <template v-slot:text>
          <div>我的</div>
        </template>
      </tabitem>
   
  </tabbar>
</template>

<script>
import Tabitem from "../common/Tabitem.vue";
import Tabbar from "../common/Tabbar.vue";
export default {
  components: { Tabbar, Tabitem },
};
</script>

<style>
.tabbar{
  display: flex;
  bottom: 0;

}
.tabitemclass{
  flex: 1;
}

</style>