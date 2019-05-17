import React from 'react'
import './styles/NameQuestion.css'

const NameQuestion = ({userName,updateName, updateScreen}) => {
    return (    
        <section className="questions-container">
            <div className="row-8 mb-3">
              <h3>Hola, soy Peter. Te guiaré a cotizar un precio <br/> increíble en segundos.
                    ¿Estás listo?</h3>
            </div>
            <div className="row-8">
              <input type="text"  name="userName" defaultValue={userName} onChange={updateName} placeholder="Nombres" className="user_first_name is-empty mr-3" />
              <input type="text"  name="user_last_name" placeholder="Apellidos" className="user_last_name is-empty" />
            </div>
            <div className="row-8">
              <button type="button" className="btn color-button mt-5"onClick={updateScreen}>Hagámoslo</button>
            </div>
        </section>       
    );
}
export default NameQuestion;