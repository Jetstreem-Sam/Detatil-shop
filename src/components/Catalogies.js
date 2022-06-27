import React, { Component } from 'react'

export class Catalogies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'Диски',
                    name: 'Диски'
                },
                {
                    key: 'Турбины',
                    name: 'Турбины'
                },
                {
                    key: 'Магнитолы',
                    name: 'Магнитолы'
                },
                {
                    key: 'Динамики',
                    name: 'Динамики'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Catalogies