import React from 'react'

const ChildrenProps = () => {
  return (
      <section className="p-8 bg-white rounded-xl shadow-lg mt-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Children Props</h2>
      <p className="text-gray-600 mb-6">
        Props are arguments passed to React components. They allow you to pass
        data from parent to child components.
      </p>
      <h1>This is children props</h1>
    </section>
  )
}

export default ChildrenProps
