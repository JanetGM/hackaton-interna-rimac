import React from 'react'

const ProgressBar = () => {
    return (
        <progress-bar>
            <div className="container p-0 pl-lg-3 pr-lg-3">
    <div className="progress-bar-container">
      <div className="progress-bar-item">
            <div className="row">
                <div className="col-12 col-lg-4 text-center">
                    <img className="bar-item-image" src="../img/Document.png" />
                </div>
                <div className="col-12 col-lg pt-2">
                    <span className="step-number d-none d-lg-block">Paso 1</span>
                    <span className="step-name pt-1 d-none d-lg-block">Datos personales</span>
                    <span className="step-name d-block d-lg-none text-center">Datos personales</span>
                </div>
            </div>
        </div><div className="progress-bar-item">
            <div className="row">
                <div className="col-12 col-lg-4 text-center">
                    <img className="bar-item-image" src="../img/User.png" />
                </div>
                <div className="col-12 col-lg pt-2">
                    <span className="step-number d-none d-lg-block">Paso 2</span>
                    <span className="step-name pt-1 d-none d-lg-block">Tus detalles</span>
                    <span className="step-name d-block d-lg-none text-center">detalles</span>
                </div>
            </div>
        </div><div className="progress-bar-item">
            <div className="row">
                <div className="col-12 col-lg-4 text-center">
                    <img className="bar-item-image" src="../img/Vector.png" />
                </div>
                <div className="col-12 col-lg pt-2">
                    <span className="step-number d-none d-lg-block">Paso 3</span>
                    <span className="step-name pt-1 d-none d-lg-block">Ubicación</span>
                    <span className="step-name d-block d-lg-none text-center">Ubicación</span>
                </div>
            </div>
        </div><div className="progress-bar-item">
            <div className="row">
                <div className="col-12 col-lg-4 text-center">
                    <img className="bar-item-image" src="../img/Money.png" />
                </div>
                <div className="col-12 col-lg pt-2">
                    <span className="step-number d-none d-lg-block">Paso 4</span>
                    <span className="step-name pt-1 d-none d-lg-block">Pagar</span>
                    <span className="step-name d-block d-lg-none text-center">Pay</span>
                </div>
            </div>
        </div>         
    </div>
</div>
</progress-bar>
        
    );
}

export default ProgressBar;
 