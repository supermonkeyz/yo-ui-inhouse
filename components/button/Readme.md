## Basic use

```vue
<template>
<div>
  <p>
    <yo-button class="button" v-for="(kind, index) in kinds" sort="line" :kind="kind" :key="index">
      {{ kind }}
    </yo-button>
  </p>
  <p>
    <yo-button class="button" v-for="(kind, index) in kinds" sort="flat" :kind="kind" :key="index">
      {{ kind }}
    </yo-button>
  </p>
  <p>
    <yo-button class="button" v-for="(kind, index) in kinds" sort="simple" :kind="kind" :key="index">
      {{ kind }}
    </yo-button>
  </p>
</div>
</template>

<script>
export default {
  data() {
    return {
      kinds: ['primary', 'secondary', 'success', 'danger', 'default']
    };
  }
};
</script>

<style scoped>
.button{
  margin-right: 10px;
  margin-bottom: 10px;
  vertical-align: top;
}
</style>
```

## Disable

```vue
<template>
<div>
  <p>
    <yo-button class="button" v-for="(kind, index) in kinds" sort="line" :kind="kind" :key="index" disabled>
      {{ kind }}
    </yo-button>
  </p>
  <p>
    <yo-button class="button" v-for="(kind, index) in kinds" sort="flat" :kind="kind" :key="index" disabled>
      {{ kind }}
    </yo-button>
  </p>
</div>
</template>

<script>
export default {
  data() {
    return {
      kinds: ['primary', 'secondary', 'success', 'danger', 'default']
    };
  }
}
</script>

<style scoped>
.button{
  margin-right: 10px;
  margin-bottom: 10px;
  vertical-align: top;
}
</style>
```

## Sizes

```vue
<template>
<div>
  <p>
    <yo-button class="button" v-for="(size, index) in sizes" :size="size" sort="line" kind="primary" :key="index">
      {{ names[size] }}
    </yo-button>
  </p>
</div>
</template>

<script>
export default {
  data() {
    return {
      sizes: ['l', 'm', 's'],
      names: {
        l: 'large',
        m: 'medium',
        s: 'small'
      }
    };
  }
};
</script>

<style scoped>
.button{
  margin-right: 10px;
}
</style>
```

## Corner

```vue
<template>
<div>
  <p>
    <yo-button sort="line" kind="primary" round style="vertical-align: top">
      喜欢
    </yo-button>
    <yo-button sort="flat" kind="primary" round>
      喜欢
    </yo-button>
  </p>
</div>
</template>
```

## Block

```vue
<template>
<div>
  <p>
    <yo-button sort="line" kind="primary" fluid>
      喜欢
    </yo-button>
  </p>
  <p>
    <yo-button sort="line" kind="primary" fluid round>
      喜欢
    </yo-button>
  </p>
</div>
</template>
```

## Mobile hairline

```vue
<template>
<div>
  <p>
    <yo-button sort="line" kind="primary" hairline>
      喜欢
    </yo-button>
    <yo-button sort="line" kind="default" hairline>
      喜欢
    </yo-button>
    <yo-button sort="line" kind="success" hairline round>
      喜欢
    </yo-button>
  </p>
</div>
</template>
```

## Button icon

```vue
<template>
<div>
  <p>
    <yo-button sort="line" kind="primary" icon="https://image.flaticon.com/icons/png/128/148/148836.png">
      喜欢
    </yo-button>
    <yo-button sort="line" kind="primary" size="l" icon="https://image.flaticon.com/icons/png/128/148/148836.png">
      喜欢
    </yo-button>
  </p>
</div>
</template>

<script>
export default {
  data() {
    return {
      sizes: ['l', 'm', 's'],
      names: {
        l: 'large',
        m: 'medium',
        s: 'small'
      }
    };
  }
};
</script>

<style scoped>
.button{
  margin-right: 10px;
}
</style>
```

## Loading

```vue
<template>
<div>
  <p>
    <yo-button loading spinner-type="iOS" sort="flat"></yo-button>
    <yo-button loading spinner-type="Android" sort="flat" round></yo-button>
    <yo-button loading spinner-type="Windows" sort="flat"></yo-button>
  </p>
  <p>
    <yo-button
      sort="line"
      :kind="!followed ? 'primary' : 'default'"
      :loading="loading"
      :disabled="loading"
      @click="follow"
    >
      {{ followed ? '关注' : '加关注' }}
    </yo-button>
  </p>
</div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      followed: false
    };
  },
  methods: {
    follow() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.followed = !this.followed;
      }, 500)
    }
  }
};
</script>

<style scoped>
.button{
  margin-right: 10px;
}
</style>
```