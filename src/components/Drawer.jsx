export default Drawer;
function Drawer() {
  return (
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
  );
}
