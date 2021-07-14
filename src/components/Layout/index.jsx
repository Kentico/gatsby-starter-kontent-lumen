import React, { useEffect } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'
import KontentSmartLink from '@kentico/kontent-smart-link'
import '@kentico/kontent-smart-link/dist/kontent-smart-link.styles.css'

const Layout = ({ children }) => {
  useEffect(() => {
    const plugin = KontentSmartLink.initialize({
      queryParam: 'preview-mode',
    })
    return () => {
      plugin.destroy()
    }
  })

  return (
    <StaticQuery
      query={graphql`
        {
          sitePlugin(name: { eq: "@kentico/gatsby-source-kontent" }) {
            pluginOptions {
              projectId
              languageCodenames
            }
          }
        }
      `}
      render={(data) => (
        <div
          className="layout"
          data-kontent-project-id={data.sitePlugin.pluginOptions.projectId}
          data-kontent-language-codename={
            data.sitePlugin.pluginOptions.languageCodenames[0]
          }
        >
          <Helmet defaultTitle="Blog by John Doe">
            <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
          </Helmet>
          {children}
        </div>
      )}
    />
  )
}

export default Layout
