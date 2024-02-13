import './index.css'

const Visited = props => {
  const {VisitedDetails, clickOnRemove} = props
  const {id, imageUrl, name} = VisitedDetails

  const onRemoveVisited = () => {
    clickOnRemove(id)
  }

  return (
    <li className="list-item">
      <img className="image" src={imageUrl} alt="thumbnail" />
      <div className="name-btn-con">
        <p className="name"> {name}</p>
        <button className="remove-btn" type="button" onClick={onRemoveVisited}>
          {' '}
          Remove{' '}
        </button>{' '}
      </div>
    </li>
  )
}

export default Visited
