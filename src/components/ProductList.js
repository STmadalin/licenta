import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import styled from "styled-components";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Head >Articole sportive</Head>
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
      // <Product />
    );
  }
}

const Head = styled.h2`
font-size: 3.5rem;
  color: #ddd;
  text-transform: uppercase;
  text-align: center;
 line-height: 4.2rem; 
 padding-right: 10px;
 border-bottom: 3px solid #ddd;
 text-shadow: 2px 2px var(--mainDark);
 font-weight: bold;
 `