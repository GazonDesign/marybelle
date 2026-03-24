import React from 'react'

const Logo: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <img
        src="/images/logo-dark.svg"
        alt="Mary Belle"
        style={{ height: '40px', width: 'auto' }}
      />
    </div>
  )
}

export default Logo
