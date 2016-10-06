const fs = require('fs-extra');


/* node_modules/onsenui を src/onsenui にコピーする。 */
fs.copy('./node_modules/onsenui', './src/assets/onsenui', { filter: /^(?!.*\.d.ts(x|)$)/ });
