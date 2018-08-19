import Vue from 'vue';

import Moor from './switch/Moor.vue';
import { MoorOptions } from '../typings/index';
import MoorRouter from './switch/MoorRouter';

interface Props {
  onevalue: { default: string };
  twovalue: { default: string };
  threevalue: { default: string };
  [key: string]: any;
}


const install = (vue: typeof Vue, options?: MoorOptions) => {
  if (options) {
    const componentProps = new Moor().$options.props as Props;

    componentProps.onevalue.default = options.onevalue;
    componentProps.twovalue.default = options.twovalue;
    componentProps.threevalue.default = options.onevalue;
  }

  vue.component('moor', Moor);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { Moor, MoorRouter };
export default { install };
