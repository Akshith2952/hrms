import React from 'react'

const MainHome = () => {
    const userInfo = localStorage.getItem("userInfo")
    const obj = JSON.parse(userInfo)
  return (
    <div>
        {obj.email}
    </div>
  )
}

export default MainHome