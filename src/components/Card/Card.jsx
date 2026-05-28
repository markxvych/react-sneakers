import styles from "./Card.module.scss";
export default Card;
function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/icons/buttonHeart.svg" alt="Unliked" />
      </div>
      <img src={props.imageUrl} alt="Sneakers" width={133} height={112} />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Ціна:</span>
          <b>{props.price}</b>
        </div>
        <button className={styles.button}>
          <img src="/icons/plus.svg" alt="Plus" width={11} height={11} />
        </button>
      </div>
    </div>
  );
}
