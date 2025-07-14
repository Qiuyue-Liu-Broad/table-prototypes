// src/plugins/vuetify.js
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Import Vuetify styles
import { aliases, mdi } from 'vuetify/iconsets/mdi'; // Optional: Material Design Icons
import {VDataTable, VToolbar, VToolbarTitle, VContainer, VSpacer} from "vuetify/components";

export default createVuetify({
  components: {
    // Add Vuetify components here if needed
    VDataTable,
    VToolbar,
    VToolbarTitle,
    VContainer,
    VSpacer,
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
  },
});