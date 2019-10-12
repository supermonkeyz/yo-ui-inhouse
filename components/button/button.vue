<template lang="html">
  <button
    :class="[
      $style.main,
      $style[sort] || sort,
      $style[kind] || kind,
      $style[size] || size,
      hairline && $style.hairline,
      round && $style.round,
      fluid && $style.fluid
    ]"
    :style="buttonRaduis()"
    @touchstart="() => {}"
    @click="clickHandle"
  >
    <div :class="$style.inset" :style="buttonRaduis('inset')"></div>
    <span
      :class="[
        $style.wrap,
        vertical && $style.vertical,
        reverse && $style.reverse
      ]"
    >
      <img :src="icon" alt="icon" v-if="icon" :class="$style.icon" />
      <Spinner :type="spinnerType" :class="$style.icon" v-if="loading">
      </Spinner>
      <span :class="$style.content" v-if="$slots.default">
        <!-- @slot default slot -->
        <slot />
      </span>
    </span>
  </button>
</template>

<script>
import Device from '../_util/device';
import cssUnit from '../_util/cssUnit';
import Spinner from '../spinner/spinner';

export default {
  name: 'yo-button',
  components: {
    Spinner
  },
  props: {
    /**
     * The sort for the button.
     * `Options: line, flat, simple`
     */
    sort: {
      type: String,
      default: 'line'
    },
    /**
     * The kind for the button.
     * `Options: primary, secondary, success, danger, default`
     */
    kind: {
      type: String,
      default: 'primary'
    },
    /**
     * The size for the button.
     * `Options: s, m, l`
     */
    size: {
      type: String,
      default: 'm'
    },
    /**
     * The button round corner or not.
     * `Options: true false`
     */
    round: {
      type: Boolean,
      default: false
    },
    /**
     * The button full of container or not.
     * `Options: true false`
     */
    fluid: {
      type: Boolean,
      default: false
    },
    /**
     * Hairline in mobile devices.
     * `Options: true false`
     */
    hairline: {
      type: Boolean,
      default: false
    },
    /**
     * Icon in button.
     */
    icon: {
      type: String,
      default: ''
    },
    /**
     * Content vertical layout in button.
     */
    vertical: {
      type: Boolean,
      default: false
    },
    /**
     * Content reverse layout in button.
     */
    reverse: {
      type: Boolean,
      default: false
    },
    /**
     * Loading status.
     * `Options: true false`
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * Spinner type.
     * `Options: iOS Android Windows`
     */
    spinnerType: {
      type: String,
      default: 'iOS'
    },
    borderRadius: {
      type: [String, Number],
      validator: value => cssUnit(value)
    }
  },
  methods: {
    buttonRaduis(type) {
      if (!this.borderRadius) return null;
      let value;
      const ratio =
        this.sort === 'line' && this.hairline && Device.os.os === 'Adr'
          ? Device.dpr
          : 1;
      const arr = this.borderRadius.match(/[\d.]+|\D+/g);
      if (!isNaN(arr[0])) {
        if (type === 'inset') {
          if (!arr[1] || arr[1] === 'px') {
            value = (this.sort === 'line' ? arr[0] - 1 : arr[0]) + 'px';
          } else {
            value =
              this.sort === 'line'
                ? `calc(${this.borderRadius} - 1px)`
                : this.borderRadius;
          }
        } else {
          value = arr[0] * ratio + (arr[1] || 'px');
        }
      }
      return {
        borderRadius: value
      };
    },
    clickHandle() {
      /**
       * Click event.
       */
      this.$emit('click');
    }
  }
};
</script>

<style lang="postcss" module>
/*button's definition*/
:root {
  --yo-button-border-raduis: 5px;
  --yo-button-round: 36px;
  --yo-button-size: l, m, s;
  --yo-button-padding: 12px 24px, 8px 16px, 6px 12px;
  --yo-button-font-size: 18px, 14px, 12px;
  --yo-button-hover: 0.8;
  --yo-button-disabled: 0.5;
  --yo-button-trans-dur: 0.2s;
  --yo-button-icon-gap: calc(1em * 4 / var(--yo-base-font-size));
}

.main {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: #fff0;
  background-color: transparent;
  outline: 0;
  border: 0;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: var(--yo-button-border-raduis);
  position: relative;
  line-height: 1;

  &:active {
    & .inset {
      opacity: 1;
    }
  }

  &:disabled {
    opacity: var(--yo-button-disabled);
    cursor: not-allowed;
  }

  @media (hover) {
    &:not(:disabled):hover,
    &:focus {
      & .inset {
        opacity: 1;
      }
    }
  }

  &.round {
    border-radius: var(--yo-button-round);
    @mixin hairline-border-radius var(--yo-button-round);
    & .inset {
      border-radius: var(--yo-button-round);
    }
  }

  &.fluid {
    width: 100%;
  }
}

.inset {
  position: absolute;
  z-index: var(--yo-index-flow);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: all ease-in-out var(--yo-button-trans-dur);
  opacity: 0;
  pointer-events: none;

  .line & {
    border-radius: calc(var(--yo-button-border-raduis) - 1px);
  }

  .flat & {
    border-radius: var(--yo-button-border-raduis);
  }
}

.wrap {
  position: relative;
  z-index: var(--yo-index-flow);
  pointer-events: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;

  &.vertical {
    flex-direction: column;

    &.reverse {
      flex-direction: column-reverse;
    }
  }

  &.reverse {
    flex-direction: row-reverse;
  }
}

/*button sort="line" kinds css loop*/
.line {
  /*button border support hairline*/
  /*mixin from _style/mixins.css*/
  @mixin hairline border, solid;
  @mixin hairline-border-radius var(--yo-button-border-raduis);
  /* color from ./_style/const.css */
  @each $val in (var(--yo-general-color-schemes)) {
    &.$(val) {
      color: var(--yo-color-$(val));
      border-color: var(--yo-color-$(val)-border);
      @mixin hairline-border-color var(--yo-color-$(val)-border);

      & .inset {
        background: var(--yo-color-$(val)-hover);
      }
    }
  }
}

/*button sort="flat" kinds css loop*/
.flat {
  color: var(--yo-color-light);
  & .wrap {
    /*button line is larger than flat line's border width, just fix it inset*/
    @mixin hairline-iOS border, solid, transparent;
  }
  /* color from ./_style/const.css */
  @each $val in (var(--yo-general-color-schemes)) {
    &.$(val) {
      background: var(--yo-general-$(val));

      & .inset {
        background: var(--yo-general-$(val)-hover);
      }
    }
  }
}

.simple {
  &:hover {
    opacity: var(--yo-button-hover);
  }
  @each $val in (var(--yo-general-color-schemes)) {
    &.$(val) {
      color: var(--yo-color-$(val));
    }
  }
}

/*button sizes css loop*/
@each $size, $padding, $fontSize in (var(--yo-button-size)),
  (var(--yo-button-padding)), (var(--yo-button-font-size))
{
  .$(size) {
    padding: $(padding);
    font-size: $(fontSize);
  }
}

.icon {
  width: 1em;
  height: 1em;
}

.icon + .content {
  margin-left: var(--yo-button-icon-gap);

  .vertical & {
    margin: 0;
    margin-top: var(--yo-button-icon-gap);
  }

  .reverse & {
    margin: 0;
    margin-right: var(--yo-button-icon-gap);
  }

  .vertical.reverse & {
    margin: 0;
    margin-bottom: var(--yo-button-icon-gap);
  }
}
</style>
