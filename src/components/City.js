import Place from './Place'

const City = ({city, onRemove, len}) => {
  return (
    <div className="city">
      <h2 className='city-name'>{city.city}</h2>
      {
        city.nights!==0?(<i className='nights'>{city.nights>1? (`${city.nights} nights`):(`${city.nights} night`)}</i>)
        :(<p className='nights'>In Transit</p>)
      }
      {city.places.map((place)=>(
        <Place key={place.xid} place={place} onRemove={onRemove} len={len>1?2:(city.places.length>1?2:1)}/>
      ))}
    </div>
  )
}

export default City
