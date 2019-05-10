import React from 'react'

const IndoorsQuestion = ({updateScreen}) => {
    return(
        <div class="questions-container">
        <div class="chat-question-inner"></div>
        <h3>¿Tiene alguno de estos en casa?</h3>
        <div class="question-form">
            <form autocomplete="off">
                <label class="input-checkbox with-icn">
                    <input type="checkbox" name="roommates" tabindex="1" />
                    <div class="option-wrapper">
                        <div class="selected-image-container">
                            <img src="/assets/web_chat/roommates_selected-b885cef7e3279710e2f8d97db56f1a7e82691c20d3013eb33d136af31941488b.png" />
                        </div>
                        <div class="image-container">
                            <img src="/assets/web_chat/roommates-7e5da62bb99673fdee224f604f499a0de59ce934a0d65a1f193453cf4185892f.png" />
                        </div>
                        <div class="iconic-option-inner">
                            <h5>Inquilinos</h5><i></i></div>
                    </div>
                </label>
                <label class="input-checkbox with-icn">
                    <input type="checkbox" name="local_fire_alarm" tabindex="2" />
                    <div class="option-wrapper">
                        <div class="selected-image-container">
                            <img src="/assets/web_chat/fire_selected-ba9ff21f7cfe85791d6df64d67ec6a4d5b1a8558957bef0f5805de4fb65630a7.png" />
                        </div>
                        <div class="image-container">
                            <img src="/assets/web_chat/fire-391ca2d1318050d588522744b24c259b59f9fdbb0ffbc5a9339af4793ec73dc4.png" />
                        </div>
                        <div class="iconic-option-inner">
                            <h5>Alarma de incendio</h5><i></i></div>
                    </div>
                </label>
                <label class="input-checkbox with-icn">
                    <input type="checkbox" name="local_burglar_alarm" tabindex="3" />
                    <div class="option-wrapper">
                        <div class="selected-image-container">
                            <img src="/assets/web_chat/burglar_selected-baab90a2db9a0b02c0cf0b63c5a6f0e7f68e0f03a5cca57ddd7cf25b313af97b.png" />
                        </div>
                        <div class="image-container">
                            <img src="/assets/web_chat/burglar-e86e0122c41e7d8257a8bc167070cb06d588ec91810469cbb4b27b948ce67fb5.png" />
                        </div>
                        <div class="iconic-option-inner">
                            <h5>Alarma contra robo</h5><i></i></div>
                    </div>
                </label>
                <input type="submit" tabindex="-1" />
            </form>
        </div>
        <span></span>
        <button type="button" onClick={updateScreen}>Siguiente</button>

    </div>

    // <div class="submit-wrap"><a href="#" tabindex="999" class="btn-standard btn-pink">Next</a></div>
    // </div>
        
    );
}

export default IndoorsQuestion;