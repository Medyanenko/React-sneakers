import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";

const arr = [
  {
    title: "Чоловічі кросівки Nike Blazer Mid Suede",
    price: "1200",
    imgUrl: "/img/sneakers/1.jpg",
    alt: "Nike",
  },
  {
    title: "Жіночі кросівки Nike Blazer Mid Suede",
    price: "12500",
    imgUrl: "/img/sneakers/2.jpg",
    alt: "Nike",
  },
  {
    title: "Чоловічі кросівки Nike Blazer Mid Suede",
    price: "1100",
    imgUrl: "/img/sneakers/3.jpg",
    alt: "Nike",
  },
  {
    title: "Жіночі кросівки Nike Blazer Mid Suede",
    price: "11500",
    imgUrl: "/img/sneakers/4.jpg",
    alt: "Nike",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div>Slider</div>
      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>Всі кросівки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Пошук..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imgUrl={obj.imgUrl}
              alt={obj.alt}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
