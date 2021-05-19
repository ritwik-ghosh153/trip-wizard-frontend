import City from './City'
const Itinerary = ({itinerary, onRemove}) => {
  return (
    <div>{itinerary.map((city, index)=>(
      <City key={index} city={city} onRemove={onRemove} len={itinerary.length}/>
    ))}
    </div>
  )
}

export default Itinerary
