import React from 'react';
import './Newsletter.css'
const Newsletter = () => {
    return (
        <div>
            <div>
            <div class=" row newsletter mb-3">
              <div class="col-lg-6">
                <h3>Sign Up for our NewsLetter</h3>
              </div>
              <div class="col-lg-6 ">
                  <div class="input-group  mb-3 news-input">
                <input type="text" class="form-control " placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <span class="input-group-text btn-dark" id="basic-addon2">Submit</span>
            </div>
              </div>
            </div>
        </div>
        </div>
    );
};

export default Newsletter;