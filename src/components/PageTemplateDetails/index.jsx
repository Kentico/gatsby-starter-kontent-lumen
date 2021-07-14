import React from 'react'
import Sidebar from '../Sidebar'
import './style.scss'

class PageTemplateDetails extends React.Component {
  render() {
    const pageTemplateData = this.props.data
    const kontentItemPage = pageTemplateData.kontentItemPage

    return (
      <div>
        <Sidebar />
        <div className="content">
          <div className="content__inner">
            <div
              className="page"
              data-kontent-item-id={kontentItemPage.system.id}
            >
              <h1 className="page__title" data-kontent-element-codename="title">
                {kontentItemPage.elements.title.value}
              </h1>
              <div
                className="page__body"
                /* eslint-disable-next-line react/no-danger */
                dangerouslySetInnerHTML={{
                  __html: kontentItemPage.elements.description.value,
                }}
                data-kontent-element-codename="description"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PageTemplateDetails
