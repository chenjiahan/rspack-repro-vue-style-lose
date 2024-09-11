const { defineConfig } = require("@rsbuild/core");
const { pluginVue } = require("@rsbuild/plugin-vue");
const Components = require("unplugin-vue-components/rspack").default();

module.exports = defineConfig({
  tools: {
    rspack: {
      plugins: [Components],
    },
  },
  plugins: [pluginVue()],
});
