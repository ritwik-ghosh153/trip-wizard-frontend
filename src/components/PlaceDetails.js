import React, { useState, useEffect } from 'react'

const OTMKEY='5ae2e3f221c38a28845f05b646e1344b7601d109be32a7f5a3d7b817'
const placeUrl = 'https://api.opentripmap.com/0.1/en/places/xid/'
const PlaceDetails = ({xid}) => {

  const [placeImage, setPlaceImage] = useState('')
  const [placeData, setPlaceData] = useState('')
  const [placeName, setPlaceName] = useState('')

  const getPlaceDetails = async(xid) => {
    const url = new URL(placeUrl+xid)
    url.searchParams.append('apikey',OTMKEY)
    const res = await fetch(url)
    const data = await res.json()
    return data
  }
  useEffect(()=>{
    const getDetails = async (xid) => {
      const details = await getPlaceDetails(xid)
      setPlaceImage(details.preview.source)
      setPlaceData(details.wikipedia_extracts.text)
      setPlaceName(details.name)
    }
    getDetails(xid)
  }, [xid])
  return (
    <div className='place-details'>
    <img src={placeImage} alt= {placeName} className='img-thumbnail'/>
    <p className='place-data'>{placeData}</p>
    </div>
  )
}

export default PlaceDetails
