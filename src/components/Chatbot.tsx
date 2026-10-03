import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Bot, SendHorizontal, Sparkles } from 'lucide-react'
import { chatbotAnswers } from '../data/chatbot'
import { profile } from '../data/profile'
import { Section } from './Section'

type Message = {
  role: 'bot' | 'user'
  text: string
}

function resolveAnswer(question: string) {
  const normalized = question.toLowerCase()
  const matched = chatbotAnswers.find((entry) => entry.keywords.some((keyword) => normalized.includes(keyword)))

  if (matched) {
    return matched.answer
  }

  return `I can answer questions about ${profile.name}'s experience, skills, current company, AdTech work, projects and education. Try asking about his stack, current role or background.`
}

export function Chatbot() {
  const starterQuestions = useMemo(
    () => [
      "What is Garvit's experience?",
      'Which company does he work at?',
      'What technologies does he use?',
      'Tell me about his AdTech work.',
    ],
    [],
  )

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: `Ask me anything about ${profile.name}. I answer from the portfolio profile data, so the responses stay relevant and concise.`,
    },
  ])
  const [question, setQuestion] = useState('')

  const submitQuestion = (value: string) => {
    const trimmed = value.trim()
    if (!trimmed) {
      return
    }

    setMessages((current) => [
      ...current,
      { role: 'user', text: trimmed },
      { role: 'bot', text: resolveAnswer(trimmed) },
    ])
    setQuestion('')
  }

  return (
    <Section
      id="chatbot"
      eyebrow="Ask Garvit"
      title="Chatbot that answers profile questions"
      description="A local, frontend-only assistant that can respond to questions about Garvit's background, skills and work."
    >
      <div className="chatbot-panel panel">
        <div className="chatbot-header">
          <div>
            <span className="chatbot-badge">
              <Bot size={14} />
              Garvit Assistant
            </span>
            <p>Questions about experience, projects, skills, education and AdTech will be answered from portfolio data.</p>
          </div>
          <Sparkles size={18} />
        </div>

        <div className="chatbot-pills">
          {starterQuestions.map((starter) => (
            <button key={starter} type="button" className="chatbot-pill" onClick={() => submitQuestion(starter)}>
              {starter}
            </button>
          ))}
        </div>

        <div className="chatbot-messages" aria-live="polite">
          {messages.map((message, index) => (
            <motion.div
              key={`${message.role}-${index}-${message.text}`}
              className={message.role === 'user' ? 'chat-message chat-user' : 'chat-message chat-bot'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {message.text}
            </motion.div>
          ))}
        </div>

        <form
          className="chatbot-form"
          onSubmit={(event) => {
            event.preventDefault()
            submitQuestion(question)
          }}
        >
          <input
            type="text"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Ask something about Garvit..."
            aria-label="Ask a question about Garvit"
          />
          <button type="submit" className="button button-primary">
            Send <SendHorizontal size={16} />
          </button>
        </form>
      </div>
    </Section>
  )
}