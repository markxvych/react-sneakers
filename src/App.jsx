import Card from "./components/Card.jsx";

export default App;
function App() {
  return (
    <>
      <div className="wrapper clear">
        <div style={{ display: "none" }} className="overlay">
          <div className="drawer">
            <h2 className="mb-30 d-flex justify-between cu-p">
              Корзина
              <img
                className="removeBtn"
                src="/icons/buttonRemove.svg"
                alt="Remove"
              />
            </h2>
            <div className="items">
              <div className="cartItem d-flex align-center mb-20">
                <div
                  style={{
                    backgroundImage:
                      "url(../public/img/sneakers/nikeAirMax270.jpg)",
                  }}
                  className="cartItemImg"
                ></div>
                <div className="mr-20 flex">
                  <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 ₴</b>
                </div>
                <img
                  className="removeBtn"
                  src="/icons/buttonRemove.svg"
                  alt="Remove"
                />
              </div>
              <div className="cartItem d-flex align-center">
                <div
                  style={{
                    backgroundImage: "url(../public/img/sneakers/puma.jpg)",
                  }}
                  className="cartItemImg"
                ></div>
                <div className="mr-20 flex">
                  <p className="mb-5">Кроссовки Puma X Aka Boku Future Rider</p>
                  <b>8 499 ₴</b>
                </div>
                <img
                  className="removeBtn"
                  src="/icons/buttonRemove.svg"
                  alt="Remove"
                />
              </div>
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Разом:</span>
                  <div></div>
                  <b>21 498 ₴</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 ₴</b>
                </li>
              </ul>
              <button className="greenButton">
                Оформити замовлення
                <img src="/icons/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        </div>

        <header className="d-flex justify-between align-center p-40">
          <div className="d-flex align-center">
            <img src="/img/headerLogo.png" width={40} height={40} />

            <div>
              <h3 className="text-uppercase">React Sneakers</h3>
              <p className="opacity-5">Магазин найкращих кросівок</p>
            </div>
          </div>
          <ul className="d-flex">
            <li className="mr-30">
              <img src="/icons/trash.svg" width={18} height={18} />
              <span>1205 ₴</span>
            </li>
            <li>
              <img src="/icons/user.svg" width={18} height={18} />
            </li>
          </ul>
        </header>
        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>Всі кросівки</h1>
            <div className="search-block d-flex">
              <img src="/icons/search.svg" alt="Search" />
              <input placeholder="Пошук..." />
            </div>
          </div>

          <div className="d-flex">
            <Card></Card>
          </div>
        </div>
      </div>
    </>
  );
}
