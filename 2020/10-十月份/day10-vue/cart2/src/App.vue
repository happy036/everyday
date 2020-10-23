<template>
  <div id="app">
    <div class="container">
      <div class="cart">
        <cartTitle :name="uname"></cartTitle>
        <cartList :list="list" @del="delcart" @changeNum="changenum"></cartList>
        <cartTotal :list="list"></cartTotal>
      </div>
    </div>
  </div>
</template>

<script>
import cartList from "./components/cartList";
import cartTitle from "./components/cartTitle";
import cartTotal from "./components/cartTotal";
export default {
  data() {
    return {
      uname: "张三",
      list: [
        {
          id: 1,
          name: "TCL彩电",
          price: 1000,
          num: 1,
          img: require("./assets/img/a.jpg")
        },
        {
          id: 2,
          name: "机顶盒",
          price: 1000,
          num: 1,
          img: require("./assets/img/b.jpg")
        },
        {
          id: 3,
          name: "海尔冰箱",
          price: 1000,
          num: 1,
          img: require("./assets/img/c.jpg")
        },
        {
          id: 4,
          name: "小米手机",
          price: 1000,
          num: 1,
          img: require("./assets/img/d.jpg")
        },
        {
          id: 5,
          name: "PPTV电视",
          price: 1000,
          num: 2,
          img: require("./assets/img/e.jpg")
        }
      ]
    };
  },
  methods: {
    delcart(id) {
      let index = this.list.findIndex(item => item.id == id);
      this.list.splice(index, 1);
    },
    changenum(val) {
      if (val.type == "change") {
        this.list.some(item => {
          if (item.id == val.id) {
            item.num = val.num;
            return true;
          }
        });
      } else if (val.type == "add") {
        this.list.some(item => {
          if (item.id == val.id) {
            item.num++;
            item.num = item.num < 0 ? 0 : item.num;
            // console.log(111)
            return true;
          }
        });
      } else if (val.type == "sub") {
        this.list.some(item => {
          if (item.id == val.id) {
            item.num--;
            item.num = item.num < 0 ? 0 : item.num;
            return true;
          }
          // return true
        });
      }
    }
  },
  components: {
    cartList: cartList,
    cartTitle: cartTitle,
    cartTotal: cartTotal
  }
};
</script>

<style>
.container .cart {
  width: 300px;
  /*background-color: lightgreen;*/
  margin: auto;
}

.container .title {
  background-color: lightblue;
  height: 40px;
  line-height: 40px;
  text-align: center;
  /*color: #fff;*/
}

.container .total {
  background-color: #ffce46;
  height: 50px;
  line-height: 50px;
  text-align: right;
}

.container .total button {
  margin: 0 10px;
  background-color: #dc4c40;
  height: 35px;
  width: 80px;
  border: 0;
}

.container .total span {
  color: red;
  font-weight: bold;
}

.container .item {
  height: 55px;
  line-height: 55px;
  position: relative;
  border-top: 1px solid #add8e6;
}

.container .item img {
  width: 45px;
  height: 45px;
  margin: 5px;
}

.container .item .name {
  position: absolute;
  width: 90px;
  top: 0;
  left: 55px;
  font-size: 16px;
}

.container .item .change {
  width: 100px;
  position: absolute;
  top: 0;
  right: 50px;
}

.container .item .change a {
  font-size: 20px;
  width: 30px;
  text-decoration: none;
  background-color: lightgray;
  vertical-align: middle;
}

.container .item .change .num {
  width: 40px;
  height: 25px;
}

.container .item .del {
  position: absolute;
  top: 0;
  right: 0px;
  width: 40px;
  text-align: center;
  font-size: 40px;
  cursor: pointer;
  color: red;
}

.container .item .del:hover {
  background-color: orange;
}
</style>