<template lang="html">
  <component :is="type" :class="$style.main" :style="spinnerStyle"></component>
</template>

<script>
import iOS from './assets/iOS.svg';
import Android from './assets/Android.svg';
import Windows from './assets/Windows.svg';

export default {
  name: 'yo-spinner',
  components: { iOS, Android, Windows },
  props: {
    /**
     * The type of the spinner.
     * `Options: iOS, Android, Windows`
     */
    type: {
      type: String,
      default: 'iOS'
    },
    /**
     * The size of the spinner.
     * `Options: css units value`
     */
    size: String,
    /**
     * The color of the spinner.
     * `Options: css color value`
     */
    color: String
  },
  computed: {
    spinnerStyle() {
      return {
        color: this.color,
        fontSize: this.size
      };
    }
  }
};
</script>

<style lang="postcss" module>
.main {
  width: 1em;
  height: 1em;
}
</style>

<style for="Android">
@keyframes Android-_-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes Android-_-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
</style>

<style for="Windows">
@keyframes Windows-_-rotate {
  0% {
    transform: rotate(225deg);
    opacity: 1;
    animation-timing-function: ease-out;
  }

  7% {
    transform: rotate(345deg);
    animation-timing-function: linear;
  }

  30% {
    transform: rotate(455deg);
    animation-timing-function: ease-in-out;
  }

  39% {
    transform: rotate(690deg);
    animation-timing-function: linear;
  }

  60% {
    transform: rotate(815deg);
    opacity: 1;
    animation-timing-function: ease-out;
  }

  75% {
    transform: rotate(945deg);
    animation-timing-function: ease-out;
  }

  76% {
    transform: rotate(945deg);
    opacity: 0;
  }

  100% {
    transform: rotate(945deg);
    opacity: 0;
  }
}
</style>
