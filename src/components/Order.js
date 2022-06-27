import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'
import Counter from './Counter'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} />
        <h2 className='item_title'>{this.props.item.title}</h2>
        <b>{this.props.item.price}</b>
          < Counter />
        <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    )
  }

  


}

export default Order