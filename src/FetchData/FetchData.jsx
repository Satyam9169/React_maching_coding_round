import React, { useEffect, useState } from "react";

export const FetchData = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts/";

  const [user, setUser] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setUser(data);

      if (!response.ok) {
        throw new Error(`Failed to fetch the data. Status ${response.status}`);
      }
    } catch (error) {
      console.log(`Error fetching the data : `, error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div>
        FetchData
        {user.map((item) => (
          <ul key={item.id}>
            <li>{item.id}</li>
            <li>{item.title}</li>
          </ul>
        ))}
      </div>
    </>
  );
};
