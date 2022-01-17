exports.calculateServerNeeded = (serverType, virtualMatchines) => {
  if (serverType == undefined || virtualMatchines == undefined) {
    throw new Error("invalid parameters");
  }

  let serversNeeded = 0;

  let leftOver = { ...serverType };

  for (let i = 0; i < virtualMatchines.length; i++) {
    let vmGreathanServer =
      serverType["RAM"] < virtualMatchines[i]["RAM"] ||
      serverType["CPU"] < virtualMatchines[i]["CPU"] ||
      serverType["HDD"] < virtualMatchines[i]["HDD"];

    if (vmGreathanServer) {
      continue;
    } else {
      leftOver["RAM"] = leftOver["RAM"] - virtualMatchines[i]["RAM"];
      leftOver["CPU"] = leftOver["CPU"] - virtualMatchines[i]["CPU"];
      leftOver["HDD"] = leftOver["HDD"] - virtualMatchines[i]["HDD"];

      //no space left over for new vm count as 1
      if (
        leftOver["RAM"] == 0 ||
        leftOver["CPU"] == 0 ||
        leftOver["HDD"] == 0
      ) {
        serversNeeded++;
        leftOver = { ...serverType };
      }
    }
  }

  return serversNeeded;
};
