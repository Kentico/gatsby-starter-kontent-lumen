import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageTemplateDetails from '../components/PageTemplateDetails'

class PageTemplate extends React.Component {
  render() {
    const pageTemplateData = this.props
    const title =
      pageTemplateData.data.kontentItemSiteMetadata.elements.title.value
    const subtitle = pageTemplateData.data.kontentItemPage.elements.title.value

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${title} - ${subtitle}`}</title>
            <meta
              name="description"
              content={
                pageTemplateData.data.kontentItemPage.elements.meta_description
                  .value
              }
            />
          </Helmet>
          <PageTemplateDetails {...pageTemplateData} />
        </div>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageQuery($codename: String!, $language: String!) {
    kontentItemSiteMetadata(system: { codename: { eq: "site_metadata" } }) {
      elements {
        copyright {
          value
        }
        subtitle {
          value
        }
        title {
          value
        }
      }
    }
    kontentItemAuthor(system: { codename: { eq: "author" } }) {
      elements {
        bio {
          value
        }
        email {
          value
        }
        github {
          value
        }
        name {
          value
        }
        rss {
          value
        }
        telegram {
          value
        }
        twitter {
          value
        }
        vk {
          value
        }
        avatar_image {
          value {
            url
          }
        }
      }
    }
    kontentItemPage(
      preferred_language: { eq: $language }
      system: { codename: { eq: $codename } }
    ) {
      id
      system {
        id
      }
      elements {
        description {
          value
        }
        meta_description {
          value
        }
        title {
          value
        }
      }
    }
  }
`
