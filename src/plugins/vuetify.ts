import { ThemeDefinition, createVuetify } from 'vuetify';
import { md3 } from 'vuetify/blueprints';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import 'vuetify/styles';

import '@mdi/font/css/materialdesignicons.css';

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#3f51b5',
    secondary: '#673ab7',
    accent: '#00bcd4',
    error: '#f44336',
    warning: '#ff9800',
    info: '#03a9f4',
    success: '#4caf50',
  },
};

export default createVuetify({
  components,
  directives,
  blueprint: md3,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
  defaults: {
    VBtn: {
      elevation: 0,
      class: 'text-none',
    },
  },
});
