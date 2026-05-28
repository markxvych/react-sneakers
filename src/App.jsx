import Card from "./components/Card/Card.jsx";
import Header from "./components/Header/Header.jsx";
import Drawer from "./components/Drawer/Drawer.jsx";

export default App;
function App() {
  const arr = [
    {
      title: "nike blazer",
      price: "9 999",
      imageUrl: "/img/sneakers/nikeBlazerGreen.jpg",
    },
    {
      title: "Мужские Кроссовки Nike Air Max 270",
      price: "8 499",
      imageUrl: "/img/sneakers/nikeAirMax270.jpg",
    },
  ];
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
            {arr.map((el) => (
              <Card
                title={el.title}
                price={el.price}
                imageUrl={el.imageUrl}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
