import React from 'react'

const ProgressBar = () => {
    return (
        <progress-bar>
    <div classNameName="container p-0 pl-lg-3 pr-lg-3">
        <div classNameName="progress-bar-container">
            <div classNameName="progress-bar-item">
                <div classNameName="row">
                    <div classNameName="col-12 col-lg-4 text-center">
                        <img classNameName="bar-item-image" src="../img/Document.png" alt="" />
                    </div>
                    <div classNameName="col-12 col-lg pt-2">
                        <span classNameName="step-number d-none d-lg-block">Paso 1</span>
                        <span classNameName="step-name pt-1 d-none d-lg-block">Datos personales</span>
                    </div>
                </div>
            </div>
            <div classNameName="progress-bar-item">
                <div classNameName="row">
                    <div classNameName="col-12 col-lg-4 text-center">
                        <img classNameName="bar-item-image" src="../img/User.png" />
                    </div>
                    <div classNameName="col-12 col-lg pt-2">
                        <span classNameName="step-number d-none d-lg-block">Paso 2</span>
                        <span classNameName="step-name pt-1 d-none d-lg-block">Tus detalles</span>
                    </div>
                </div>
            </div>
            <div classNameName="progress-bar-item">
                <div classNameName="row">
                    <div classNameName="col-12 col-lg-4 text-center">
                        <img classNameName="bar-item-image" src="../img/Vector.png" />
                    </div>
                    <div classNameName="col-12 col-lg pt-2">
                        <span classNameName="step-number d-none d-lg-block">Paso 3</span>
                        <span classNameName="step-name pt-1 d-none d-lg-block">Ubicación</span>
                    </div>
                </div>
            </div>
            <div classNameName="progress-bar-item">
                <div classNameName="row">
                    <div classNameName="col-12 col-lg-4 text-center">
                        <img classNameName="bar-item-image" src="../img/Money.png" />
                    </div>
                    <div classNameName="col-12 col-lg pt-2">
                        <span classNameName="step-number d-none d-lg-block">Paso 4</span>
                        <span classNameName="step-name pt-1 d-none d-lg-block">Pagar</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</progress-bar>
        
    );
}

export default ProgressBar;
 