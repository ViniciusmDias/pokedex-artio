import React from 'react'

import './styles.sass'

const Container: React.FC = ({ children }) => {
  return (
    <main >
      {children}
    </main>
  )
}

export default Container
