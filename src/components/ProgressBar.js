import React from 'react'

const ProgressBar = () => {
    return (
        <progress-bar>
            <div class="container p-0 pl-lg-3 pr-lg-3">
    <div class="progress-bar-container">
      <div class="progress-bar-item">
            <div class="row">
                <div class="col-12 col-lg-4 text-center">
                    <img class="bar-item-image" src="assets/images/progress-bar/progress-bar-plan-green.svg" />
                </div>
                <div class="col-12 col-lg pt-2">
                    <span class="step-number d-none d-lg-block">Paso 1</span>
                    <span class="step-name pt-1 d-none d-lg-block">Datos personales</span>
                    <span class="step-name d-block d-lg-none text-center">Datos personales</span>
                </div>
            </div>
        </div><div class="progress-bar-item">
            <div class="row">
                <div class="col-12 col-lg-4 text-center">
                    <img class="bar-item-image" src="assets/images/progress-bar/progress-bar-cover-grey.svg" />
                </div>
                <div class="col-12 col-lg pt-2">
                    <span class="step-number d-none d-lg-block">Paso 2</span>
                    <span class="step-name pt-1 d-none d-lg-block">Tus detalles</span>
                    <span class="step-name d-block d-lg-none text-center">detalles</span>
                </div>
            </div>
        </div><div class="progress-bar-item">
            <div class="row">
                <div class="col-12 col-lg-4 text-center">
                    <img class="bar-item-image" src="assets/images/progress-bar/progress-bar-details-grey.svg" />
                </div>
                <div class="col-12 col-lg pt-2">
                    <span class="step-number d-none d-lg-block">Paso 3</span>
                    <span class="step-name pt-1 d-none d-lg-block">Ubicación</span>
                    <span class="step-name d-block d-lg-none text-center">Ubicación</span>
                </div>
            </div>
        </div><div class="progress-bar-item">
            <div class="row">
                <div class="col-12 col-lg-4 text-center">
                    <img class="bar-item-image" src="assets/images/progress-bar/progress-bar-payment-grey.svg" />
                </div>
                <div class="col-12 col-lg pt-2">
                    <span class="step-number d-none d-lg-block">Paso 4</span>
                    <span class="step-name pt-1 d-none d-lg-block">Pagar</span>
                    <span class="step-name d-block d-lg-none text-center">Pay</span>
                </div>
            </div>
        </div>         
    </div>
</div>
</progress-bar>
        
    );
}

export default ProgressBar;
 