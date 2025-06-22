import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=>navigate("/register")}>Register!</button>
        <button onClick={()=>navigate("/private-page")}>PrivatePage</button>
    </div>
  )
}

export default Dashboard