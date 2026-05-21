export default App;
function App() {
  return (
    <>
      <div className="wrapper clear">
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
          <h1 className="mb-40">Всі кросівки</h1>
          <div className="d-flex">
            <div className="card">
              <img
                src="/img/sneakers/nikeBlazerGreen.jpg"
                alt="Sneakers"
                width={133}
                height={112}
              />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Ціна:</span>
                  <b>12 999 ₴</b>
                </div>
                <button className="button">
                  <img
                    src="/icons/plus.svg"
                    alt="Plus"
                    width={11}
                    height={11}
                  />
                </button>
              </div>
            </div>
            <div className="card">
              <img
                src="/img/sneakers/nikeAirMax270.jpg"
                alt="Sneakers"
                width={133}
                height={112}
              />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Ціна:</span>
                  <b>12 999 ₴</b>
                </div>
                <button className="button">
                  <img
                    src="/icons/plus.svg"
                    alt="Plus"
                    width={11}
                    height={11}
                  />
                </button>
              </div>
            </div>
            <div className="card">
              <img
                src="/img/sneakers/nikeBlazerWhite.jpg"
                alt="Sneakers"
                width={133}
                height={112}
              />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Ціна:</span>
                  <b>12 999 ₴</b>
                </div>
                <button className="button">
                  <img
                    src="/icons/plus.svg"
                    alt="Plus"
                    width={11}
                    height={11}
                  />
                </button>
              </div>
            </div>
            <div className="card">
              <img
                src="/img/sneakers/puma.jpg"
                alt="Sneakers"
                width={133}
                height={112}
              />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Ціна:</span>
                  <b>12 999 ₴</b>
                </div>
                <button className="button">
                  <img
                    src="/icons/plus.svg"
                    alt="Plus"
                    width={11}
                    height={11}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
