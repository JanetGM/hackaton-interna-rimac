import React from 'react'

const OwnerQuestion = () => {
    return(
      <section className="questions-container">
      <div className="chat-question-inner dual-iconic">
          <h3 className="">Do you rent or own it?</h3>
          <div className="question-form">
              <form autocomplete="off">
                  <label className="input-radio with-icn">
                      <input tabindex="1" name="ownership" type="radio" value="renter"/>
                      <div className="option-wrapper">
                          <div className="selected-image-container">
                              <img src="/assets/web_chat/renter_selected-055e0d497ff237333d29d18c31c81403c274954f2e70006321c9f647e6c81169.png" alt="" />
                          </div>
                          <div className="image-container">
                              <img src="/assets/web_chat/renter-01e648e692f0f7e7871ba4017df9e45241982d0c23df8803d791e4650d04e641.png" alt="" />
                          </div>
                          <div className="iconic-option-inner">
                              <h5>Rent</h5>
                              <i></i>
                          </div>
                      </div>
                  </label>
                  <label className="input-radio with-icn">
                      <input tabindex="2" name="ownership" type="radio" value="owner"/>
                      <div className="option-wrapper">
                          <div className="selected-image-container">
                              <img src="/assets/web_chat/owner_selected-6ee3d4175730425673b9a803f74c3667c63792c8f33c1b2df1aa7e3402c4637b.png" alt="" />
                          </div>
                          <div className="image-container">
                              <img src="/assets/web_chat/owner-d009ed56dc35f04e3ceaed8785eb0d89bf6b536b93b9547f0c2e9508ad5847b4.png" alt="" />
                          </div>
                          <div className="iconic-option-inner">
                              <h5>Own</h5>
                              <i></i>
                          </div>
                      </div>
                  </label>
                  <span>
              </span>
                  <input type="submit" tabindex="-1" />
              </form>
          </div>
          <span></span>
      </div>
      <div className="submit-wrap">
          <a href="#" tabindex="999" className="btn-standard btn-pink disabled">Next</a>
      </div>
  </section>
  );
}
export default OwnerQuestion;