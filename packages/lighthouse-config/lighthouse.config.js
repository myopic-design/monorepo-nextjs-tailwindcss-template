module.exports = ({ staticDistDir }) => ({
  ci: {
    collect: {
      staticDistDir,
    },
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        "bf-cache": "off",
        "csp-xss": "off",
        "tap-targets": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
});
