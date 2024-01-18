import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";

function Notes(){
    const [data, setData] = useState<any[]>([]);

    const fetchData = useCallback(async () => {
      axios
        .get("http://localhost:4000/api/bog/users")
        .then((res) => setData(res.data));
    }, []);
    useEffect(() => {
        fetchData();
      }, [fetchData]);
    let params = useParams();
    var user = data.filter((item) => item.id==params["userid"]);
  return (
    <div>
        <p style={{textAlign:"center"}}>
            {user[0]?.name + " - Notes" ||""}<br/>
            {user[0]?.notes || ""}<br/>
            <Link to="/" style={{color:"blue", textDecoration:"underline"}}> Home </Link>
        </p>
    </div>
  );
}
  
  
  export default Notes;