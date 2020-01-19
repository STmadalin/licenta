import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import styled from 'styled-components';

export default class Car extends Component {
  render() {
    return (
      
      <Section className="p-3 py-5 ">
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Head>Cosul meu</Head> 
                  <br />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </Section>
      
    );
  }
}

const Section = styled.section`
margin-bottom: 8vh;

`
const Head = styled.h2`
font-size: 4.3rem;
  color: #ddd;
  text-transform: uppercase;
  text-align: center;
 line-height: 4.2rem; 
 padding-right: 10px;
 border-right: 3px solid #ddd;
 `