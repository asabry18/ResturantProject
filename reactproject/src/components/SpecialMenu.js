import React, { useState } from 'react';
import '../assets/css/menu.css'; 


const SpecialMenu = () => {
  const categories =[' All', ' Pizza', ' Asian', ' Burger', ' Salad', ' Bakery', ' Drink']

    const [showAll, setShowAll] = useState(false);
    const [activeIcon, setActiveIcon] = useState(null); 

    
    const menuItems = [
        { id: 1, name: 'Grilled Fish', price: '$6.99 - $5.49', rating: 4.5, img: require('../assets/imagmenu/1.png'), iconId: 1 },
        { id: 2, name: 'Capresc Salad', price: '$5.49 - $4.29', rating: 4.0, img: require('../assets/imagmenu/2.png'), iconId: 2 },
        { id: 3, name: 'BBQ Ribs', price: '$8.99 - $7.49', rating: 4.8, img: require('../assets/imagmenu/3.png'), iconId: 3 },
        { id: 4, name: ' Titamisu', price: '$15.99 - $12.49', rating: 4.2, img: require('../assets/imagmenu/4.png'), iconId: 4 },
        { id: 5, name: 'Mango Smoothie', price: '$18.99 - $15.49', rating: 5.0, img: require('../assets/imagmenu/5.png'), iconId: 5 },
        { id: 6, name: ' Greek Salad', price: '$15.99 - $12.49', rating: 4.9, img: require('../assets/imagmenu/6.png'), iconId: 6 },
        { id: 7, name: ' Park chops', price: '$6.99 - $5.49', rating: 4.3, img: require('../assets/imagmenu/7.png'), iconId: 7 },
        { id: 8, name: 'Sushi platter', price: '$8.99 - $7.49', rating: 4.6, img: require('../assets/imagmenu/8.png'), iconId: 8 },
    ];

    const visibleItems = showAll ? menuItems : menuItems.slice(0, 4);
    
    
    const filteredItems = activeIcon ? menuItems.filter(item => item.iconId === activeIcon) : visibleItems;

    return (
      <><div class="AboutUsBg d-flex flex-column justify-content-center align-items-center mb-5">
        <h1>Menu page</h1>
        <p>Home/menu</p>
      </div><div className="menu-container">
          <div class="special-heading">
            <h4>Special Menu</h4>
          </div>
          <h1 className="menu-title"> Our Special Menu</h1>

          <div className="icon-container">
            {categories.map((name, index) => (
              <div key={index} className="icon-item" onClick={() => name === categories[0] ? setActiveIcon(null) : setActiveIcon(index + 1)}
              >
                <img src={require(`../assets/icons/${index + 1}.png`)} alt={name} />
                <p>{name}</p>
              </div>
            ))}
          </div>

          <div className="cards-container">
            {filteredItems.map(item => (
              <div key={item.id} className="menu-card">
                <img src={item.img} alt={item.name} className="food-img1" />
                <h3 className='card-title'>{item.name}</h3>

                <div className="rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i key={i} className={` fas fa-star${i < Math.round(item.rating) ? '' : '-o'}`} style={{ color: 'gold' }}></i>
                  ))}
                </div>
                <p className='card-text'>{item.price}</p>
              </div>
            ))}
          </div>

          <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? ' Show Less' : ' Show more'}
          </button>
        </div></>
    );
};

export default SpecialMenu;

