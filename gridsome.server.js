const Globals = require('./globals')

module.exports = function (api) {
  api.loadSource(async actions => {
    const collection = actions.addCollection('Social')

    for (const item of Globals.social) {
      collection.addNode({ ...item })
    }
  })

  api.loadSource(async store => {
    store.addMetadata('mail', Globals.mail)
  })
  api.loadSource(async store => {
    store.addMetadata('mailLink', Globals.mailLink)
  })
}
