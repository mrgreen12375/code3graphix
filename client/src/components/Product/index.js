import React from "react";

function Product() {
  return (
    <main>
      <h1 className="center">Product</h1>
      <div className="product">
        {itemData.map((item) => (
          <div key={item.img}>
            <img className="productImage"
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
            <div className="price">
              <p>{`${item.price}`}</p>
              <a rel="noreferrer" href={`https://${item.view}`} target='_blank'>View</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Product;

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    price: '$19.99',
    view: 'browse.jdsindustries.com/main.php?r=frontEnd&view=shop&jds-category1=15&jds-category1-desc=Drinkware',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    price: '$19.99',
    view: 'browse.jdsindustries.com/main.php?r=frontEnd&view=shop&jds-category1=15&jds-category1-desc=Drinkware',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    price: '$19.99',
    view: 'browse.jdsindustries.com/main.php?r=frontEnd&view=shop&jds-category1=15&jds-category1-desc=Drinkware',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    price: '$19.99',
    view: 'browse.jdsindustries.com/main.php?r=frontEnd&view=shop&jds-category1=15&jds-category1-desc=Drinkware',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    price: '$19.99',
    view: 'browse.jdsindustries.com/main.php?r=frontEnd&view=shop&jds-category1=15&jds-category1-desc=Drinkware',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    price: '$19.99',
    view: 'browse.jdsindustries.com/main.php?r=frontEnd&view=shop&jds-category1=15&jds-category1-desc=Drinkware',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    price: '$19.99',
    view: 'browse.jdsindustries.com/main.php?r=frontEnd&view=shop&jds-category1=15&jds-category1-desc=Drinkware',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    price: '$19.99',
    view: 'browse.jdsindustries.com/main.php?r=frontEnd&view=shop&jds-category1=15&jds-category1-desc=Drinkware',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    price: '$19.99',    
    view: 'browse.jdsindustries.com/main.php?r=frontEnd&view=shop&jds-category1=15&jds-category1-desc=Drinkware',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    price: '$19.99',
    view: 'browse.jdsindustries.com/main.php?r=frontEnd&view=shop&jds-category1=15&jds-category1-desc=Drinkware',
  },
];