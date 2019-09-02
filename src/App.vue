<template>
  <div id="app">
    <div class="path" :class="$style.title">测试</div>
    <yo-spinner type="Android" color="red"></yo-spinner>
    <div v-for="(size, index) in sizes" :key="index">
      <div
        v-for="(sort, index) in sorts"
        :key="index"
        style="margin-bottom: 10px"
      >
        <yo-button
          :kind="kind"
          :sort="sort"
          :size="size"
          v-for="(kind, index) in kinds"
          :key="index"
          hairline
          :class="$style.btn"
        >
          {{ kind }}
        </yo-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      kinds: ['default', 'primary', 'secondary', 'success', 'danger'],
      sorts: ['line', 'flat'],
      sizes: ['s', 'm', 'l']
    };
  },
  mounted() {
    console.log('x');
  }
};
</script>

<style lang="postcss" module>
.title {
  color: black;
  font-size: 32px;
  border-bottom: 1px;
  font-family: system-ui;
}

.btn {
  margin-right: 8px;
}
</style>
