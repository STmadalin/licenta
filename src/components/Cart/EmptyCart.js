import React from 'react';
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";

export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>nu ai niciun produs in coș</h1>
                    <br />
                    <h5>Pentru a adăuga produse in coș te rugăm să te întorci în magazin.</h5>
                    <br />
                    <Link to="/produse">
                      <ButtonContainer>Înapoi la Produse</ButtonContainer>
                    </Link>

                </div>
            </div>
        </div>
    )
}
