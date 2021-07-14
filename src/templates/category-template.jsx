import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import CategoryTemplateDetails from '../components/CategoryTemplateDetails'

class CategoryTemplate extends React.Component {
  render() {
    const categoryTemplateData = this.props
    const siteTitle =
      categoryTemplateData.data.kontentItemSiteMetadata.elements.title.value
    const categoryTitle = categoryTemplateData.pageContext.categoryTitle

    return (
      <Layout>
        <div>
          <Helmet title={`${categoryTitle} - ${siteTitle}`} />
          <Sidebar />
          <CategoryTemplateDetails {...categoryTemplateData} />
        </div>
      </Layout>
    )
  }
}

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoryPage($categoryCodename: String) {
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
          category: {
            value: {
              elemMatch: { system: { codename: { eq: $categoryCodename } } }
            }
          }
        }
        preferred_language: { eq: "en-US" }
      }
    ) {
      nodes {
        system {
          codename
        }
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
