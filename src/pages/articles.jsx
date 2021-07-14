import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Article from '../components/Article'
import Sidebar from '../components/Sidebar'

class ArticlesRoute extends React.Component {
  render() {
    const routeData = this.props
    const items = []
    const title = routeData.data.kontentItemSiteMetadata.elements.title.value
    const subtitle =
      routeData.data.kontentItemSiteMetadata.elements.subtitle.value
    const articles = routeData.data.allKontentItemArticle.nodes
    articles.forEach((article) => {
      items.push(<Article data={article} key={article.elements.slug.value} />)
    })

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={subtitle} />
          </Helmet>
          <Sidebar />
          <div className="content">
            <div className="content__inner">{items}</div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ArticlesRoute

export const pageQuery = graphql`
  query ArticlesQuery {
    kontentItemSiteMetadata(system: { codename: { eq: "site_metadata" } }) {
      elements {
        subtitle {
          value
        }
        title {
          value
        }
      }
    }
    allKontentItemArticle(filter: { preferred_language: { eq: "en-US" } }) {
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
                  slug {
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
