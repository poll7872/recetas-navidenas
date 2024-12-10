import { useState, useEffect } from "react";
import apiClient from "../utils/api";

const useFetchUsers = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiClient.get('http://localhost:5000/api/users')
      .then(response => setUsers(response.data))
      .finally(() => setLoading(false))
  }, [])

  return { users, loading }
}

export default useFetchUsers 
