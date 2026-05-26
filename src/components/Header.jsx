export default Header;
function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img
          className="mr-15"
          src="/img/headerLogo.png"
          alt="Logo"
          width={40}
          height={40}
        />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин найкращих кросівок</p>
        </div>
      </div>
      <ul>
        <li>
          <img src="/icons/trash.svg" alt="Trash" width={18} height={18} />
          <span>1205 ₴</span>
        </li>
        <li>
          <img src="/icons/heart.svg" alt="Favorite" width={18} height={18} />
          <span>Закладки</span>
        </li>
        <li>
          <img src="/icons/user.svg" alt="User" width={18} height={18} />
          <span>Профіль</span>
        </li>
      </ul>
    </header>
  );
}
