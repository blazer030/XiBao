<template>
  <div class="container-fluid text-center">
    <div class="option-list row row-cols-4 gy-3">
      <div class="col" v-for="(option, index) in optionList" :key="index">
        <div class="option">
          <div class="fw-bold">
            {{ option.capacity }} c.c
          </div>
          <hr />
          <div class="fw-bold text-danger">
            {{ option.price }}元
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const optionList = [{
      capacity: 125,
      price: 5,
    }, {
      capacity: 500,
      price: 20,
    }, {
      capacity: 1000,
      price: 40,
    }, {
      capacity: 1500,
      price: 60,
    }, {
      capacity: 2000,
      price: 80,
    }, {
      capacity: 2500,
      price: 100,
    }, {
      capacity: 3000,
      price: 120,
    }, {
      capacity: 4000,
      price: 160,
    }];

    return {
      optionList,
    };
  },
};
</script>

<style lang="scss" scoped>
  .option {
    &-list {
      margin: auto;
      padding-top: 12px;
      width: 1565px;
    }

    width: 380px;
    padding: 65px 0px;
    border: 6px solid rgba(112, 112, 112, 0.3);
    border-radius: 74px;

    hr {
      width: 240px;
      margin: 10px auto;
      border: 2px solid #707070;
      opacity: 1;
    }
  }
</style>
