
module.exports = {
  // Type check Typescript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint then format Typescript and Javascript files
  '**/*(ts|tsx|js|jsx|mjs)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Format Markdown and JSON
  '**/*.(md|json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
}
