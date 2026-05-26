export default Card;
function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/icons/buttonHeart.svg" alt="Unliked" />
      </div>
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
          <img src="/icons/plus.svg" alt="Plus" width={11} height={11} />
        </button>
      </div>
    </div>
  );
}
