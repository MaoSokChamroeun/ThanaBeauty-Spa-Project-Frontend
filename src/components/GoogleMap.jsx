import React from 'react'

const GoogleMap = () => {
  return (
    <div className='w-full h-[500px]'>
      <iframe
            title="Location Map"
            className="w-full h-full border-0"
            src="https://maps.google.com/maps?q=11.522890,104.803582&z=16&output=embed"
            allowFullScreen
          ></iframe>
    </div>
  )
}

export default GoogleMap
