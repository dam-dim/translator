import './App.css';

function App() {
  return (
      <div className="container">
          <div className="row">
              <div className={"col-4"}>
                  <img src={require("./images/logo3.png")} width={"50%"} alt=""/>
              </div>
              <div className="col-8 my-auto">
                  <h1 id={"slogan"}>Най-добрите преводачески услуги</h1>
              </div>
          </div>


          <div className="row">
              <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                              className="active" aria-current="true" aria-label="Slide 1"/>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                              aria-label="Slide 2"/>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                              aria-label="Slide 3"/>
                  </div>
                  <div className="carousel-inner">
                      <div className="carousel-item active">
                          <img src={require("./images/slider1.jpg")} className="d-block w-100" alt="..." height={"700em"}/>

                      </div>
                      <div className="carousel-item">
                          <img src={require("./images/slider2.jpg")} className="d-block w-100" alt="..." height={"700em"}/>

                      </div>
                      <div className="carousel-item">
                          <img src={require("./images/slider1.jpg")} className="d-block w-100" alt="..." height={"700em"}/>
                      </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                          data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"/>
                      <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                          data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"/>
                      <span className="visually-hidden">Next</span>
                  </button>
              </div>
          </div>

          <div className="row my-4">
              <h2 className={"text-center"}>Нашите услуги</h2>
          </div>

          <div className="row mb-5">
              <div className="col">
                  <div className="card">
                      <img src={require("./images/bulgarian_russian.jpg")} className="card-img-top" alt="..."/>
                      <div className="card-body">
                          <h5 className="card-title">Преводи от Български на Руски</h5>

                      </div>
                  </div>
              </div>
              <div className="col">
                  <div className="card">
                      <img src={require("./images/bulgarian_russian.jpg")} className="card-img-top" alt="..."/>
                          <div className="card-body">
                              <h5 className="card-title">Преводи от Руски на Български</h5>
                          </div>
                  </div>
              </div>
          </div>

          {/*<div className="row bg-light text-center text-white">*/}
          {/*        <div className="container p-4 pb-0">*/}
          {/*            <section className="mb-4">*/}
          {/*                <a*/}
          {/*                    className="btn btn-primary btn-floating m-1"*/}
          {/*                    style="background-color: #3b5998;"*/}
          {/*                    href="#"*/}
          {/*                    role="button"*/}
          {/*                >*/}
          {/*                    <i className="bi bi-facebook"/>*/}
          {/*                </a>*/}

          {/*                <a*/}
          {/*                    className="btn btn-primary btn-floating m-1"*/}
          {/*                    style="background-color: #55acee;"*/}
          {/*                    href="#"*/}
          {/*                    role="button"*/}
          {/*                ><i className="bi bi-twitter"/></a>*/}

          {/*                <a*/}
          {/*                    className="btn btn-primary btn-floating m-1"*/}
          {/*                    style="background-color: #ac2bac;"*/}
          {/*                    href="#"*/}
          {/*                    role="button"*/}
          {/*                ><i className="bi bi-instagram"/></a>*/}
          {/*            </section>*/}
          {/*        </div>*/}
          {/*        <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">*/}
          {/*            © 2022 Copyright:*/}
          {/*            <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>*/}
          {/*        </div>*/}
          {/*</div>*/}
      </div>
  );
}

export default App;
