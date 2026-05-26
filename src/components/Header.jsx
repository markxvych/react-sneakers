export default Header;
function Header() {
  return (
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
  );
}
