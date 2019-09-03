class Device {
  constructor(config) {
    this.option = {
      preserve: false,
      root: 'root',
      frame: 375,
      ratio: 16,
      maxWidth: 480
    };
    this.option = Object.assign(this.option, config);
    this.setDataset(this.os.os, this.dpr);
    if (this.option.preserve) this.attrs(this.setFontSize);
    this.setViewport();
  }
  get root() {
    return this.option.root === 'root'
      ? document.documentElement
      : document.querySelector(this.option.root);
  }
  get screen() {
    return {
      width: parseInt(this.root.clientWidth, 10),
      height: parseInt(this.root.clientHeight, 10)
    };
  }
  get os() {
    const ua = navigator.userAgent;
    const isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    const isAndroid = ua.indexOf('Android') > -1;
    let os = '';
    let version = '';
    if (isiOS) {
      os = 'iOS';
      version = ua.match(/OS (\d+)_(\d+)_?(\d+)?/);
    } else if (isAndroid) {
      os = 'Adr';
      version = ua.match(/Android\s([0-9]*)/);
    }
    version = parseInt(version[1], 10);
    return {
      os,
      version
    };
  }
  get dpr() {
    return window.devicePixelRatio <= 3
      ? parseInt(window.devicePixelRatio, 10)
      : 3;
  }
  get fontSize() {
    const width =
      this.screen.width > this.option.maxWidth
        ? this.option.maxWidth
        : this.screen.width;
    return (width / this.option.frame) * this.option.ratio;
  }
  setDataset(os, dpr) {
    this.root.dataset.dpr = os + '@' + dpr;
  }
  setFontSize() {
    this.root.style.fontSize = this.fontSize + 'px';
  }
  attrs(fn) {
    fn.call(this);
    const setting = () => {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(
        () => {
          fn.call(this);
        },
        300,
        false
      );
    };
    window.addEventListener('resize', setting);
  }
  setViewport() {
    let viewport = document.querySelector('meta[name="viewport"]');
    if (viewport && this.os.os === 'iOS') {
      viewport.content += ',viewport-fit=cover';
    }
  }
}

export default Device;
