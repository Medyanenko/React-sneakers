import React from "react";
import Card from "../components/Card/Card";
import axios from "axios";
import Info from "../components/Info/Info";

const Orders = () => {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://63091d67f8a20183f76ecc98.mockapi.io/orders"
        );
       // setOrders(data.map((obj)=> obj.items.flat()));
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        console.error("error order");
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="mb-40 d-flex align-center justify-between">
        <h1>Мої замовлення</h1>
      </div>

      <div className="d-flex flex-wrap">
      {(isLoading ? [...Array(12)] : orders).map((item, id) => {
          return <Card key={id} loading={isLoading} {...item} />;
        })}
        {!orders.length > 0 && !isLoading && (
          <Info
            title="У вас немає замовлень"
            description="Щоб побачити свої товари, необхідно оформити замовлення."
            img="img/smile-down.svg"
          />
        )}
      </div>
    </div>
  );
};
export default Orders;
