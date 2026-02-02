import { Router } from 'express'
const promptsRouter = Router()
import Prompt from '../models/prompt'

type PromptType = {
  _id: string,
  title: string,
  content: string,
  author: string,
  tags: string[],
  source: string,
  likes: number
}

promptsRouter.get('/', async (request, response) => {
  const prompts = await Prompt.find({})
  response.json(prompts)
})

promptsRouter.post('/', async (request, response, next) => {
  const { title, content, author, tags, source, likes, createdAt} = request.body


  const prompt = new Prompt({
    title: title,
    content: content,
    author: author,
    tags: tags,
    source: source,
    likes: likes || 0,
    createdAt: new Date()
  })

  const savedPrompt = await prompt.save()
  response.json(savedPrompt)

})

promptsRouter.delete('/:id', async(request, response, next) => {
  await Prompt.findByIdAndDelete(request.params.id)
  response.status(204).end()
})

promptsRouter.put('/api/notes/:id', async (request, response, next) => {
  const body = request.body

  const update: PromptType = {};

  if (typeof body.title !== 'undefined') update.title = body.title
  if (typeof body.content !== 'undefined') update.content = body.content
  if (typeof body.author !== 'undefined') update.author = body.username
  if (typeof body.tags !== 'undefined') update.tags = body.tags
  if (typeof body.source !== 'undefined') update.source = body.source
  if (typeof body.likes !== 'undefined') update.likes = body.likes


  const prompt = await Prompt.findByIdAndUpdate(
    request.params.id,
    { $set: update },
    {runValidators: true, new: true, context: 'query'}
  )
  if (!prompt) {
    return response.status(404).end()
  }
  response.json(prompt)
})

export default promptsRouter
