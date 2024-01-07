function Products() {
    return (
        <div className="bg-gray-100 min-w-screen min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-3 rounded-lg shadow-md ">
        {/* Product 1 */}
        <div className="mb-2">
          <img
            src="https://placekitten.com/800/600" // Replace with your product image URL
            alt="Product"
            className="w-full h-48 object-cover mb-4 rounded-lg"
          />
          <img
            src="https://placekitten.com/800/600" // Replace with your product image URL
            alt="Product"
            className="w-full h-48 object-cover mb-4 rounded-lg"
          />

          <h1 className="text-2xl font-bold mb-2">Stylish Product Name</h1>
          <p className="text-gray-600 mb-4">High-quality description of the product goes here.</p>

          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-black">$99.99</span>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none">
              Add to Cart
            </button>
          </div>

          <div className="border-t pt-4">
            <h2 className="text-xl font-bold mb-2">Product Details</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* Add more product details as needed */}
          </div>
        </div>

        {/* Product 2 */}
        <div className="mb-4">
          <img
            src="https://placekitten.com/800/600" // Replace with your product image URL
            alt="Product"
            className="w-full h-48 object-cover mb-4 rounded-lg"
          />
<img
            src="https://placekitten.com/800/600" // Replace with your product image URL
            alt="Product"
            className="w-full h-48 object-cover mb-4 rounded-lg"
          />
          
          <h1 className="text-2xl font-bold mb-2">Another Stylish Product</h1>
          <p className="text-gray-600 mb-4">Description for the second product goes here.</p>

          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-black">$79.99</span>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none">
              Add to Cart
            </button>
          </div>

          <div className="border-t pt-4">
            <h2 className="text-xl font-bold mb-2">Product Details</h2>
            <p className="text-gray-700">
              Another set of details for the second product Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            {/* Add more product details as needed */}
          </div>
        </div>
      </div>
    </div>
      );
    }
  export default Products;
  