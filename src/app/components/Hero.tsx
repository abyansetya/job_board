import React from "react";

export default async function Hero() {
  return (
    <section className="container py-12">
      <h1 className="text-4xl font-bold text-center">
        Find your next <br /> dream job
      </h1>
      {/* <p className="text-center text-gray-600 mt-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam aliquam
        cum eligendi eaque rerum aspernatur ipsum numquam ad distinctio dolorem
        natus laudantium enim officiis
      </p> */}
      <form action="" className="flex gap-2 mt-4 max-w-md mx-auto">
        <input
          type="search"
          className="border border-gray-400 w-full py-2 px-3 rounded-md"
          placeholder="Search phrase..."
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
          Search
        </button>
      </form>
    </section>
  );
};
