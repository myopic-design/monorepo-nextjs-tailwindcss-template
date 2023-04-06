const plugin = require("tailwindcss/plugin");

const hocusPlugin = plugin(({ addVariant }) => {
  addVariant("hocus", ["&:hover", "&:focus"]);
  addVariant("hocus-within", ["&:hover", "&:focus-within"]);
  addVariant("hocus-visible", ["&:hover", "&:focus-visible"]);

  addVariant("group-hocus", [":merge(.group):hover &", ":merge(.group):focus &"]);
  addVariant("group-hocus-within", [":merge(.group):hover &", ":merge(.group):focus-within &"]);
  addVariant("group-hocus-visible", [":merge(.group):hover &", ":merge(.group):focus-visible &"]);

  addVariant("peer-hocus", [":merge(.peer):hover ~ &", ":merge(.peer):focus ~ &"]);
  addVariant("peer-hocus-within", [":merge(.peer):hover ~ &", ":merge(.peer):focus-within ~ &"]);
  addVariant("peer-hocus-visible", [":merge(.peer):hover ~ &", ":merge(.peer):focus-visible ~ &"]);
});

module.exports = hocusPlugin;
