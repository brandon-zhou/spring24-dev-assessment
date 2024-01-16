import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
// const data2 = [
//   { name: "Anom", age: 19, gender: "Male" },
//   { name: "Megha", age: 19, gender: "Female" },
//   { name: "Subham", age: 25, gender: "Male" },
// ]
function App() {
  const [data, setData] = useState<any[]>([])
  // https://jsonplaceholder.typicode.com/users
// http://localhost:4000/api/bog/users
  const fetchData = useCallback(async () => {
    axios.get("http://localhost:4000/api/bog/users").then((res) => setData(res.data));
    // console.log(data);
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData])

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((res) => res.json())
  //   .then(d => setData(d))
  //   .catch((err) => console.log(err))
  // })

  console.log("hello");
  console.log(data);
  return (
    <div className="App">

      {/* <ul>
        {data.map((list, index) => (
          <li key = {index} > {list.id} | {list.name}</li>
        ))}
      </ul> */}
      <table>
                <tr>
                    <th>Name</th>
                    <th>Picture</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Rating</th>
                    <th>Status</th>
                    <th>Hero Project</th>
                </tr>
                {data.map((item, key) => {
                    return (
                        <tr key={key}>
                            <td>{item.name}</td>
                            <td>{<img 
      src={item.avatar}
      alt="new"
      />}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.rating}</td>
                            <td>{item.status ? "active" : "inactive"}</td>
                            <td>{item.hero_project}</td>
                            <button onClick = {() => {alert(key);
                                  const temp = [...data];
                                  temp.splice(key,1);
                                  setData(temp); console.log(data)}}>Delete</button>

                        </tr>
                    )
                })}
            </table>
    </div>
  );
}



export default App;
