const express = require("express");
const app = express();
const cors = require("cors");
const { calculateServerNeeded } = require("./calculator");
app.use(cors());

app.use(express.json());

app.post("/api/calculate", (req, res, next) => {
  try {
    const { serverType, virtualMachines } = req.body;

    if (!serverType) {
      throw "Invalid Payload";
    }

    serversNeeded = calculateServerNeeded(serverType, virtualMachines);

    return res.json({
      servers: serversNeeded,
    });
  } catch (e) {
    res.status(400).json({
      error: e.toString(),
    });
  }
});

module.exports = app;
