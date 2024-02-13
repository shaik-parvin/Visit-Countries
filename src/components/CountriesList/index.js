import './index.css'

const CountryList = props => {
  const {visitedDetails, clickOnVisitButton} = props
  const {id, name, isVisited} = visitedDetails

  const isVisitingCountry = () => {
    clickOnVisitButton(id)
  }

  return (
    <li className="list-items">
      <p className="name"> {name}</p>

      {isVisited ? (
        <p className="visited"> Visited </p>
      ) : (
        <button
          className="visit-button"
          onClick={isVisitingCountry}
          type="button"
        >
          Visit
        </button>
      )}
    </li>
  )
}
export default CountryList
