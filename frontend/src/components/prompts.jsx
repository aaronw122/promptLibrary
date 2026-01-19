import Prompt from './prompt'

const Prompts = ({ prompts }) => {
  console.log('prompts', prompts)
  return (
    <div>
      {prompts.map(prompt => (
        <Prompt key={prompt.id} title={prompt.title} content={prompt.content}
          username={prompt.username} source={prompt.source} tags={prompt.tags} likes={prompt.likes} />
      ))}
    </div>
  )
}

export default Prompts
