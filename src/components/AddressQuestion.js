import React from 'react'

const AddressQuestion = ({updateScreen}) => {
    return (
        <section className="questions-container">
            <div className="row-8">
              <h3>Un gusto conocerte ----- <br/> ¿Cuál es la dirección de tu hogar?</h3>
            </div>
            <div className="row-8">
              <input type="text"  name="user_address" placeholder="Direcció detallada" className="user_first_name is-empty" value=""/>
              <input type="text"  name="user_place" placeholder="Departamento" className="user_last_name is-empty" value=""/>
            </div>
            <div className="row-8">
              <button type="button" onClick={updateScreen}>Siguiente</button>
            </div>
        </section>  
);
}

export default AddressQuestion;