import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import * as _ from 'lodash'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'

class CategoriesRoute extends React.Component {
  render() {
    const categoriesData = this.props
    const title =
      categoriesData.data.kontentItemSiteMetadata.elements.title.value
    const categories = this.props.data.allKontentItemCategory.nodes

    return (
      <Layout>
        <div>
          <Helmet title={`All Categories - ${title}`} />
          <Sidebar />
          <div className="content">
            <div className="content__inner">
              <div className="page">
                <h1 className="page__title">Categories</h1>
                <div className="page__body">
                  <div className="categories">
                    <ul className="categories__list">
                      {categories.map((category) => (
                        <li
                          key={category.system.codename}
                          className="categories__list-item"
                          data-kontent-item-id={category.system.id}
                          data-kontent-element-codename="title"
                        >
                          <Link
                            to={`/categories/${category.elements.slug.value}/`}
                            className="categories__list-item-link"
                          >
                            {category.elements.slug.value} (
                            {_.get(category.used_by_articles, 'length', 'N/A')})
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default CategoriesRoute

export const pageQuery = graphql`
  {
    kontentItemSiteMetadata(system: { codename: { eq: "site_metadata" } }) {
      elements {
        title {
          value
        }
      }
    }
    allKontentItemCategory(filter: { preferred_language: { eq: "en-US" } }) {
      nodes {
        elements {
          slug {
            value
          }
          title {
            value
          }
        }
        used_by_articles {
          system {
            codename
          }
        }
        system {
          id
          codename
        }
      }
    }
  }
`
