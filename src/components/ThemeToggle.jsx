const ThemeToggle = ({ isDarkMode, onToggleTheme }) => (
  <button className="theme-button" type="button" onClick={onToggleTheme}>
    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
  </button>
)

export default ThemeToggle
