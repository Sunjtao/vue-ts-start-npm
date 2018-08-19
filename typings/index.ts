import Vue from 'vue';

interface MoorOptions {
  onevalue: string;
  twovalue: string;
  threevalue: string;
}

declare function install(vue: typeof Vue, options?: MoorOptions): void;
declare global {
  interface Window {
    Vue: typeof Vue;
  }
}

declare class Moor extends Vue {}
declare const _default: {
  install: typeof install;
};

export { Moor, MoorOptions };

export default _default;
