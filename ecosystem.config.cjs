module.exports = {
  apps: [
    {
      name: "bildir",
      port: "3042",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
