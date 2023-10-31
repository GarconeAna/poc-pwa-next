"use client";

import Header from "../components/Header";

const Account = () => {
  return (
    <div>
      <Header />
      <div className="page-padding">
        <div className="container-large">
          <div className="main-grid">
            <div className="info-plays-wins">
              <p>jogadas: <span>39</span></p>
              <p>vitórias: <span>1</span></p>
            </div>

            <div className="border-money">
              <h1 className="heading-large">R$934.097</h1>
            </div>

            <div style={{marginBottom: "35px"}}>
              {/* <div>referrals</div> */}
              <div className="ticket-list">
                <div className="ticket"></div>
                <div className="ticket"></div>
                <div className="ticket"></div>
                <div className="ticket"></div>
                <div className="ticket"></div>
              </div>
            </div>

            <div className="button-wrapper">  
              <button className="button-large-green">depositos</button>
              <button className="button-large-green">saques</button>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Account;
