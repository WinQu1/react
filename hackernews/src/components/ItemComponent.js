const Item = ({ item, onRemoveItem }) => (
    <div className = 'item'> 
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <button 
            type='button' 
            onClick={() => onRemoveItem(item)}
            className = 'button button__small'
        >
          Dismiss
        </button>
      </span>
    </div>
  )

export default Item