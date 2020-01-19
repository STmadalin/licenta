import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            model,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* Title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* End Title */}
              {/* Product Info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* Product Text */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h2>Model : {model}</h2>
                  <h4 className="text-blue">
                    <strong>
                      pret : <span>€</span>
                      {price}
                    </strong>
                  </h4>
                  <hr className="font-weight-bold"/>
                  <h4 className="text-capitalize font-weight-bold mt-3 mb-0">
                  Descriere
                  </h4>
                  <br />
                  <p className="text-muted lead">{info}</p>
                  <hr className="font-weight-bold"/>
                  {/* Buttons */}
                  <div>
                    <Link to="/produse">
                      <ButtonContainer>Inapoi la Produse</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "Deja in Cos" : "Adauga in Cos"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
