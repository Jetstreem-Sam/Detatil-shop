import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Catalogies from "./components/Catalogies";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
          {
            id: 1,
            img: "koleso.jpg" ,
            title: 'ЛИТЫЕ ДИСКИ BORBET BY R18 W8 PCD5X112 ET40 DIA66.6 (MATT BLACK) ',
            desc: 'Компания Borbet (Германия) - основана в 1881 г., но легкосплавные диски начала выпускать в 1977 г. На сегодняшний день компания насчитывает более 3000 сотрудников и выпускает около 2000 различных видов автомобильных дисков.',
            category: 'Диски',
            price: '400$',
            add: 'купить',
            index: '1'
            },
            {
              id: 2,
              img: "koleso2.jpg" ,
              title: 'ЛИТЫЕ ДИСКИ Mercedes CT1455 GMF R18 W8 PCD5x112 ET45 DIA66.6 ',
              desc: 'Компания Borbet (Германия) - основана в 1881 г., но легкосплавные диски начала выпускать в 1977 г. На сегодняшний день компания насчитывает более 3000 сотрудников и выпускает около 2000 различных видов автомобильных дисков.',
              category: 'Диски',
              price: '800$',
              add: 'купить',
              index: '1'
              },   
            {
              id: 3,
              img: "koleso3.jpg" ,
              title: 'ЛИТЫЕ ДИСКИ BBS DM10 BMF R18 W8.5 PCD5x114.3 ET35 DIA73.1 ',
              desc: 'Компания Borbet (Германия) - основана в 1881 г., но легкосплавные диски начала выпускать в 1977 г. На сегодняшний день компания насчитывает более 3000 сотрудников и выпускает около 2000 различных видов автомобильных дисков.',
              category: 'Диски',
              price: '750$',
              add: 'купить',
              index: '1'
              },
              {
                id: 4,
                img: "koleso3.jpg" ,
                title: 'ЛИТЫЕ ДИСКИ BBS DM10 BMF R18 W8.5 PCD5x114.3 ET35 DIA73.1 ',
                desc: 'Компания Borbet (Германия) - основана в 1881 г., но легкосплавные диски начала выпускать в 1977 г. На сегодняшний день компания насчитывает более 3000 сотрудников и выпускает около 2000 различных видов автомобильных дисков.',
                category: 'Диски',
                price: '750$',
                add: 'купить',
                index: '1'
              },  
              {
                  id: 5,
                  img: "koleso3.jpg" ,
                  title: 'ЛИТЫЕ ДИСКИ BBS DM10 BMF R18 W8.5 PCD5x114.3 ET35 DIA73.1 ',
                  desc: 'Компания Borbet (Германия) - основана в 1881 г., но легкосплавные диски начала выпускать в 1977 г. На сегодняшний день компания насчитывает более 3000 сотрудников и выпускает около 2000 различных видов автомобильных дисков.',
                  category: 'Диски',
                  price: '750$',
                  add: 'купить',
                  index: '1'
              },
              {
                id: 6,
                img: "koleso3.jpg" ,
                title: 'ЛИТЫЕ ДИСКИ BBS DM10 BMF R18 W8.5 PCD5x114.3 ET35 DIA73.1 ',
                desc: 'Компания Borbet (Германия) - основана в 1881 г., но легкосплавные диски начала выпускать в 1977 г. На сегодняшний день компания насчитывает более 3000 сотрудников и выпускает около 2000 различных видов автомобильных дисков.',
                category: 'Диски',
                price: '750$',
                add: 'купить',
                index: '1'
          } 
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Catalogies chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem item={this.state.showFullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category == category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if (!isInArray)
    this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;
