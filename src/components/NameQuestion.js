import React from 'react'
import './styles/NameQuestion.css'

const NameQuestion = ({updateScreen}) => {
    return (    
        <section className="questions-container">
            <div className="row-8">
              <h3>Hola, soy Peter. Te guiaré a cotizar un precio <br/> increíble en segundos.
                    ¿Estás listo?</h3>
            </div>
            <div className="row-8">
              <input type="text"  name="user_first_name" placeholder="Nombres" className="user_first_name is-empty" value=""/>
              <input type="text"  name="user_last_name" placeholder="Apellidos" className="user_last_name is-empty" value=""/>
            </div>
            <div className="row-8">
              <button type="button" onClick={updateScreen}>Hagámoslo</button>
            </div>
        </section>       
    );
}
export default NameQuestion;