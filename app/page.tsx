import Image from "next/image";
// Import the Page component correctly
import Page from "./cart/page";
import Product from "./product/product";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Amazon Clone</h1>
      </header>
      <main className="p-4">
        <section className="mb-8">
          <h2 className="text-xl text-blue-700 font-semibold">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {/* Add Product Cards Here */}
          </div>
        </section>
        <section>
          <h2 className="text-xl  text-blue-700 font-semibold">Categories</h2>
          <div className="flex gap-4 mt-4">
            {/* Add Category Cards Here */}
          </div>
        </section>
      </main>
      <Page />
      <Product />
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2023 Amazon Clone
      </footer>
    </div>
  );
}