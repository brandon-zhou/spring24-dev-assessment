import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import UserModal from "./components/UserModal";
import { Button, ChakraProvider } from "@chakra-ui/react"

// const data2 = [
//   { name: "Anom", age: 19, gender: "Male" },
//   { name: "Megha", age: 19, gender: "Female" },
//   { name: "Subham", age: 25, gender: "Male" },
// ]
function App() {
  const [data, setData] = useState<any[]>([]);

  // https://jsonplaceholder.typicode.com/users
  // http://localhost:4000/api/bog/users
  const fetchData = useCallback(async () => {
    axios
      .get("http://localhost:4000/api/bog/users")
      .then((res) => setData(res.data));
    // console.log(data);
  }, []);
  useEffect(() => {
    fetchData();
  }, []);

  // console.log("hello");
  // console.log(data);

  return (
    <ChakraProvider>
      <Router>
        <table>
          <tr>
            <th>Name</th>
            <th>Picture</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Rating</th>
            <th>Status</th>
            <th>Hero Project</th>
            <UserModal userkey={null} user={null} data={data} setData={setData} update={false}></UserModal>
            {/* <Button marginBottom={5}>New Entry</Button> */}
            {/* <Link to="/">Home</Link> */}
          </tr>
          {data.map((item, key) => {
            const num = key;
            return (
              // <tr key={key} onClick = {()=>alert(key)}>
              <tr key={key}>
                <td>{item.name}</td>
                <td>{<img src={item.avatar} alt="new" />}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.rating}</td>
                <td>{item.status ? "active" : "inactive"}</td>
                <td>{item.hero_project}</td>
                <Button
                  onClick={() => {
                    const temp = [...data];
                    temp.splice(key, 1);
                    setData(temp);
                  }}
                  marginBottom={5}
                >
                  Delete
                </Button>
                <UserModal
                  userkey={key}
                  user={item}
                  data={data}
                  setData={setData}
                  update={true}
                />
              </tr>
            );
          })}
        </table>
        <hr />
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

export default App;
