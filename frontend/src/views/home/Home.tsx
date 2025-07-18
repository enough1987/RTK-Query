import React from 'react'
import packageJson from '../../../package.json'

const buildVersion = import.meta.env.VITE_BUILD_VERSION

const Home: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <p className="text-gray-700">Welcome to the Home page!</p>
      <p className="text-gray-700">Version {packageJson.version}</p>
      {
        buildVersion && (
          <p className="text-gray-700">Build Version: {buildVersion}</p>
        )
      }
    </div>
  )
}

export default Home