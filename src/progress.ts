import cliProgress from "cli-progress";
const serviceName = "teste";
const multiBar = new cliProgress.MultiBar(
  {
    format: `${serviceName} | {bar} | {percentage}% || {value}/{total}`,
    hideCursor: true,
  },
  cliProgress.Presets.shades_grey
);

const bar1 = multiBar.create(100, 0);
const bar2 = multiBar.create(200, 0);

let progress1 = 0;
let progress2 = 0;

const interval1 = setInterval(() => {
  progress1 += 1;
  bar1.update(progress1);

  if (progress1 >= 100) {
    clearInterval(interval1);
    multiBar.stop();
  }
}, 50);

const interval2 = setInterval(() => {
  progress2 += 2;
  bar2.update(progress2);

  if (progress2 >= 200) {
    clearInterval(interval2);
  }
}, 30);
