import React from "react";
import Card from "../components/Card/Card";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://63091d67f8a20183f76ecc98.mockapi.io/orders"
        );
        // console.log(data.map((obj)=> obj.items.flat()));
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        console.log("error order");
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="mb-40 d-flex align-center justify-between">
        <h1>Мої замовлення</h1>
      </div>

      <div className="d-flex flex-wrap">
        {isLoading
          ? Array(8).fill(<Card loading={isLoading} />)
          : orders.map((item, id) => (
              <Card
                key={id}
                title={item.title}
                price={item.price}
                imgUrl={item.imgUrl}
                alt={item.alt}
                id={item.id}
                loading={isLoading}
              />
            ))}
      </div>
    </div>
  );
};
export default Orders;
