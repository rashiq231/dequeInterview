const AxeBuilder = require("@axe-core/webdriverio").default;
const { remote } = require("webdriverio");

(async () => {
  const client = await remote({
    logLevel: "error",
    capabilities: {
      browserName: "chrome",
    },
  });

  await client.url("https://dequeuniversity.com/demo/mars/");

  const builder = new AxeBuilder({ client });
  try {
    const results = await builder.analyze();
    let desiredResult = results.violations.filter(
      (el) => el.impact !== "minor"
    );
    console.log(desiredResult);
  } catch (e) {
    console.error(e);
  }
})();
