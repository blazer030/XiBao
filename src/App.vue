<template>
  <header class="header bg-primary text-white text-center">
    {{ header }}
  </header>
  <img src="@/assets/image/logo.jpg" alt="" class="logo rounded-circle">
  <router-view/>
  <footer class="footer fixed-bottom bg-blue text-white d-flex justify-content-between">
    <div>
      <span class="me-4">{{ residualCapacity }}/{{ totalCapacity }}</span>
      <span>發票剩餘 {{ invoiceQuantity }} 張</span>
    </div>
    <div>
      {{ formattedDate }}
    </div>
  </footer>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import moment from 'moment';

export default {
  setup() {
    const store = useStore();
    const residualCapacity = 150.75;
    const totalCapacity = 200;
    const invoiceQuantity = 400;
    const currentDate = ref(new Date());

    setInterval(() => {
      currentDate.value = new Date();
    }, 1000);

    return {
      header: computed(() => store.state.headerTitle),
      residualCapacity,
      totalCapacity,
      invoiceQuantity,
      formattedDate: computed(() => moment(currentDate.value).format('YYYY/MM/DD HH:mm:ss')),
    };
  },
};
</script>

<style lang="scss">
@import './assets/style/all';

.header {
  padding: 12px 0px;
}

.footer {
  font-size: 2rem;
  position: fixed;
  bottom: 0px;
  padding: 6px 16px;
}

.logo {
  position: fixed;
  top: 12px;
  left: 26px;
  width: 171px;
  height: 171px;
  border: 1px solid #707070;
}
</style>
