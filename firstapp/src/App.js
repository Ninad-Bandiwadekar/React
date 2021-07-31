import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  return (
    <div>
      <MyRegisterComponent />
    </div>
  );
}

function MyRegisterComponent() {
  let [userList, setUserList] = useState([
    // {id:1,name:"rahul",email:"rahul@gmail.com",mobile:"2121"},
    // {id:2,name:"sachin",email:"sachin@gmail.com",mobile:"1121"},
  ]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const usernameChangeHandler = (e) => setUsername(e.target.value);
  const pswdChangeHandler = (e) => setPassword(e.target.value);
  const emailChangeHandler = (e) => setEmail(e.target.value);
  const mobileChangeHandler = (e) => setMobile(e.target.value);

  // useEffect(() => {
  //   realAllUser();
  // }, []);

  // const realAllUser = async () => {
  //   let url = "http://localhost:4000/user-list";
  //   const list = await axios.get(url);
  //   setUserList(list);
  // };

  const addNewUser = async () => {
    const newUser = {
      // id:userList.length+1,
      username: username,
      pswd: password,
      email: email,
      mobile: mobile,
    };
    const newUserList = [newUser, ...userList];
    setUserList(newUserList);

    //MAke APi call
    let url = "http://localhost:4000/user-create";
    await axios.post(url, { ...newUser });

    setUsername("");
    setPassword("");
  };

  

  return (
    <div>
      <h1 className="bg-dark text-light p-3 ">User Registeation </h1>

      {/** FORM COMPONENT */}
      <form className="m-2">
        <div>
          <input
            type="text"
            className="form-control form-control-lg mb-1"
            placeholder="Enter username"
            onChange={usernameChangeHandler}
          />
        </div>

        <div>
          <input
            type="password"
            className="form-control form-control-lg mb-1"
            placeholder="Enter Passwword"
            onChange={pswdChangeHandler}
          />
        </div>

        <div>
          <input
            type="email"
            className="form-control form-control-lg mb-1"
            placeholder="Enter Email"
            onChange={emailChangeHandler}
          />
        </div>

        <div>
          <input
            type="mobile"
            className="form-control form-control-lg mb-1"
            placeholder="Enter Mobile"
            onChange={mobileChangeHandler}
          />
        </div>

        <div>
          <input
            type="button"
            value="Register"
            onClick={addNewUser}
            className="btn btn-lg btn-secondary w-100"
          />
        </div>
      </form>

      {/** List BOX HERE */}
      <table className="table table-dark table-striped m-2">
        <thead>
          <tr>
            {/* <th scope="col">#ID</th> */}
            <th scope="col">USERNAME</th>
            <th scope="col">PASSWORD</th>
            <th scope="col">EMAIL</th>
            <th scope="col">MOBILE</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item) => {
            return (
              <tr>
                {/* <td>{item.id}</td> */}
                <td>{item.username}</td>
                <td>{item.pswd}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
