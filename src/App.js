import React from 'react';

function Food({fav}) {
  return <h1>I like {fav}</h1>;
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg',
  }, {
    name: 'Samgyeopsal',
    image: 'https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg',
  }, {
    name: 'Bibimbap',
    image: 'https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg',
  }, {
    name: 'Doncasu',
    image: 'https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg',
  }, {
    name: 'Kimbap',
    image: 'https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg',
  },
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;