import React from "react";

import ProductAd from "./ProductAd/ProductAd";
import * as images from "../../images";
import classes from "./Header.module.css";

const header = (props) => {
  return (
    <React.Fragment>
      <header>
        <div className={classes.topNavbar}>
          <div className={classes.leftPart}>
            <div className={classes.logo}>
              <img src={images.Logo} alt={images.Logo} />
            </div>
            <ul>
              <li>Menu</li>
              <li>Bolalar uchun</li>
              <li>Filiallar</li>
            </ul>
          </div>
          <div className={classes.rightPart}>
            <div>
              <a href="tel:998-71-200-5400">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.318 11.634C8.66952 10.6957 7.30434 9.33048 6.366 7.682L7.604 6.798C8.016 6.50378 8.14311 5.94807 7.9 5.504C7.12708 4.08968 6.66222 2.52779 6.536 0.921C6.49479 0.400934 6.0607 -6.53884e-05 5.539 0H1.077C0.564126 -0.000110551 0.134313 0.387801 0.082 0.898C0.027 1.428 0 1.962 0 2.5C0 11.06 6.94 18 15.5 18C16.038 18 16.572 17.973 17.102 17.918C17.6122 17.8657 18.0001 17.4359 18 16.923V12.461C18.0001 11.9393 17.5991 11.5052 17.079 11.464C15.4722 11.3378 13.9103 10.8729 12.496 10.1C12.0519 9.85689 11.4962 9.984 11.202 10.396L10.318 11.634ZM5.744 5.668L3.844 7.025C4.05628 7.57134 4.30691 8.10199 4.594 8.613L4.627 8.671C5.74328 10.6324 7.36758 12.2567 9.329 13.373L9.387 13.406C9.89801 13.6931 10.4287 13.9437 10.975 14.156L12.332 12.256C13.4959 12.7952 14.7312 13.1646 16 13.353V15.99C15.834 15.997 15.667 16 15.5 16C8.044 16 2 9.956 2.001 2.5C2.001 2.333 2.004 2.166 2.01 2H4.647C4.83535 3.26884 5.20478 4.50409 5.744 5.668Z"
                    fill="#F1B301"
                  />
                </svg>
              </a>

              <div className={classes.phoneNumber}>
                <span>(+99871)</span>
                <p>200-54-00</p>
              </div>
            </div>
            |
            <div style={{ marginLeft: "40px" }}>
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 7V5C4 2.23858 6.23858 0 9 0C11.7614 0 14 2.23858 14 5V7H17C17.5523 7 18 7.44772 18 8V20C18 20.5523 17.5523 21 17 21H1C0.447715 21 0 20.5523 0 20V8C0 7.44772 0.447715 7 1 7H4ZM4 9H2V19H16V9H14V11H12V9H6V11H4V9ZM12 5V7H6V5C6 3.34315 7.34315 2 9 2C10.6569 2 12 3.34315 12 5Z"
                  fill="#F1B301"
                />
              </svg>
              <div className={classes.basket}>
                <p>Korzina</p>
                <span>125,400 UZS</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Siz izlagan mazzali ta'mlar</h2>
          <p className={classes.headerText}>
            When an unknown printer took a galley of type scrambled it to make a
            type specimen
          </p>
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
        </div>
        <img src={images.Burger} alt="" className={classes.bigBurger} />
      </header>
      <div
        style={{ margin: "80px 192px 60px", borderBottom: "1px solid #ddd" }}
      ></div>
    </React.Fragment>
  );
};
export default header;
