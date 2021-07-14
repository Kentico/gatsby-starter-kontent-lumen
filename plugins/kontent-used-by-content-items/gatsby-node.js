const { linkUsedByContentItems } = require('./usedByContentItemsField')

exports.createResolvers = async (api, pluginConfig) => {
  pluginConfig.links.map(link => linkUsedByContentItems(
    api,
    link.parentTypeCodename,
    link.childTypeCodename,
    link.linkedElementCodename,
    link.backReferenceName),
  )
}
