function Services() {
  return (
    <div className="bg-gray-100 mt-[88px] flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800">Users</h2>
          <p className="text-3xl font-bold text-indigo-500 mt-2">1,234</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800">Revenue</h2>
          <p className="text-3xl font-bold text-green-500 mt-2">$50,000</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800">Orders</h2>
          <p className="text-3xl font-bold text-blue-500 mt-2">500</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
