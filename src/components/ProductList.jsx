import ProductCard from "./ProductCard";
function ProductList(){
  const products = [
{ id: 1, title: "Laptop", price: 50000, category: "Electronics",
inStock: true, image: "https://i.pinimg.com/1200x/98/31/89/98318942b40bb1d2734a9cac3a0269a9.jpg" },
{ id: 2, title: "T-Shirt", price: 500, category: "Clothing",
inStock: false, image: "https://i.pinimg.com/736x/b3/b7/e8/b3b7e8cbf61758421349a4073acd7722.jpg" },
{ id: 3, title: "Book", price: 3300, category: "Books", inStock:
true, image: "https://i.pinimg.com/736x/bf/95/20/bf952063210f579f1b3d5b071ba63a68.jpg" },
{ id: 4, title: "Headphones", price: 1200, category: "Electronics",
inStock: true, image: "https://i.pinimg.com/736x/43/15/ae/4315ae69df9daa2550203db798b0d77f.jpg" },
{ id: 5, title: "Shoes", price: 700, category: "Clothing", inStock:
false, image: "https://i.pinimg.com/1200x/96/1e/2c/961e2ca411382240dc74482f07278c07.jpg" },
{ id: 6, title: "Bags", price: 2200, category: "Books", inStock:
true, image: "https://i.pinimg.com/736x/72/ea/da/72eada6a807e145b74c968e07a1f074c.jpg" },
];

  return (
    <div className="grid grid-cols-3 gap-6 p-20 py-15 bg-blue-100">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );

}
export default ProductList;