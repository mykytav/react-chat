import variables from "./variables.scss";

export const theme = {
  variables: variables,
  space: [0, 8, 12, 16, 24, 32, 48, 64],
  variable: function(name) {
    return name ? this.variables[name.slice(1)] : null;
  },
};
