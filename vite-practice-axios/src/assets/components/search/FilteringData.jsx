import { useEffect, useState } from "react";

const isMatchingCharacter = (str, char) => {
  if (!str) return false;
  str = str.toLowerCase();
  char = char.toLowerCase();
  return str.includes(char);
};

export const APIWithoutUseMemo = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    const delay = 300
    const debouncing = setTimeout(() => {
      const result = products.filter((item) => {
        const { title, description, category } = item;

        if (isMatchingCharacter(title, search)) {
          return true;
        }

        if (isMatchingCharacter(description, search)) {
          return true;
        }

        if (isMatchingCharacter(category, search)) {
          return true;
        }

        return false;
      });

      setFilteredProducts(result);
    }, delay)
    return () => {
      clearTimeout(debouncing);
    };
  }, [search, products]);

  console.log("Re-render");

  return (
    <>
      <div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div>
        <h1>My Products</h1>
        <ul>
          {filteredProducts.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
