const Tags = ({tags}) => {
  return (
    <div>
      {tags.map(tag => (
          <p key={tag}>{tag}</p>
      ))
      }
    </div>
  )
}

export default Tags
