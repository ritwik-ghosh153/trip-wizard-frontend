import Day from './Day'

const DayWiseItinerary = ({dayWiseItinary, onRemove}) => {
    return (
        <div className='day-wise-itinary'>{dayWiseItinary.map((day, index)=>(
          <Day key={index} day={day} onRemove={onRemove} len={dayWiseItinary.length}/>
        ))}
        </div>
      )
}

export default DayWiseItinerary
