import React from 'react'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import menuItems from './menuItems'
import '../../assets/styles/components/menu-item.scss'

const App = () => {
  const [items, setItems] = React.useState(menuItems)
  const [selected, setSelected] = React.useState([])

  const isItemSelected = (id) => !!selected.find((el) => el === id)

  const handleClick = (id) => () => {
    const itemSelected = isItemSelected(id)

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id),
    )
  }

  return (
    <ScrollMenu>
      {items.map(({ id, title, img }) => (
        <Card
          itemId={id}
          title={title}
          key={id}
          img={img}
          onClick={handleClick(id)}
          selected={isItemSelected(id)}
        />
      ))}
    </ScrollMenu>
  )
}

function Card({ onClick, selected, title, img }) {
  return (
    <div className="menu-container" onClick={() => onClick()} tabIndex={0}>
      <div className="menu-item">
        <img className="menu-img" src={img} />
        <span className="menu-title">{title}</span>
      </div>
      <div />
    </div>
  )
}

export default App
