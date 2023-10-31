"use client";

import Header from "./components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="page-padding">
        <div className="container-large">
          <div className="main-grid">
            <div>
              <h1 className="heading-xhuge">R$12.045</h1>
            </div>
            <div className="margin-bottom-small text-wrapper">
              <span className="text-size-small text-color-gray">em</span>
              <span className="text-size-medium">16:00:12</span>
            </div>
            <div className="button-wrapper">
              <button className="button-large-green">
                <a href="/minhaconta" rel="noopener noreferrer">
                  fazer pix
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
