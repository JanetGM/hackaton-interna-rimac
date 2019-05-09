import React from 'react'

const Questions = () => {
    return (
        <section>
            <hr></hr>
            <h3>Hola, soy Peter. Te guiaré a cotizar un precio increíble en segundos.
                    ¿Estás listo?</h3>
            <div className="row">                
                    <div className="col">
                    <input type="text" className="form-control" placeholder="nombre"></input>
                    </div>
                    <div className="col">
                    <input type="text" className="form-control" placeholder="apellido"></input>
                    </div>                    
            </div>
            <div className="col-md-12">
                <button>Hagámoslo</button>
            </div>
            

        </section>
        
    );
}
export default Questions;