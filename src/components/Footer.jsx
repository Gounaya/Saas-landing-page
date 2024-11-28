import React from 'react'

const Footer = () => {
  return (
    <footer className='text-center p-8 text-gray-600 text-lg border-t bg-white/20 backdrop-blur-xl ml-10'>
        <p className=''>
            &copy; {new Date().getFullYear()} Gounaya Saas Landing Page. All Rights Reserved.
        </p>
    </footer>
  )
}

export default Footer
