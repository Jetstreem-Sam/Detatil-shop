import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Order from './Order'

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (<div>
      {props.orders.map(el => (
    <Order onDelete={props.onDelete} key={el.id} item={el} />
  ))}
    <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
  </div>)
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h4>Товаров нет</h4>
    </div>
  )
}

function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div className='navigation'>
            <span className="logo">Car-parts </span>
            <form className="serch-shop">
                <input className="serch" type="text" name="text" class="serch" placeholder="поиск товаров" />
                <input type="submit" name="submit" class="submit" value="Поиск" />
            </form>
            <ul className="nav">
                <li>Контакты</li>
                <li>Про нас</li>
                <li>Отзывы</li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ?
                  showOrders(props) : showNothing()}
              </div>
            )}
            </div>
        <div className='presentation'></div>
    </header>
  )
}

export default Header