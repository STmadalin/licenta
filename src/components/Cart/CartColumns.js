import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
            <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"><strong>Produs</strong></p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"><strong>Nume produs</strong></p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"><strong>Pret</strong></p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"><strong>Cantitate</strong></p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"><strong>Sterge</strong></p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"><strong>Total</strong></p>
                </div>
            </div>
            <hr />
        </div>
    )
}
