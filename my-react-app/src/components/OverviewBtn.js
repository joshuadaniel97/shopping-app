import React from 'react'
import {useNavigate} from 'react-router-dom'
function OverviewBtn(props) {
    const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('basket-overview')}>Overview</button>
    </div>
  )
}

export default OverviewBtn
