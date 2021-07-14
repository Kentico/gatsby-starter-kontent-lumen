const {
  getKontentItemNodeTypeName,
} = require('@kentico/gatsby-source-kontent')

// child --(linkedElementCodename)--> parent
// Example
// parentTypeCodename --linkedElementCodename--> childTypeCodename
// article --tags--> tag
// Creating: tag --backReferenceName--> article
const linkUsedByContentItems = (
  api,
  parentTypeCodename,
  childTypeCodename,
  linkedElementCodename,
  backReferenceName,
) => {
  const {
    createResolvers,
  } = api

  // i.e. article -> kontent_item_article
  const parentGraphqlType = getKontentItemNodeTypeName(parentTypeCodename)
  // i.e. tag -> kontent_item_tag
  const childGraphqlType = getKontentItemNodeTypeName(childTypeCodename)

  const resolvers = {
    [childGraphqlType]: {
      [backReferenceName]: {
        type: `[${parentGraphqlType}]`,
        // https://www.gatsbyjs.org/docs/schema-customization/
        resolve: async (source, args, context) => {
          const linkedNodes = await context.nodeModel.runQuery({
            query: {
              filter: {
                elements: {
                  [linkedElementCodename]: {
                    value: {
                      elemMatch: {
                        preferred_language: {
                          // depends on language fallback preferences
                          eq: source.preferred_language,
                        },
                        system: {
                          codename: {
                            eq: source.system.codename,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            type: parentGraphqlType,
            firstOnly: false,
          })
          return linkedNodes
        },
      },
    },
  }

  createResolvers(resolvers)
}

module.exports = {
  linkUsedByContentItems,
}
