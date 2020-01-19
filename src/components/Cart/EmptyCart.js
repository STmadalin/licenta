import React from 'react';
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";

export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>nu ai niciun produs in cos</h1>
                    <br />
                    <h5>Pentru a adauga produse in cos te rugam sa te intorci in magazin.</h5>
                    <br />
                    <Link to="/produse">
                      <ButtonContainer>Inapoi la Produse</ButtonContainer>
                    </Link>

                </div>
            </div>
        </div>
    )
}
