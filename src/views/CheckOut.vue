<template>
  <div class="container-fluid text-center">
    <p class="fw-bold">請先至櫃台結帳後操作</p>
    <img src="@/assets/image/checkout.jpg" alt="" class="checkout-image" @click="goOutput">
    <p class="fw-bold">付款金額：{{ totalAmount }}</p>
  </div>
</template>

<style lang="scss" scoped>
  .checkout-image {
    height: 630px;
    width: 896px;
    object-fit: cover;
  }
</style>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const totalAmount = 20;

    const goOutput = () => {
      router.push('/Output');
    };

    return {
      totalAmount,
      goOutput,
    };
  },
};
</script>
