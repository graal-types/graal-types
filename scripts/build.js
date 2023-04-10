const childProcess = require('child_process')
const path = require('path')
const [target] = process.argv.slice(2)

if (!target) {
  throw new Error('Please specify build target')
}

childProcess.spawn(
  'java',
  [
    '-jar',
    path.resolve(__dirname, 'java-ts-bind-all.jar'),
    '--packageJson',
    path.resolve(__dirname, '../types', target, 'package.json'),
  ],
  {
    stdio: 'inherit',
  }
)
