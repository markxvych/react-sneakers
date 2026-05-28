import styles from "./Drawer.module.scss";
export default Drawer;
function Drawer() {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="mb-30 d-flex justify-between cu-p">
          Корзина
          <img
            className={styles.removeBtn}
            src="/icons/buttonRemove.svg"
            alt="Remove"
          />
        </h2>
        <div className={styles.items}>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{
                backgroundImage: "url(/img/sneakers/nikeAirMax270.jpg)",
              }}
              className={styles.cartItemImg}
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 ₴</b>
            </div>
            <img
              className={styles.removeBtn}
              src="/icons/buttonRemove.svg"
              alt="Remove"
            />
          </div>
          <div className="cartItem d-flex align-center">
            <div
              style={{
                backgroundImage: "url(/img/sneakers/puma.jpg)",
              }}
              className={styles.cartItemImg}
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Кроссовки Puma X Aka Boku Future Rider</p>
              <b>8 499 ₴</b>
            </div>
            <img
              className={styles.removeBtn}
              src="/icons/buttonRemove.svg"
              alt="Remove"
            />
          </div>
        </div>

        <div className={styles.cartTotalBlock}>
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
          <button className={styles.greenButton}>
            Оформити замовлення
            <img src="/icons/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
