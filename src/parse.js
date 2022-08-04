function parseTag(ref) {
  if (ref && typeof ref === 'string') {
    const tagPath = 'refs/tags/'
    const tagString = ref.replace(tagPath, '')
    const lernaTagRegex = /^(@?.*[a-z0-9-~._]\/)?(.*[a-z0-9-~._])@(.*[0-9]+.[0-9]+.[0-9]+)(-[a-z]+.[0-9]+)?$/

    if (tagString && lernaTagRegex.test(tagString)) {
      const data = tagString.match(lernaTagRegex)

      const scope = data[1] ? data[1].replace('/', '') : ''
      const packageName = data[2]
      const version = data[3]
      const preRelease = data[4] ? data[4].replace('-', '') : ''

      if (data && packageName && version) {
        return { scope, packageName, version, preRelease }
      }
    }
  }
}

module.exports = parseTag
