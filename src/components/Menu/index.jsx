import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

class Menu extends React.Component {
  render() {
    const menu = this.props.data

    const menuBlock = (
      <ul className="menu__list">
        {menu.elements.menu_items.value.map((item) => (
          <li className="menu__list-item" key={item.id}>
            <Link
              to={`${item.elements.slug.value.startsWith('/') ? '' : '/'}${
                item.elements.slug.value
              }`}
              className="menu__list-item-link"
              activeClassName="menu__list-item-link menu__list-item-link--active"
            >
              {item.elements.label.value}
            </Link>
          </li>
        ))}
      </ul>
    )

    return <nav className="menu">{menuBlock}</nav>
  }
}

export default Menu
