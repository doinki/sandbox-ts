const path = require('path');

const buildEslintCommand = (filenames) =>
  `yarn lint -d @ --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.@(j|t)s?(x)': [buildEslintCommand],
  '*.json': 'yarn dlx prettier --write',
};
