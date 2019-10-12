const device = {
  option: {
    preserve: false,
    frame: 375,
    ratio: 16,
    maxWidth: 480
  },
  root: document.documentElement,
  get screen() {
    return {
      width: parseInt(this.root.clientWidth, 10),
      height: parseInt(this.root.clientHeight, 10)
    };
  },
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
    version = version && parseInt(version[1], 10);
    return {
      os,
      version
    };
  },
  get dpr() {
    return window.devicePixelRatio <= 3
      ? parseInt(window.devicePixelRatio, 10)
      : 3;
  },
  get fontSize() {
    const width =
      this.screen.width > this.option.maxWidth
        ? this.option.maxWidth
        : this.screen.width;
    return (width / this.option.frame) * this.option.ratio;
  },
  setDataset(os, dpr) {
    this.root.dataset.dpr = os + '@' + dpr;
  },
  setFontSize() {
    this.root.style.fontSize = this.fontSize + 'px';
  },
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
  },
  init(config) {
    this.option = Object.assign(this.option, config);
    this.setDataset(this.os.os, this.dpr);
    if (this.option.preserve) this.attrs(this.setFontSize);
  }
};

export default device;
