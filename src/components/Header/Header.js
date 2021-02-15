import React from "react";

import ProductAd from "./ProductAd/ProductAd";
import * as images from "../../images";
import classes from "./Header.module.css";

const header = (props) => {
  return (
    <header>
      <ProductAd
        imgSrc={images.Pizza}
        adType="new"
        status={" Yangi"}
        name="Pizza"
      />

      <ProductAd
        imgSrc={images.Combo}
        adType="bestseller"
        status={" Ko'p sotilgan"}
        name="Combo"
      />
    </header>
  );
};
export default header;
