import React, { Component } from "react";
import { ErrorForm } from "../../../../../Shared/Components/ErrorForm";
import Form from "../../../../../Shared/Components/Form";
import "./SignUp.scss";


export class SingUp extends Form {
  constructor(props) {
    super(props);
    this.state = {
      form: this._getInitFormData({
        fullName: "",
        birthday: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmmationPassword: "",
      })
    }
  }

  onSignup = () => {
    this._validateForm();
   if(this._isFormValid()) {
    console.log();
   }


  }

  render() {
    const { fullName, birthday, email, phoneNumber, password, confirmmationPassword } = this.state.form;
    return (
      <>
        <div id="signup-page" >
          <section className="login">
            <div className="login_box">
              <div className="left">
                <div className="contact">
                  <div class="row">
                    <div class="col-md-12">
                      <h3>SIGN UP</h3>
                      <div >
                        <div className="form-group">
                        <input type="text" placeholder="FullName" className="form-control" name="fullName" required value={fullName.value} onChange={(ev) => this._setValue(ev,"fullName")}/>
                        {
                          fullName.err !== '' ? fullName.err === "*" ? <ErrorForm message="Full Name cannot be empty" /> : '' : ""
                        }
                        
                        </div>
                        <div className="form-group">
                        <input type="date" placeholder="Birthday" className="form-control" name="birthday" required value={birthday.value} onChange={(ev) => this._setValue(ev, "birthday")} />
                        {
                          birthday.err !== '' ? birthday.err === "*" ? <ErrorForm message="Birthday cannot be empty" /> : '' : ""
                        }
                        </div>
                        <div className="form-group">
                        <input type="text" placeholder="Email" className="form-control" name="email" required value={email.value}  onChange={(ev) => this._setValue(ev, "email")}/>
                        {
                          email.err !== '' ? email.err === "*" ? <ErrorForm message="email cannot be empty" /> : '' : ""
                        }
                        </div>
                       <div className="form-group">
                       <input type="text" placeholder="PhoneNumber" className="form-control" name="phoneNumber" required value={phoneNumber.value} onChange={(ev) => this._setValue(ev, "phoneNumber")}/>
                       {
                          phoneNumber.err !== '' ? phoneNumber.err === "*" ? <ErrorForm message="Phone Number cannot be empty" /> : '' : ""
                        }
                       </div>
                       <div className="form-group">
                       <input type="text" placeholder="Password" className="form-control" name="password" required value={password.value} onChange={(ev) => this._setValue(ev, "password")}/>
                       {
                          password.err !== '' ? password.err === "*" ? <ErrorForm message="Password cannot be empty" /> : '' : ""
                        }
                       </div>
                       </div>
                       <div className="form-group">
                       <input type="text" placeholder="ConfirmationPassword" className="form-control" name="confirmmationPassword" required value={confirmmationPassword.value}onChange={(ev) => this._setValue(ev, "confirmmationPassword")}/>
                       {
                          confirmmationPassword.err !== '' ? confirmmationPassword.err === "*" ? <ErrorForm message="Confirmmation Password cannot be empty" /> : '' : ""
                        }                     
                      </div>
                      <button className="submit"  onClick={this.onSignup}>SUBMIT 
                        </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="right-text">
                  <h2>LONYX</h2>
                  <h5>A UX BASED CREATIVE AGENCEY</h5>
                </div>
                <div className="right-inductor">
                  <img
                    src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft"
                    alt="" 
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}