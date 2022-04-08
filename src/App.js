import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>;
      <h4>{rating}/5.0</h4>
      <img src={picture} width="300" alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg',
    rating: 5,
  }, {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg',
    rating: 4.9,
  }, {
    id: 3,
    name: 'Bibimbap',
    image: 'https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg',
    rating: 4.8,
  }, {
    id: 4,
    name: 'Doncasu',
    image: 'https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg',
    rating: 4.7,
  }, {
    id: 5,
    name: 'Kimbap',
    image: 'https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg',
    rating: 4.6,
  },
];

/*
const renderFood = (dish) => (
  <Food
    name={dish.name}
    picture={dish.image}
  />
);


function renderFood(dish) {
  return (
    <Food
      name={dish.name}
      picture={dish.image}
    />
  );
}
*/

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;