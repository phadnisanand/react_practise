import React, { useState, useEffect } from 'react';
function UseEffectDemo(props) {
    const [data, setData] = useState(null);
    useEffect(() => {
        // Fetch data from an API
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => response.json())
          .then((result) => setData(result))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);

    return (
        <div>
        {data ? (
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    )
}
export default UseEffectDemo;