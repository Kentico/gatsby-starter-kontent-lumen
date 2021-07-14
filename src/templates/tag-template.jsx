import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import TagTemplateDetails from '../components/TagTemplateDetails'

class TagTemplate extends React.Component {
  render() {
    const pageTemplateData = this.props
    const title =
      pageTemplateData.data.kontentItemSiteMetadata.elements.title.value
    const tagTitle = pageTemplateData.pageContext.tagTitle

    return (
      <Layout>
        <div>
          <Helmet title={`All Articles tagged as "${tagTitle}" - ${title}`} />
          <Sidebar />
          <TagTemplateDetails {...pageTemplateData} />
        </div>
      </Layout>
    )
  }
}

export default TagTemplate

export const pageQuery = graphql`
  query TagPage($tagCodename: String) {
    kontentItemSiteMetadata(system: { codename: { eq: "site_metadata" } }) {
      elements {
        title {
          value
        }
      }
    }
    allKontentItemArticle(
      filter: {
        elements: {
          tags: {
            value: { elemMatch: { system: { codename: { eq: $tagCodename } } } }
          }
        }
        preferred_language: { eq: "en-US" }
      }
      sort: { fields: elements___date___value, order: DESC }
    ) {
      nodes {
        elements {
          category {
            value {
              ... on kontent_item_category {
                elements {
                  title {
                    value
                  }
                  slug {
                    value
                  }
                }
              }
            }
          }
          date {
            value
          }
          description {
            value
          }
          content {
            value
          }
          slug {
            value
          }
          tags {
            value {
              ... on kontent_item_tag {
                elements {
                  title {
                    value
                  }
                }
              }
            }
          }
          title {
            value
          }
        }
      }
    }
  }
`
