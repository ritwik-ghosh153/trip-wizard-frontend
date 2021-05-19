import SuggestionsPlace from './SuggestionsPlace'

const Suggestions = ({suggestiions, onAddSuggestion}) => {
    return (<div>
        <h3>Suggestions</h3>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Place</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
            {suggestiions.map((place, index)=>(
                
                    <SuggestionsPlace key={index} place={place} onAddSuggestion={onAddSuggestion}/>
            ))}
            </tbody>
        </table>
        </div>
    )
}

export default Suggestions
