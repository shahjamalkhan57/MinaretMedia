"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'
import { Button } from './ui/button'

interface Message {
  text: string
  isUser: boolean
  timestamp: Date
}

interface TypingIndicatorProps {
  visible: boolean
}

interface FormattedTextProps {
  text: string
  className?: string
}

const FormattedText = ({ text, className = "" }: FormattedTextProps) => {
  const cleanText = text
    .replace(/\\n/g, '\n')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/_(.*?)_/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/^#+\s+(.*)/gm, '<strong>$1</strong>')
    .replace(/^\*\s+(.*)/gm, '<li>$1</li>')
    .replace(/<li>(.*?)<\/li>/g, '<ul><li>$1</li></ul>')

  return (
    <div
      className={`${className} whitespace-pre-line`}
      dangerouslySetInnerHTML={{ __html: cleanText }}
    />
  )
}

const TypingIndicator = ({ visible }: TypingIndicatorProps) => {
  if (!visible) return null

  return (
    <div className="flex items-center space-x-2 p-4">
      <motion.div
        className="h-2 w-2 rounded-full bg-blue-400"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.div
        className="h-2 w-2 rounded-full bg-blue-400"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
      />
      <motion.div
        className="h-2 w-2 rounded-full bg-blue-400"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
      />
    </div>
  )
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      text: input,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = input
    setInput("")
    setIsTyping(true)

    try {
      const response = await fetch(
        "https://orangepeeldust.app.n8n.cloud/webhook/bf6519cf-c81b-4da2-b594-6e41289c1aa9",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: currentInput }),
        }
      )

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

      let botReply = ""
      const responseText = await response.text()

      try {
        const data = JSON.parse(responseText)
        let extractedText = ""

        if (Array.isArray(data)) {
          if (data.length > 0) {
            const firstItem = data[0]
            extractedText = firstItem.output || firstItem.message || firstItem.text || firstItem.response || firstItem.reply || ""
          }
        } else if (typeof data === 'object' && data !== null) {
          extractedText = data.output || data.message || data.text || data.response || data.reply || ""
        } else {
          extractedText = String(data)
        }

        botReply = extractedText.replace(/\\n/g, '\n').trim()
      } catch {
        botReply = responseText.replace(/\\n/g, '\n').trim()
      }

      if (!botReply || botReply.trim() === "") {
        botReply = "I received your message but got an empty response. Please try again."
      }

      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        {
          text: botReply,
          isUser: false,
          timestamp: new Date(),
        },
      ])
    } catch (error) {
      console.error("Webhook error:", error)
      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I'm having trouble connecting right now. Please try again later.",
          isUser: false,
          timestamp: new Date(),
        },
      ])
    }
  }

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date)
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 h-12 w-12 md:h-14 md:w-14 rounded-full bg-blue-600 p-0 shadow-lg hover:bg-blue-700 z-40"
        aria-label="Open chat"
      >
        <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed inset-x-4 bottom-4 top-16 md:inset-auto md:bottom-20 md:right-4 md:w-96 md:h-[600px] z-50 rounded-2xl bg-white shadow-2xl dark:bg-gray-800 flex flex-col"
          >
            <div className="flex items-center justify-between border-b p-4 dark:border-gray-700 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900/50">
                  <MessageCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-base md:text-lg font-semibold">Chat with us</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full"
              >
                <X className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>

            <div 
              ref={chatContainerRef} 
              className="flex-1 overflow-y-auto scroll-smooth p-4 min-h-0"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 md:px-4 py-2 text-sm md:text-base ${
                      message.isUser
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
                    }`}
                  >
                    {message.isUser ? (
                      <p className="break-words">{message.text}</p>
                    ) : (
                      <FormattedText text={message.text} />
                    )}
                    <div
                      className={`mt-1 text-xs ${
                        message.isUser
                          ? "text-blue-100"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
              <TypingIndicator visible={isTyping} />
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t p-4 dark:border-gray-700 flex-shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 rounded-full border px-3 md:px-4 py-2 text-sm md:text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
                <Button
                  onClick={handleSend}
                  className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-blue-600 p-0 hover:bg-blue-700"
                >
                  <Send className="h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}