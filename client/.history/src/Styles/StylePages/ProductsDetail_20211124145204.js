import styled from "styled-components";
export const ProductsDetail = styled.div`
  font-size: 2rem;
  img {
    width: 00%;
  }
  .main-wrapper {
    min-height: 100vh;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container {
    max-width: 1200px;
    padding: 0 1rem;
    margin: 0 auto;
  }
  .product-div {
    margin: 1rem 0;
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: #fff;
    border-radius: 3px;
    column-gap: 10px;
  }
  .product-div-left {
    padding: 20px;
  }
  .product-div-right {
    padding: 20px;
  }
  .img-container img {
    width: 200px;
    margin: 0 auto;
  }
  .hover-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
  }
  .hover-container div {
    border: 2px solid rgba(252, 160, 175, 0.7);
    padding: 1rem;
    border-radius: 3px;
    margin: 0 4px 8px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .active {
    border-color: rgb(255, 145, 163) !important;
  }
  .hover-container div:hover {
    border-color: rgb(255, 145, 163);
  }
  .hover-container div img {
    width: 50px;
    cursor: pointer;
  }
  .product-div-right span {
    display: block;
  }
  .product-name {
    font-size: 26px;
    margin-bottom: 22px;
    font-weight: 700;
    letter-spacing: 1px;
    opacity: 0.9;
  }
  .product-price {
    font-weight: 700;
    font-size: 24px;
    opacity: 0.9;
    font-weight: 500;
  }
  .product-rating {
    display: flex;
    align-items: center;
    margin-top: 12px;
  }
  .product-rating span {
    margin-right: 6px;
  }
  .product-description {
    font-weight: 18px;
    line-height: 1.6;
    font-weight: 300;
    opacity: 0.9;
    margin-top: 22px;
  }
  .btn-groups {
    margin-top: 22px;
  }
  .btn-groups button {
    display: inline-block;
    font-size: 16px;
    font-family: inherit;
    text-transform: uppercase;
    padding: 15px 16px;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .btn-groups button .fas {
    margin-right: 8px;
  }
  .add-cart-btn {
    background-color: #ff9f00;
    border: 2px solid #ff9f00;
    margin-right: 8px;
  }
  .add-cart-btn:hover {
    background-color: #fff;
    color: #ff9f00;
  }
  .buy-now-btn {
    background-color: #000;
    border: 2px solid #000;
  }
  .buy-now-btn:hover {
    background-color: #fff;
    color: #000;
  }

  @media screen and (max-width: 992px) {
    .product-div {
      grid-template-columns: 100%;
    }
    .product-div-right {
      text-align: center;
    }
    .product-rating {
      justify-content: center;
    }
    .product-description {
      max-width: 400px;
      margin-right: auto;
      margin-left: auto;
    }
  }

  @media screen and (max-width: 400px) {
    .btn-groups button {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;
