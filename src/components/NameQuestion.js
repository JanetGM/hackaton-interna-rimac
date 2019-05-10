import React from 'react'

const NameQuestion = () => {
    return (    
        <section className="questions-container">
            <div className="chat-question-inner">
                <h3>Hola, soy Peter. Te guiaré a cotizar un precio increíble en segundos.
                    ¿Estás listo?</h3>
            <div className="question-form"> 
                <form autocomplete="off" novalidate="">
                     <input type="text" autocomplete="new-password" autocorrect="off" spellcheck="off" tabindex="1" name="user_first_name" placeholder="Nombres" className="user_first_name is-empty" value=""/>
                     <input type="text" autocomplete="new-password" autocorrect="off" spellcheck="off" tabindex="2" name="user_last_name" placeholder="Apellidos" className="user_last_name is-empty" value=""/>
                     <input type="submit" tabindex="-1"/>
                 </form>
            </div>
            </div>
        <div className="submit-wrap">
            <a href="#" tabindex="999" className="btn-standard btn-pink disabled">Hagámoslo</a>
        </div>
        </section>
        
    );
}
export default NameQuestion;