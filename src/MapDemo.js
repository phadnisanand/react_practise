import { useState } from 'react';
function MapDemo(props) {
    // var filteredCars;
    const [ totalprice, setTotalPrice] = useState(0);
    const [cars, setMyCar] = useState([
        {id: 1, brand: 'Ford', price :10},
        {id: 2, brand: 'BMW', price :10},
        {id: 3, brand: 'Audi', price :20}
    ]);
    


    const shoppingCart = [
        {
          id: 1,
          product: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
          qty: 1,
          price: 109.95,
        },
        {
          id: 2,
          product: 'Mens Casual Premium Slim Fit T-Shirts ',
          qty: 1,
          price: 22.3,
        },
        {
          id: 3,
          product: 'Mens Cotton Jacket',
          qty: 2,
          price: 55.99,
        },
        {
          id: 4,
          product: 'Mens Casual Slim Fit',
          qty: 1,
          price: 15.99,
        },
      ];

    const filterhandler = () => {
        setMyCar(cars.filter(car => car.price === 10));
    }

    const filterreduce = () => {
        let total = shoppingCart.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.qty * currentValue.price;
          }, 0);
          console.log(total);
          setTotalPrice(total);

    }
    return (
        <>
            <h1>Map demo</h1>
            <ul>
                {cars && cars.map((car) => <li key={car.id}>{car.brand}</li>)}
            </ul>

            <h1>Filers demo</h1>
            <input type="button" name="fiterdemo" value="Show filter data" onClick={filterhandler} />
            Total price {totalprice}
            
            <input type="button" name="reducedemo" value="Show total Price" onClick={filterreduce} />
        
        </>
    )
}
export default MapDemo;
