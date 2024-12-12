import React, {useState, useEffect} from 'react';

const MultipleReturn = () => {

  const [user, setUser] = useState([]);
  const[isLoading, setLoading] = useState(true);
  const[error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try{
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setUser(data);
        setLoading(false);
      }
      catch(error){
        setError(error);
        setLoading(false);
      }
    }
    fetchUsers();
  },[]);

  if(isLoading){
    return <p>Loading...</p>;
  }
  if(error){
    return <p>Error:{error.message}</p>;
  }
  return (
    <div>
      <h1>Use List</h1>
      <ul>
        {
            user.map(user => {
                return <li key ={user.id}><a href={user.html_url}>{user.login}</a> </li>
            })
        }
      </ul>
    </div>
  )
}

export default MultipleReturn;
