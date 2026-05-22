import { useState } from 'react'
import studentAvatar from './assets/student-avatar.jpg'
import './App.css'

const studentProfile = {
  avatar: studentAvatar,
  fullName: 'Phan Hoàng Dương',
  studentId: 'HE186960',
  className: 'FER202',
  major: 'Software Engineering',
  hobbies: ['Reading books', 'Coding UI', 'Listening to music', 'Playing badminton'],
}

const App = () => {
  const [isOnline, setIsOnline] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [likes, setLikes] = useState(0)

  const { avatar, fullName, studentId, className, major, hobbies } = studentProfile
  const statusText = `${isOnline ? 'Online' : 'Offline'}`

  const toggleStatus = () => setIsOnline((currentStatus) => !currentStatus)
  const toggleTheme = () => setIsDarkMode((currentMode) => !currentMode)
  const increaseLikes = () => setLikes((totalLikes) => totalLikes + 1)

  return (
    <main className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <section className="profile-card" aria-label="Student profile card">
        <div className="card-header">
          <button className="theme-button" type="button" onClick={toggleTheme}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <img className="avatar" src={avatar} alt={`Avatar of ${fullName}`} />

        <div className="student-summary">
          <p className={`status ${isOnline ? 'online' : 'offline'}`}>{statusText}</p>
          <h1>{fullName}</h1>
          <p className="student-id">Student ID: {studentId}</p>
        </div>

        <div className="info-grid">
          <article>
            <h2>Class</h2>
            <p>{className}</p>
          </article>
          <article>
            <h2>Major</h2>
            <p>{major}</p>
          </article>
        </div>

        <section className="hobbies" aria-labelledby="hobbies-title">
          <h2 id="hobbies-title">Hobbies</h2>
          <ul>
            {hobbies.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
        </section>

        <div className="actions">
          <button type="button" onClick={toggleStatus}>
            Set {isOnline ? 'Offline' : 'Online'}
          </button>
          <button type="button" onClick={increaseLikes}>
            Like: {likes}
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
