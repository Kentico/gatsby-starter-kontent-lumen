import React from 'react'
import './style.scss'
import '../../assets/fonts/fontello-771c82e0/css/fontello.css'

class Links extends React.Component {
  render() {
    const author = this.props.data
    const links = {
      telegram: author.elements.telegram.value,
      twitter: author.elements.twitter.value,
      github: author.elements.github.value,
      vk: author.elements.vk.value,
      // rss: author.elements.rss.value,
      email: author.elements.email.value,
    }

    return (
      <div className="links">
        <ul className="links__list">
          <li
            className="links__list-item"
            data-kontent-element-codename="twitter"
          >
            <a
              href={`https://www.twitter.com/${links.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-twitter" />
            </a>
          </li>
          <li
            className="links__list-item"
            data-kontent-element-codename="github"
          >
            <a
              href={`https://www.github.com/${links.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-github" />
            </a>
          </li>
          <li className="links__list-item" data-kontent-element-codename="vk">
            <a
              href={`https://www.vk.com/${links.vk}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-vkontakte" />
            </a>
          </li>
        </ul>
        <ul className="links__list">
          <li
            className="links__list-item"
            data-kontent-element-codename="email"
          >
            <a href={`mailto:${links.email}`}>
              <i className="icon-mail" />
            </a>
          </li>
          <li
            className="links__list-item"
            data-kontent-element-codename="telegram"
          >
            <a href={`telegram:${links.telegram}`}>
              <i className="icon-paper-plane" />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Links
