class WaittingExecut {
  constructor(options) {
    this.callBack = options.callBack;
    this.waitTime = options.waitTime;
    this.init();
  }

  init() {
    this.waitting = setTimeout(() => {
      this.callBack();
      this.doneFlag = true;
    }, this.waitTime);
  }

  execut() {
    if (!this.doneFlag) {
      this.callBack();
      clearTimeout(this.waitting);
      this.doneFlag = true;
    }
  }

  abort() {
    if (!this.doneFlag) {
      clearTimeout(this.waitting);
      this.doneFlag = true;
    }
  }

  reset() {
    if (!this.doneFlag) {
      clearTimeout(this.waitting);
    }
    this.doneFlag = false;
    this.init();
  }

  refresh(callBack, waitTime) {
    this.abort();
    this.callBack = callBack;
    this.waitTime = waitTime;
    this.init();
  }
}

export default WaittingExecut;