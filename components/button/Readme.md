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
      kinds: ['primary', 'secondary', 'success', 'danger', 'invert', 'default']
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
      kinds: ['primary', 'secondary', 'success', 'danger', 'invert', 'default']
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
      Like
    </yo-button>
    <yo-button sort="flat" kind="primary" round>
      Like
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
      Like
    </yo-button>
  </p>
  <p>
    <yo-button sort="line" kind="primary" fluid round>
      Like
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
      Like
    </yo-button>
    <yo-button sort="line" kind="default" hairline>
      Like
    </yo-button>
    <yo-button sort="line" kind="success" hairline round>
      Like
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
    <yo-button sort="line" kind="primary" icon="https://image.flaticon.com/icons/svg/291/291212.svg">
      Like
    </yo-button>
    <yo-button sort="line" kind="primary" size="l" icon="https://image.flaticon.com/icons/svg/291/291212.svg">
      Like
    </yo-button>
    <yo-button sort="simple" kind="default" icon="https://image.flaticon.com/icons/svg/126/126495.svg">
      Share
    </yo-button>
    <yo-button sort="simple" kind="default" size="l" icon="https://image.flaticon.com/icons/svg/126/126495.svg">
      Share
    </yo-button>
  </p>
</div>
</template>
```
## Button inside reverse

```vue
<template>
<div>
  <p>
    <yo-button sort="line" kind="default" icon="https://image.flaticon.com/icons/svg/126/126490.svg" reverse>
      More
    </yo-button>
    <yo-button sort="simple" kind="default" icon="https://image.flaticon.com/icons/svg/126/126469.svg" reverse>
      Share
    </yo-button>
  </p>
</div>
</template>
```

## Button inside vertical

```vue
<template>
<div>
  <p>
    <yo-button sort="simple" kind="default" icon="https://image.flaticon.com/icons/svg/126/126469.svg" vertical>
      share
    </yo-button>
    <yo-button sort="simple" kind="default" icon="https://image.flaticon.com/icons/svg/126/126469.svg" vertical reverse>
      share
    </yo-button>
    <yo-button sort="simple" kind="default" size="l" icon="https://image.flaticon.com/icons/svg/126/126469.svg" vertical>
      share
    </yo-button>
  </p>
</div>
</template>
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
      {{ followed ? 'Following' : 'Follow' }}
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