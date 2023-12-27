import fs from 'fs';

import coverageConfig from '../coverage.json' assert { type: 'json' };

const { statements, branches, functions, lines } = coverageConfig;

const coverage = [
  {
    type: 'statements',
    threshold: statements,
  },
  {
    type: 'branches',
    threshold: branches,
  },
  {
    type: 'functions',
    threshold: functions,
  },
  {
    type: 'lines',
    threshold: lines,
  },
];

const coverageHtmlFile = './coverage/index.html';

const coveragePercentageSpansRegex =
  /<span class="strong">\d+(?:\.\d\d\d*)?% <\/span>/g;

const percentageNumberRegex =
  /<span class="strong">(\d+(?:\.\d\d\d*)?)% <\/span>/;

fs.readFile(coverageHtmlFile, 'utf8', (err, html) => {
  if (err) throw new Error(`ERROR::: ${err.message}`);

  if (!err) {
    // console.log(html);
    const coveragePercSpans = html.match(coveragePercentageSpansRegex);

    // console.log(coveragePercSpans);

    for (const [index, span] of coveragePercSpans.entries()) {
      // console.log(`${index}: ${span}`);
      const percNumber = Number(span.match(percentageNumberRegex)[1]);
      // console.log(percNumber);
      coverage[index].achieved = percNumber;
    }

    console.log(coverage);

    for (const covItem of coverage) {
      const coverageWasAchieved = covItem.achieved === covItem.threshold;

      if (!coverageWasAchieved) {
        const { type, achieved, threshold } = covItem;

        throw new Error(
          `ERROR::: Coverage for ${type} (${achieved}%) does not meet global threshold (${threshold}%)`,
        );
      }
    }
  }
});
