import PropTypes from "prop-types"

const Header = ({text="Feedback UI", bgColor="rgba(0, 0, 0, 0.4)", textColor="#ff6a95"}) => {
  const styles = {
    backgroundColor: bgColor,
    color: textColor
  }
  return (
    <header style={styles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.prototype = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

export default Header