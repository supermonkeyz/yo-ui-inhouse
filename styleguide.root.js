import Device from './components/_util/device';
export default function(previewComponent) {
  Device.init();
  return {
    render(createElement) {
      return createElement(previewComponent);
    }
  };
}
