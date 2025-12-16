import React from "react";

function Login() {

  let  data= true;
  return (
    <div>
      <h2>{data?'You are onlineeeee :)':'You r Offline:('}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsam inventore maxime facilis ipsa. Suscipit, at cupiditate nisi delectus corporis, harum ipsa esse blanditiis labore placeat commodi. Assumenda, nesciunt quibusdam?</p>
    </div>
  );
}

export default Login;


export function Sample() {
  return (
    <div>
      <h2>Sample Component</h2>
      <p>This is a sample component exported from Login.jsx</p>
    </div>
  );
}