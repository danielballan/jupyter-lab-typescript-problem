var buildExtension = require('@jupyterlab/extension-builder').buildExtension;

buildExtension({
        name: 'tstest',
        entry: './lib/plugin.js',
        outputDir: './static'
});
