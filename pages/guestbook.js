/* eslint-disable prettier/prettier */

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getGuestbook, createGuestbookEntry } from './api/guestbook'
import { useUser } from '@auth0/nextjs-auth0/client'
import Login from '@/components/Login'

export default function Guestbook() {
  const [entries, setEntries] = useState([]) 
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()
  const { isAuthenticated, user } = useUser()

  useEffect(() => {
    async function fetchData() {
      const data = await getGuestbook()
      setEntries(data)
    }
    if (isAuthenticated) fetchData()
  }, [isAuthenticated])

  async function handleSubmit(e) {
    e.preventDefault()
    if (isAuthenticated) {
      // check user roles or permissions
      await createGuestbookEntry({ name, message }, user.sub)
      router.reload()
    }
  }

  if (!isAuthenticated) {
    return <Login />
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Leave a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            {entry.name} - {entry.message}
          </li>
        ))}
      </ul>
    </div>
  )
}
