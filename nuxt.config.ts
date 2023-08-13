export default {
  target: 'static',
  generate: {subFolders: true},
  output: {
    dir: 'mysubfolder/.output',
    serverDir: 'mysubfolder/.output/server',
    publicDir: 'mysubfolder/.output/public'
  }
}