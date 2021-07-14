import React from 'react'
import { graphql } from 'gatsby'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'

class NotFoundRoute extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <Sidebar />
          <div className="content">
            <div className="content__inner">
              <div className="page">
                <h1 className="page__title">NOT FOUND</h1>
                <div className="page__body">
                  <p>
                    {
                      this.props.data.kontentItemSiteMetadata.elements
                        .page_not_found_message.value
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default NotFoundRoute

export const pageQuery = graphql`
  query NotFoundQuery {
    kontentItemSiteMetadata(system: { codename: { eq: "site_metadata" } }) {
      elements {
        page_not_found_message {
          value
        }
      }
    }
  }
`
