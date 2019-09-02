import Vue from 'vue';
import Device from './components/_util/device';
export default function(previewComponent) {
  Vue.prototype.$_yo_device = new Device();
  return {
    render(createElement) {
      return createElement(previewComponent);
    }
  };
}
