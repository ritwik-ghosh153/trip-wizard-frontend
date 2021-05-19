import React, { useState, useEffect } from 'react'
import ToggleButton from './ToggleButton'
import PlaceDetails from './PlaceDetails'

const Place = ({place, onRemove, len}) => {
  const [showDetails, toggleShowDetails] = useState(false)
  const onToggle =()=>{
    console.log(showDetails)
    toggleShowDetails(!showDetails)
  }
  const formatTimeArrival =(mins)=>{
    const hours= Math.floor(mins/60)
    const minutes = Math.round(mins-60*hours)
    const value= (hours > 0? hours + (hours>1?' hours ':' hour '):(''))+(minutes > 0? minutes + (minutes>1?' minutes':' minute'):(''))
    return value
  }
  const formatTimeSpent =(mins)=>{
    mins=Math.round(mins/10)*10
    console.log(mins)
    const hours= Math.floor(mins/60)
    const minutes = Math.round(mins-60*hours)
    const value= (hours > 0? hours + (hours>1?' hours ':' hour '):(''))+(minutes > 0? (minutes+(minutes === 1? ' minute':' minutes')):'')
    return value
  }
  return (
    <div className="place">
      {place.arrival > 0?
      <div>
        <div className='vl'></div>
        <p>🚌 = {formatTimeArrival(place.arrival)} to...</p>
        <div className='vl'></div>
      </div>
      :
      <></>}
      <div className='row'>
        <h4 className='col-md-6 place-name'>{place.placeName}</h4>
        <p className='col-sm-4 time-spent'>(⏰ {formatTimeSpent(place.time)})</p>
      </div>
      <i className='categories'>{place.categories}</i>
      <p>{place.night==='true'?'🛏 call it a night':''}</p>
      <ToggleButton text={showDetails?'Hide':'Show'+' details'} onClick={onToggle} small={true}/>
      
      <button className='button btn btn-outline-danger btn-sm' disabled={len===1} onClick={()=>{
      onRemove(place.xid)}}>
    Remove
    </button>
    {showDetails?<PlaceDetails xid={place.xid}/>:<></>}
    </div>
  )
}

export default Place
