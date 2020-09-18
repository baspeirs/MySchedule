import React, {useState} from "react";
import API from "../../utils/API";

export default function Login(props) {
    const [userState, setUserState] = useState({
        username: "",
        password: "",
        error: "",
        display: false,
        redirect: "/",
        loggedIn: true
    })

    const login = e => {
        e.preventDefault();
        API.login({
            username: userState.username.toLowerCase(),
            password: userState.password
        })
            .then(res => {
                if (res.data.message) {
                    setUserState({
                        error: res.data.message
                    });
                } else {
                    console.log("login successful")
                    props.isAuthorized();
                    setUserState({ ...userState, loggedIn: true })
                }
            })
            .catch(err => {
                console.log(err);
                setUserState({ error: "A server error has occured." });
            });

        setUserState({ password: "" });
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUserState({
            ...userState,
            [name]: value.trim()
        });
    };
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" name="username" value={userState.username} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" name="password" value={userState.password}  onChange={handleInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={login}>Submit</button>
            </form>
        </div>
    )
}