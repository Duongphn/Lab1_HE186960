const StudentSummary = ({ fullName, studentId, isOnline }) => {
  const statusText = isOnline ? 'Online' : 'Offline'

  return (
    <div className="student-summary">
      <p className={`status ${isOnline ? 'online' : 'offline'}`}>{statusText}</p>
      <h1>{fullName}</h1>
      <p className="student-id">Student ID: {studentId}</p>
    </div>
  )
}

export default StudentSummary
