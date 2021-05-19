import { useState } from 'react'
import Multiselect from './Multiselect'
import RadioInput from './RadioInput'

const PlaceInput = ({ onInput }) => {

const [placeName, setPlaceName] = useState('')
const [categories, setCategories] = useState([])
const [days, setDays] = useState('')
const [pace, setPace] = useState(480)

const options = [{ label: 'Architecture' }, { label: 'Historic' }, { label: 'Natural' }, { label: 'Cultural' }, { label: 'Religion' }];

const onSubmit = (e) => {
  e.preventDefault()

  if (!placeName) {
    alert('Please add a place')
    return
  }
  let reg = /^[a-zA-Z\s]+$/
  if(!reg.test(placeName)){
    alert('Only letters allowed for place name')
    return
  }
  // if (categories.length===0) {
  //   alert('Please select a category')
  //   return
  // }
  if (!days) {
    alert('Please add days')
    return
  }
  reg = /^\d{1,2}$/
  if(!reg.test(days)){
    alert('Only numbers allowed for days')
    return
  }
  console.log(pace)
  onInput({placeName,categories,days,pace})
  console.log(categories)

}
  return (
    <div className='place-input d-flex justify-content-center'>
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label>Place</label>
        <input
          className='form-control'
          type='text'
          placeholder='Enter place name'
          value={placeName}
          onChange={(e) => setPlaceName(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label>Days</label>
        <input
          className='form-control'
          type='text'
          placeholder='Number of days'
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
    </div>
    <p>Categiories</p>
    <div className='form-check-inline'>
    <Multiselect options={options}
    onChange={data => {
      var categoriesItems=[]
      data.forEach((item)=>{categoriesItems.push(item.label.toLowerCase())})
      setCategories(categoriesItems)
    }}/>
    </div>
    <br></br>
    <p>Pace</p>
    <div className='form-check-inline'>
          
          <RadioInput label="Slow" value={360} checked={pace} setter={setPace}  />
          <RadioInput label="Medium" value={480} checked={pace} setter={setPace} />
          <RadioInput label="Fast" value={600} checked={pace} setter={setPace} />
    </div>
    <input type='submit' value='Generate Itinerary' className='btn btn-block btn-dark' />
    </form>
   </div>
  )
}

export default PlaceInput
