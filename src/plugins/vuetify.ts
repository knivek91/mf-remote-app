// @ts-expect-error
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { VApp } from "vuetify/components";

export default createVuetify({
  components: { VApp },
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
