import React from 'react'
import { useState, useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }))

function Components() {
  const [items, setItems] = useState(getItems)
  const [selected, setSelected] = useState([])
  const [position, setPosition] = useState(0)

  const isItemSelected = (id) => !!selected.find((el) => el === id)

  const handleClick = (id) => ({ getItemById, scrollToItem }) => {
    const itemSelected = isItemSelected(id)

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id),
    )
  }

  return (
    <ScrollMenu>
      <Card itemId="1" title="" key="1" onClick={() => console.log('a')}></Card>
      <Card itemId="2" title="" key="1" onClick={() => console.log('a')}></Card>
      <Card itemId="3" title="" key="1" onClick={() => console.log('a')}></Card>
      <Card itemId="4" title="" key="1" onClick={() => console.log('a')}></Card>
      <Card itemId="5" title="" key="1" onClick={() => console.log('a')}></Card>
      <Card itemId="6" title="" key="1" onClick={() => console.log('a')}></Card>
    </ScrollMenu>
  )
}

function Card({ onClick, selected, title, itemId }) {
  const visibility = useContext(VisibilityContext)

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: '160px',
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <h1>A</h1>
      </div>
      <div
        style={{
          height: '200px',
        }}
      />
    </div>
  )
}

export default Components
