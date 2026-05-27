const ProfileActions = ({ isOnline, likes, onToggleStatus, onIncreaseLikes }) => (
  <div className="actions">
    <button type="button" onClick={onToggleStatus}>
      Set {isOnline ? 'Offline' : 'Online'}
    </button>
    <button type="button" onClick={onIncreaseLikes}>
      Like: {likes}
    </button>
  </div>
)

export default ProfileActions
