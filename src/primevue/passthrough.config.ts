import type { PassThrough } from '@primevue/core';
import type { PrimeVuePTOptions } from 'primevue/config';

export const CustomPt: PassThrough<PrimeVuePTOptions> = {
  confirmdialog: {
    root: {
      class: 'max-w-[90vw]'
    },
    content: {
      class: 'p-4'
    }
  },
  password: {
    root: {
      class: 'w-full'
    },
    pcInputText: {
      root: {
        class: 'w-full'
      }
    }
  },
  inputtext: {
    root: {
      class: 'w-full'
    }
  },
  button: {
    root: {}
  }
};
