import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import UserModal from "./components/UserModal";
import { Button, ChakraProvider } from "@chakra-ui/react"

function Home() {
  const [data, setData] = useState<any[]>([]);

  const fetchData = useCallback(async () => {
    axios
      .get("http://localhost:4000/api/bog/users")
      .then((res) => setData(res.data));
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ChakraProvider>
        <table>
          <tr>
            <th>Name</th>
            <th>Picture</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Rating</th>
            <th>Status</th>
            <th>Hero Project</th>
            <th>
            <UserModal userkey={null} user={null} data={data} setData={setData} update={false}></UserModal>
            </th>
          </tr>
          {data.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.name}<br></br>
                    <Link to={`/notes/${item.id}`} style={{color:"blue", textDecoration:"underline"}}> Notes </Link>
                </td>
                <td>{<img src={item.avatar} alt="None" />}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.rating}</td>
                <td>{item.status ? "active" : "inactive"}</td>
                <td>{item.hero_project}</td>
                <td>
                <Button
                  onClick={() => {
                    setData(data.filter(cur => cur.id !== item.id));
                    }
                  }
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
                </td>
              </tr>
            );
          })}
        </table>
        <hr />

    </ChakraProvider>
  );
}

export default Home;
