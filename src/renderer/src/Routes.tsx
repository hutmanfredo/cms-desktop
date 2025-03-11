import React from 'react'
import { Routes, Route } from 'react-router'

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello</h1>} />
    </Routes>
  )
}
