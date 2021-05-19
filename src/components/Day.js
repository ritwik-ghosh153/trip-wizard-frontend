import Place from './Place'

const Day = ({day, onRemove, len}) => {
    return (
        <div className="day">
          <h1 className='day-number'>Day {day.day}</h1>
          <br></br>
          {day.places.map((place)=>(
            <Place key={place.xid} place={place} onRemove={onRemove} len={len>1?2:(day.places.length>1?2:1)}/>
          ))}
        </div>
    )
}

export default Day
