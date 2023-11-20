module.exports = {
  apps: [
    {
      name: "birdir",
      port: "3041",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
