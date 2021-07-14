import React from 'react'
import Article from '../Article'

class CategoryTemplateDetails extends React.Component {
  render() {
    const items = []
    const { category } = this.props.pageContext
    const articles = this.props.data.allKontentItemArticle.nodes
    articles.forEach((article) => {
      items.push(<Article data={article} key={article.system.codename} />)
    })

    return (
      <div className="content">
        <div className="content__inner">
          <div className="page">
            <h1 className="page__title">{category}</h1>
            <div className="page__body">{items}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoryTemplateDetails
