import React, { useState, useEffect } from 'react'
import ToggleButton from './ToggleButton'
import PlaceDetails from './PlaceDetails'

const SuggestionsPlace = ({place, onAddSuggestion}) => {

    const [showDetails, toggleShowDetails] = useState(false)
    const onToggle =()=>{
    console.log(showDetails)
    toggleShowDetails(!showDetails)
    }

    return (
        <tr>
            <td>
                <div className='row ml-auto'>
                    <div className='col-sm-6'>
                        <strong>{place.placeName}</strong>
                        <br></br>
                        <i className='place-categories'>{place.categories}</i>
                    </div>
                    <div>
                    <ToggleButton text={showDetails?'Hide':'Show'+' details'} onClick={onToggle} small={true}/>
                        {showDetails?<PlaceDetails xid={place.xid}/>:<></>}
                    </div>
                </div>
            </td>
            <td>
                <strong>{place.city}</strong>
            </td>
            <td>
                <button onClick={()=>{
                    onAddSuggestion(place.xid)
                }}
                className={'btn btn-sm btn-outline-success'}>
                Add place
                </button>
            </td>
        </tr>
    )
}

export default SuggestionsPlace
