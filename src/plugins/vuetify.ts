// @ts-expect-error
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import { mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

export default createVuetify({
  components,
  icons: {
    defaultSet: "mdi", // Establece 'mdi' como el set por defecto
    sets: {
      mdi, // Registra el set de iconos 'mdi' que importaste
    },
  },
  theme: {
    defaultTheme: "remote-light",
    themes: {
      "remote-light": {
        dark: false,
        colors: {
          primary: "#6200EE",
          secondary: "#03DAC6",
          background: "#F5F5F5",
          surface: "#FFFFFF",
        },
      },
    },
  },
});
