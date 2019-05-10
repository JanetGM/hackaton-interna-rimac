import React from 'react'

const AddressQuestion = ({updateScreen}) => {
    return (
        <span>
        <div className="questions-container">
        <div className="chat-question-inner question-address">
        <h3 className="">Mucho gusto (debería cambiar)! Cuál es tu dirección?</h3>
        <div className="question-form">
        <div className="map">
        </div>
        <form autocomplete="off">
        <div className="input-address-wrap">
        <div className="input-address">
        <div className="geosuggest">
        <div className="geosuggest__input-wrapper">
        <input className="geosuggest__input is-empty" type="text" autocomplete="new-password" autocorrect="off" name="1557442229259" placeholder="Dirección" spellcheck="off" tabindex="1" value="" />
        </div>
        <div className="geosuggest__suggests-wrapper">
        <ul className="geosuggest__suggests geosuggest__suggests--hidden">
        </ul>
        </div>
        </div>
        </div>
        <input type="text" autocomplete="new-password" autocorrect="off" spellcheck="off" tabindex="2" name="1557442231087" placeholder="Ciudad" className="input-apt is-empty" value="" />
        </div>
        <input type="submit" tabindex="-1"/>
        </form>
        </div>
        <span className="switch-explanation">
        </span>
</div>
<button type="button" onClick={updateScreen}>Siguiente</button>
{/* <div className="submit-wrap">
    <a href="#" tabindex="999" className="btn-standard btn-pink disabled">Next</a>
</div> */}
</div>
<a href="#" className="btn-back" tabindex="-1"></a>
</span>
);
}

export default AddressQuestion;