const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks');
const path = require('path');
const findUp = require('find-up');

const projectRoot = process.cwd();

const getRepoRoot = () => {
  return path.dirname(findUp.sync('pnpm-workspace.yaml', {cwd: process.cwd()}));
};

module.exports = {
  projectRoot,
  resolver: {
    resolveRequest: MetroSymlinksResolver(),
  },
  watchFolders: [
    path.resolve(projectRoot),
    path.join(path.resolve(projectRoot), 'node_modules'),
    getRepoRoot(),
  ],
};
