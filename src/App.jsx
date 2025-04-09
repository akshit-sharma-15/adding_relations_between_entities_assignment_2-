import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    image: "https://storage.googleapis.com/shy-pub/283527/1700032013679_SKU-0302_0.jpg",
    avgRating: 4.2,
    totalRatings: 10
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and notifications.",
    image: "https://rukminim2.flixcart.com/image/850/1000/ku8pbbk0/smartwatch/n/6/6/ios-mkht3hn-a-apple-yes-original-imag7eqy2wthytgz.jpeg?q=90&crop=false",
    avgRating: 3.8,
    totalRatings: 15
  },
  {
    id: 3,
    name: "Portable Speaker",
    description: "Powerful sound in a compact design.",
    image: "https://images.ctfassets.net/javen7msabdh/5Qrb9qxl1jUeQGBRBzJjdv/06ccd3943d89734994a54cb7e61f4a5e/woburn-iii-front-mobile-1.jpeg",
    avgRating: 4.5,
    totalRatings: 8
  }
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          const newTotalRatings = product.totalRatings + 1;
          const newAvgRating =
            ((product.avgRating * product.totalRatings) + newRating) / newTotalRatings;

          return {
            ...product,
            avgRating: newAvgRating,
            totalRatings: newTotalRatings,
          };
        }
        return product;
      })
    );
  };

  return (
      <div className="app-wrapper">
        <h1 className="app-title">Product Ratings</h1>
        <div className="product-row">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onRatingSubmit={handleRatingSubmit}
            />
          ))}
        </div>
      </div>
  );
}

export default App;
