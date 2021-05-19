import Header from './components/Header.js'
import PlaceInput from './components/PlaceInput.js'
import Itinerary from './components/Itinerary'
import DayWiseItinerary from './components/DayWiseItinerary'
import ToggleButton from './components/ToggleButton'
import React, { useState, useEffect } from 'react'
import MapContainer from './components/MapContainer'
import Suggestions from './components/Suggestions'


  // async function getPlaces(url){
  //     const response = await fetch(url)
  //     var data = await response.json()
  //     return data
  //     }
  // var url= "http://0.0.0.0/trip?name=Kerala&categories=natural%2C%20cultural%2Chistoric&days=2"
  //     useEffect(() => {
  //       const places = async (url) => {
  //         const placesFromServer = await getPlaces(url)
  //         console.log(placesFromServer)
  //       }
  //
  //       places(url)
  //     }, [url])





const App = () => {

  const [showDayWise, toggleshowDayWise] = useState(false)
  const [id, setId] = useState('')
  const [itinerary, setItinerary] = useState([])
  const [dayWiseItinerary, setdayWiseItinerary] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(false)
  const getPlaces = async(url) =>{
    
    const response = await fetch(url)
    var data = await response.json()

    return data
  }

  const onToggle =()=>{
    toggleshowDayWise(!showDayWise)
  }
  const editSuggestions = async (url, xid)=>{
    const reqUrl= new URL(url)
    reqUrl.searchParams.append('object_id',id)
    reqUrl.searchParams.append('xid',xid)

    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ object_id: id, xid: xid })
    // }
    // console.log(requestOptions)
    const res = await fetch(reqUrl)
    var data = await res.json()
    return data

  }
  const onAddSuggestion =async (xid)=>{
    setItinerary([])
    const serverPlaces = await editSuggestions('http://0.0.0.0/add_place', xid)
    toggleshowDayWise(false)
    setItinerary(serverPlaces.city_wise_output)
    setdayWiseItinerary(serverPlaces.day_wise_output)
    setSuggestions(serverPlaces.suggestions)
  }

  const onRemoveSuggestion =async (xid)=>{
    setItinerary([])
    const serverPlaces = await editSuggestions('http://0.0.0.0/remove_place', xid)
    toggleshowDayWise(false)
    setItinerary(serverPlaces.city_wise_output)
    setdayWiseItinerary(serverPlaces.day_wise_output)
    setSuggestions(serverPlaces.suggestions)
  }

  const onInput = async (input)=>{
    setLoading(true)
    const url= new URL('http://0.0.0.0/trip')
    url.searchParams.append('placeName',input.placeName)
    if(input.categories.length>0){
      url.searchParams.append('categories',input.categories)
    }
    url.searchParams.append('pace',input.pace)
    url.searchParams.append('days',input.days)
    console.log(url.href)
    try{
      const serverPlaces = await getPlaces(url)
      toggleshowDayWise(false)
      setId(serverPlaces.id)
      setItinerary(serverPlaces.city_wise_output)
      setdayWiseItinerary(serverPlaces.day_wise_output)
      setSuggestions(serverPlaces.suggestions)
      
    }
    catch(err){
      alert('No places available for '+ input.placeName)
    }
    setLoading(false)
    
    
  }

  return (
    <div>

      <div className={loading?'overlay show':'overlay hide'}></div>
        <div className={loading?'spanner show':'spanner hide'}>
          <div className='loader'></div>
          <p><i>Generating a great trip plan for you!</i></p>
        </div>
      

      <div className='container-fluid bg-secondary'><Header/></div>
      <div className='upper'><PlaceInput onInput={onInput}/></div>
      
      <hr className='divider'></hr>
      <div className='row bg-light output'>
        <div className='col itinerary'>
        <div className='d-flex justify-content-center'>
        {itinerary.length>0?
        <ToggleButton text={showDayWise?'Show city-wise itinerary':'Show day-wise itinerary'} onClick={onToggle} small={false}/>
        :
        <></>}
        </div>
        {itinerary.length>0?
          showDayWise?
          <DayWiseItinerary dayWiseItinary={dayWiseItinerary} onRemove={onRemoveSuggestion}/>
          :
          <Itinerary itinerary={itinerary} onRemove={onRemoveSuggestion}/>
        :
        <></>}
      </div>
      {/* {itinerary.length>0?
      (<Itinerary itinerary={itinerary}/>)
      :(<></>)} */}
      <div className='col-5 right-panel'>
      {itinerary.length>0?
      (<div className='map'>
      <MapContainer itinerary={itinerary}/>
      </div>)
      :
      <></>
      
      }
      {
        suggestions.length>0 && itinerary.length>0?
        <Suggestions suggestiions={suggestions} onAddSuggestion={onAddSuggestion}/>
        :
        (
          itinerary.length?
        <div>
          No suggestions to show
        </div>
        :
        <></>
        )
      }
      </div>
      </div>
    </div>
  );
}

export default App
