import osUtils from "os-utils";

const POLLING_INTERNAL = 500;

export   function pollResources() {
  setInterval(async() => {
    const cpuUsage = await getCpuUsage();
    console.log(cpuUsage)
  }, POLLING_INTERNAL);
}

 function getCpuUsage() {
  return new Promise((resolve) => {
    osUtils.cpuUsage(resolve);
  });
}
