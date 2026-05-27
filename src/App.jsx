import { useState } from 'react'
import ProfileCard from './components/ProfileCard'
import { studentProfile } from './data/studentProfile'
import './App.css'

const App = () => {
  const [isOnline, setIsOnline] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [likes, setLikes] = useState(0)

  const toggleStatus = () => setIsOnline((currentStatus) => !currentStatus)
  const toggleTheme = () => setIsDarkMode((currentMode) => !currentMode)
  const increaseLikes = () => setLikes((totalLikes) => totalLikes + 1)

  return (
    <main className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <ProfileCard
        profile={studentProfile}
        isOnline={isOnline}
        isDarkMode={isDarkMode}
        likes={likes}
        onToggleStatus={toggleStatus}
        onToggleTheme={toggleTheme}
        onIncreaseLikes={increaseLikes}
      />
    </main>
  )
}

export default App
