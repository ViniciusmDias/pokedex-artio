import React from 'react'

import './container.sass'

const Container: React.FC = ({ children }) => {
  return (
    <main >
      {children}
    </main>
  )
}

export default Container
