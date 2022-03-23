import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

function App() {
    if (!localStorage.getItem('username')) {
        return <LoginForm />
    }
    
  return (
      <ChatEngine
          height='100vh'
          projectID='585c8755-6787-4b2d-92e1-5a4a0ed00488'
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
      />
  )
}
export default App;