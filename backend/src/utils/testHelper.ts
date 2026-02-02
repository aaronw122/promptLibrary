const Prompt = require('../models/prompt')

const multiplePrompts = [
  {
    title: 'Daily planning sprint',
    content: 'Create a 15-minute plan for the day with three priorities.',
    username: 'planner_pro',
    tags: ['productivity', 'routine'],
    source: 'internal',
    likes: 12
  },
  {
    title: 'Bug report refiner',
    content: 'Rewrite this bug report to include repro steps and expected behavior.',
    username: 'qa_helpers',
    tags: ['qa', 'writing'],
    source: 'community',
    likes: 34
  },
  {
    title: 'Customer email polish',
    content: 'Improve this email to be concise and empathetic without changing facts.',
    username: 'support_team',
    tags: ['support', 'tone'],
    source: 'support-playbook',
    likes: 7
  },
  {
    title: 'Launch checklist draft',
    content: 'Draft a launch checklist for a web app with owners and due dates.',
    username: 'ops_lead',
    tags: ['operations', 'launch'],
    source: 'ops-template',
    likes: 19
  }
]

const singlePrompt = [
  {
    title: 'Retro summary helper',
    content: 'Summarize this sprint retro into three bullets and one action item.',
    username: 'retro_host',
    likes: 4
  }
]

const blogsInDb = async () => {
  const prompts = await Prompt.find({})
  return prompts.map(prompt => prompt.toJSON())
}

module.exports = {
  multiplePrompts,
  singlePrompt,
  blogsInDb
}
