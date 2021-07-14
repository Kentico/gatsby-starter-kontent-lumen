import React from 'react'
import Article from '../Article'

class TagTemplateDetails extends React.Component {
  render() {
    const items = []
    const tagTitle = this.props.pageContext.tagTitle
    const articles = this.props.data.allKontentItemArticle.nodes

    articles.forEach((article) => {
      items.push(<Article data={article} key={article.elements.slug.value} />)
    })

    return (
      <div className="content">
        <div className="content__inner">
          <div className="page">
            <h1 className="page__title">
              All Articles tagged as &quot;
              {tagTitle}
              &quot;
            </h1>
            <div className="page__body">{items}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default TagTemplateDetails
