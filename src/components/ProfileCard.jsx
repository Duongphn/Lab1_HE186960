import HobbiesList from './HobbiesList'
import InfoGrid from './InfoGrid'
import ProfileActions from './ProfileActions'
import StudentSummary from './StudentSummary'
import ThemeToggle from './ThemeToggle'

const ProfileCard = ({
  profile,
  isOnline,
  isDarkMode,
  likes,
  onToggleStatus,
  onToggleTheme,
  onIncreaseLikes,
}) => {
  const { avatar, fullName, studentId, className, major, hobbies } = profile

  return (
    <section className="profile-card" aria-label="Student profile card">
      <div className="card-header">
        <ThemeToggle isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />
      </div>

      <img className="avatar" src={avatar} alt={`Avatar of ${fullName}`} />

      <StudentSummary fullName={fullName} studentId={studentId} isOnline={isOnline} />
      <InfoGrid className={className} major={major} />
      <HobbiesList hobbies={hobbies} />
      <ProfileActions
        isOnline={isOnline}
        likes={likes}
        onToggleStatus={onToggleStatus}
        onIncreaseLikes={onIncreaseLikes}
      />
    </section>
  )
}

export default ProfileCard
