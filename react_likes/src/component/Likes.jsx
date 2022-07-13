const Likes = (props) => {

return (
  <div>
    <p className="likes">{props.totalLikes}</p>
    <button className="plus" onClick={() => props.addLike()}>+</button>
    <button className="minus" onClick={() => props.minusLike()}>-</button>
  </div>
)
}

export default Likes