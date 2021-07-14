import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import * as _ from 'lodash'
import './style.scss'

class Article extends React.Component {
  render() {
    const title = _.get(this.props, 'data.elements.title.value', 'N/A')
    const date = _.get(this.props, 'data.elements.date.value', 'N/A')
    const category = _.get(
      this.props,
      'data.elements.category.value[0].elements.title.value',
      'N/A'
    )
    const categorySlug = _.get(
      this.props,
      'data.elements.category.value[0].elements.slug.value',
      'N/A'
    )
    const description = _.get(
      this.props,
      'data.elements.description.value',
      'N/A'
    )
    const slug = `/articles/${_.get(
      this.props,
      'data.elements.slug.value',
      'N/A'
    )}`
    const itemId = _.get(this.props, 'data.system.id')

    return (
      <div className="article" data-kontent-item-id={itemId}>
        <div className="article__meta">
          <time
            className="article__meta-time"
            dateTime={moment(date).format('MMMM D, YYYY')}
            data-kontent-element-codename="date"
          >
            {moment(date).format('MMMM YYYY')}
          </time>
          <span className="article__meta-divider" />
          <span
            className="article__meta-category"
            key={categorySlug}
            data-kontent-element-codename="category"
          >
            <Link
              to={`/categories/${categorySlug}/`}
              className="article__meta-category-link"
            >
              {category}
            </Link>
          </span>
        </div>
        <h2 className="article__title" data-kontent-element-codename="title">
          <Link className="article__title-link" to={slug}>
            {title}
          </Link>
        </h2>
        <p
          className="article__description"
          data-kontent-element-codename="description"
        >
          {description}
        </p>
        <Link className="article__readmore" to={slug}>
          Read
        </Link>
      </div>
    )
  }
}

export default Article
