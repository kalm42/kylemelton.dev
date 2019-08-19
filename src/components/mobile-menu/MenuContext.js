import React, { useState } from "react"
import PropTypes from "prop-types"

export const MenuContext = React.createContext()

export const MenuProvider = ({ children }) => {
  const [menuOpenState, setMenuOpenState] = useState(false)

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: newState => setMenuOpenState(newState.isOpen),
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
MenuProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
