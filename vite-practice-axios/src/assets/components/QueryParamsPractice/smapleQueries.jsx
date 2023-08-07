import { useSearchParams } from "react-router-dom";

export default function QueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Function to update query parameters
  const updateQueryParam = (paramKey, paramValue) => {
    // Update the query parameter in the searchParams object
    searchParams.set(paramKey, paramValue);

    // Update the URL without reloading the page
    setSearchParams(searchParams);
  };

  // Example usage: updating 'param2' to 'newvalue'
  const handleUpdateQueryParam = () => {
    updateQueryParam("param2", "newvalue");
  };

  return (
    <div>
      {/* Your component content */}
      <button onClick={handleUpdateQueryParam}>Update Query Param</button>
    </div>
  );
}
