import { configure, addParameters } from "@storybook/react";
import { create } from "@storybook/theming";

const theme = create({
  base: "dark",
  fontBase: "Inter, sans-serif"
});

addParameters({
  options: {
    theme: theme
  }
});

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module);
