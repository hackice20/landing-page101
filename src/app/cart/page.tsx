import React from 'react';

const Cart = () => {
  // Static data for pizzas
  const pizzas = [
    {
      id: 1,
      name: 'Margherita',
      cost: 10,
      toppings: ['Tomato', 'Mozzarella', 'Basil'],
      image: '/pizza-main.png', // Image from the public folder
    },
    {
      id: 2,
      name: 'Pepperoni',
      cost: 12,
      toppings: ['Pepperoni', 'Cheese', 'Tomato Sauce'],
      image: '/pizza-main.png',
    },
    {
      id: 3,
      name: 'Veggie Delight',
      cost: 9,
      toppings: ['Bell Peppers', 'Onions', 'Olives', 'Cheese'],
      image: '/pizza-main.png',
    },
  ];

  return (
    <div style={styles.container}>
      <h1>Your Cart</h1>
      <div style={styles.cartItems}>
        {pizzas.map((pizza) => (
          <div key={pizza.id} style={styles.cartItem}>
            <img src={pizza.image} alt={pizza.name} style={styles.pizzaImage} />
            <div style={styles.details}>
              <h2>{pizza.name}</h2>
              <p>Cost: ${pizza.cost}</p>
              <p>Toppings: {pizza.toppings.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  cartItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'center',
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    backgroundColor: '#fff',
  },
  pizzaImage: {
    width: '150px',
    height: '150px',
    borderRadius: '10px',
  },
  details: {
    marginLeft: '1rem',
    textAlign: 'left',
  },
};

export default Cart;
