import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";

export default App;
function App() {
  return (
    <>
      <div className="wrapper clear">
        <Drawer></Drawer>
        <Header></Header>
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
