import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

/* NOTE: In this file you can changes all about colors */
export const AuraCustomPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{emerald.50}',
      100: '{emerald.100}',
      200: '{emerald.200}',
      300: '{emerald.300}',
      400: '{emerald.400}',
      500: '{emerald.500}',
      600: '{emerald.600}',
      700: '{emerald.700}',
      800: '{emerald.800}',
      900: '{emerald.900}',
      950: '{emerald.950}'
    },
    formField: {
      paddingY: '0.4rem'
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}'
        }
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{neutral.50}',
          100: '{neutral.100}',
          200: '{neutral.200}',
          300: '{neutral.300}',
          400: '{neutral.400}',
          500: '{neutral.500}',
          600: '{neutral.600}',
          700: '{neutral.700}',
          800: '{neutral.800}',
          900: '{neutral.900}',
          950: '{neutral.950}'
        }
      }
    }
  },
  components: {
    inputtext: {
      colorScheme: {
        dark: {
          root: {
            background: 'transparent'
          }
        }
      }
    },
    select: {
      colorScheme: {
        dark: {
          root: {
            background: 'transparent'
          }
        }
      }
    },
    textarea: {
      colorScheme: {
        dark: {
          root: {
            background: 'transparent'
          }
        }
      }
    },
    button: {
      root: {
        paddingY: '0.35rem'
      }
    },
    tabs: {
      colorScheme: {
        dark: {
          tablist: {
            background: 'transparent'
          },
          tabpanel: {
            background: 'transparent'
          }
        },
        light: {
          tabpanel: {
            background: 'transparent'
          }
        }
      }
    },
    datatable: {
      colorScheme: {
        dark: {
          header: {
            background: 'transparent'
          },
          footer: {
            background: 'transparent'
          }
        }
      }
    },
    paginator: {
      colorScheme: {
        dark: {
          root: {
            background: 'transparent'
          }
        }
      }
    }
  }
});
