function Updates() {
  const articles = [
    {
      id: 1,
      title: "Lorem Ipsum Dolor Sit Amet",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "January 15, 2022",
    },
  ];
  <div className="bg-gray-100">
    <div className="container mx-auto py-8">
      <h2 className="text-4xl font-bold mb-8">Latest Articles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-4">{article.title}</h3>
            <p className="text-gray-600 mb-4">{article.content}</p>
            <p className="text-gray-400 text-sm">{article.date}</p>
          </div>
        ))}
      </div>
    </div>
  </div>;
}
export default Updates;
