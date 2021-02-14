import React, { Component } from "react";

import FilterNavbar from "../../components/FilterNavbar/FilterNavbar";
import ProductHolder from "../../components/ProductHolder/ProductHolder";
import * as images from "../../images";

class Main extends Component {
  state = {
    products: [
      {
        name: "Gavaya",
        description:
          "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
        price: 45000,
        imgSrc: images.Gavaya,
        type: "pizza",
      },
      {
        name: "Mexica",
        description:
          "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
        price: 53000,
        imgSrc: images.Mexica,
        type: "pizza",
      },
      {
        name: "Hot achchiko",
        description:
          "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
        price: 64000,
        imgSrc: images.HotAchchiko,
        type: "pizza",
      },
      {
        name: "Havai",
        description:
          "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
        price: 45000,
        imgSrc: images.Havai,
        type: "pizza",
      },
      {
        name: "Apocalipo",
        description:
          "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
        price: 64000,
        imgSrc: images.Apocalipo,
        type: "pizza",
      },
      {
        name: "Sosikacho",
        description:
          "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
        price: 45000,
        imgSrc: images.Sosiskacho,
        type: "pizza",
      },
      {
        name: "Mexico",
        description:
          "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
        price: 53000,
        imgSrc: images.Mexico,
        type: "pizza",
      },
      {
        name: "Cheeseburger",
        description:
          "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
        price: 17000,
        imgSrc: images.Cheeseburger,
        type: "burger",
      },
      {
        name: "Chili burger",
        description:
          "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
        price: 18000,
        imgSrc: images.Chiliburger,
        type: "burger",
      },
      {
        name: "Hamburger",
        description:
          "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
        price: 15000,
        imgSrc: images.Hamburger,
        type: "burger",
      },
      {
        name: "Double burger",
        description:
          "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
        price: 20000,
        imgSrc: images.Doubleburger,
        type: "burger",
      },
      {
        name: "Combo-1",
        description:
          "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
        price: 25000,
        imgSrc: images.Combo1,
        type: "combo",
      },
      {
        name: "Combo-2",
        description:
          "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
        price: 30000,
        imgSrc: images.Combo2,
        type: "combo",
      },
      {
        name: "Combo-3",
        description:
          "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
        price: 28000,
        imgSrc: images.Combo3,
        type: "combo",
      },
      {
        name: "Sprite 1L",
        description:
          "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
        price: 6000,
        imgSrc: images.Sprite,
        type: "drink",
      },
      {
        name: "Coca-cola 1.5L",
        description:
          "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
        price: 9000,
        imgSrc: images.CocaCola,
        type: "drink",
      },
      {
        name: "Fanta 1L",
        description:
          "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
        price: 6000,
        imgSrc: images.Fanta,
        type: "drink",
      },
    ],
    filter: "all",
  };
  render() {
    // console.log(this.state.products);
    return (
      <main>
        <FilterNavbar />
        <ProductHolder products={this.state.products} />
      </main>
    );
  }
}

export default Main;
