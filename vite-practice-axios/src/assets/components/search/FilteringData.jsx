import { useEffect, useMemo, useState } from "react";

export const APIWithUseMemo = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const searchIng = useMemo(() => {
    if (search === '') return products;
    const searching = products.filter((items) => {
      const { title, description } = items
      return (
        title.toLowerCase().includes(search) || description.toLowerCase().includes(search)
      )
    })
    return searching;

  }, [search, products])
  return (
    <>
      <div>
        <input value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
      </div>
      <div>
        <h1>My Products</h1>
        <ul>
          {searchIng.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
