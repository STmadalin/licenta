import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center p-5"
                    >
                      <ModalH5>Produsul a fost adaugat in cos</ModalH5>
                      <img src={img} className="img-fluid" alt="product" />
                      <ModalH5>{title}</ModalH5>
                      <h5 className="text-muted">Pret : {price}€</h5>
                      <Link to="/produse">
                        <ButtonContainer onClick={() => closeModal()}>
                          Magazin
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          Mergi la Cos
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  jusify-content: center;
  #modal {
    background: var(--mainDark);
    border-radius: 0.5rem;
  }
  #h5 {
    color: var(--mainWhite)
  }
`;

const ModalH5 = styled.h5`
  color: var(--mainWhite) !important;
`