const Product = () => {
  return <div>Product Component</div>;
};

// Export the products array at the top level
export const products = [
  {
    id: '1',
    title: 'Wireless Bluetooth Headphones',
    description: 'High-quality sound with noise cancellation.',
    price: 99.99,
    image: 'https://via.placeholder.com/300x300',
  },
  {
    id: '2',
    title: 'Smart Watch Series 6',
    description: 'Track your fitness and health metrics.',
    price: 199.99,
    image: 'https://via.placeholder.com/300x300',
  },
  // Add more products as needed
];

export default Product;