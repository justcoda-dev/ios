<template>
    <div class="wrapper">
      <input v-model="text" type="text" placeholder="search" class="search">
      </div>
</template>

<script>
export default {
  name: "search",
  props: {
someArray: {
  type: Array
}
  },
  data() {
    return {
      text: '',
    }
  },
  computed: {
    points() {
      let text = this.text
      return this.someArray.map((v) => v.data.filter(function (product) {
        return Object.keys(product).some(function (key) {
          return String(product[key]).toLowerCase().indexOf(text) > -1
        })
      }))[0]
    }
  },
}
</script>

<style lang="scss" scoped>
    .search {
      border: none;
      padding: 5px;
      margin: 10px;
      width: 350px;
      height: 30px;
      border-radius: 8px;
      color: #fff;
      background: #171717;

      text-indent: 35px;
      text-align: left;
      font-size: 20px;
      &::placeholder {

        background-image: url('http://localhost:5000/placeholder/loupe.svg');
        background-size: 20px;
        background-repeat: no-repeat;
        opacity: .5;
      }
    }


</style>