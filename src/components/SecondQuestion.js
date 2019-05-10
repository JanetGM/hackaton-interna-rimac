import React from 'react'

const SecondQuestion = () => {
    return (
        <span>
            <div class="questions-container">
            <div class="chat-question-inner question-address">
            <h3 class="">Mucho gusto (debería cambiar)! Cuál es tu dirección?</h3>
            <div class="question-form">
            <div class="map"></div>
            <form autocomplete="off">
            <div class="input-address-wrap">
            <div class="input-address">
            <div class="geosuggest">
            <div class="geosuggest__input-wrapper">
            <input class="geosuggest__input is-empty" type="text" autocomplete="new-password" autocorrect="off" name="1557442229259" placeholder="STREET ADDRESS, CITY, STATE" spellcheck="off" tabindex="1" value="" />
            </div>
            <div class="geosuggest__suggests-wrapper">
            <ul class="geosuggest__suggests geosuggest__suggests--hidden">
            </ul></div></div></div><input type="text" autocomplete="new-password" autocorrect="off" spellcheck="off" tabindex="2" name="1557442231087" placeholder="Apartment" class="input-apt is-empty" value="" />
            </div><input type="submit" tabindex="-1"/>
            </form>
            </div><span class="switch-explanation">
            </span>
            </div>
            <div class="submit-wrap">
            <a href="#" tabindex="999" class="btn-standard btn-pink disabled">Next</a>
            </div>
            </div>
            <a href="#" class="btn-back" tabindex="-1"></a>
        </span>
    );
}

export default SecondQuestion;