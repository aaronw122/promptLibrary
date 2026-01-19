import Tags from './tags'

const Prompt = ({ title, content, username, tags, source, likes }) => {
  return (
    <div style={{ display:"flex", flexDirection: "column" }}>
      <h3>{title}</h3>
      <p>{content}</p>
      <small><Tags tags={tags}/></small>
      <div style={{ display:"flex", flexDirection: "row",  }}>
        <p>{username}</p>
        <a href={source}>Source</a>
        <p>{likes}</p>
      </div>
      -------------------------------------------
    </div>
  )
}

export default Prompt
