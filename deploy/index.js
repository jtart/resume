#!/usr/bin/env node

var NodeDeployment = require("codedeploy-scripts").NodeDeployment;

var deployment = new NodeDeployment({
    appName: "jordan-tart",
    nodePort: "3000",
    serverScript: "build/server/index.js"
});

deployment.run();