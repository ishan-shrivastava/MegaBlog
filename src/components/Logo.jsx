import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
      <img
        src="https://my.blog/wp-content/uploads/2024/05/13921-dotblog.png"
        alt="MegaBlog"
        style={{width: width, height: 'auto', borderRadius: 6}}
      />
    </div>
  )
}

export default Logo