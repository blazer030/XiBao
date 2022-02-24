<template>
  <div class="container-fluid text-center">
    <p class="fw-bold">{{ message }}</p>
    <div class="btn-block d-flex justify-content-center align-items-end">
      <div>
        <button
          class="btn btn-success text-white output-btn"
          v-if="startStatus == 0"
          @click="startOutput"
        >開始添加</button>
      </div>
      <div>
        <button
          class="btn btn-danger output-btn"
          v-if="startStatus == 1"
          @click="pauseOutput"
        >暫停</button>
      </div>
    </div>
    <p class="fw-bold">剩餘可添加量：{{ capacity }} c.c</p>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import moment from 'moment';

export default {
  setup() {
    const message = ref('請對準添加口後按下開始');
    const capacity = ref(500);
    const operateTime = ref(300);

    const startStatus = ref(0);
    let output = null;
    let timer = null;

    const startOutput = () => {
      startStatus.value = 1;

      output = setInterval(() => {
        capacity.value -= 50;
      }, 1000);

      if (!timer) {
        timer = setInterval(() => {
          operateTime.value -= 1;
          message.value = `${moment.utc(moment.duration(operateTime.value, 'seconds').asMilliseconds()).format('m分s秒')} 後沒有動作將會自動歸零`;
        }, 1000);
      }
    };

    const pauseOutput = () => {
      startStatus.value = 0;
      clearInterval(output);
      output = null;
    };

    watch([capacity, operateTime], ([newCapacity, newOperateTime]) => {
      if (newCapacity === 0 || newOperateTime === 0) {
        message.value = '添加完成';
        startStatus.value = 2;
        if (output) {
          clearInterval(output);
          output = null;
        }
        if (timer) {
          clearInterval(timer);
          timer = null;
        }
      }
    });

    return {
      message,
      capacity,
      startStatus,
      startOutput,
      pauseOutput,
    };
  },
};
</script>

<style lang="scss" scoped>
  .btn-block {
    height: 630px;
  }

  .output-btn {
    width: 530px;
    font-size: 104px;
    border: 3px solid #707070;
    border-radius: 41px;
  }
</style>
