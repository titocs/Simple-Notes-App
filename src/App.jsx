import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ArchivePage from './pages/ArchivePage'
import DetailNotePage from './pages/DetailNotePage'
import { getAllNotes } from './utils/local-data'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  const [notes, setNotes] = useState(getAllNotes());

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home notes={notes} setNotes={setNotes}/>} />
        <Route path="/archives" element={<ArchivePage notes={notes} setNotes={setNotes} />} />
        <Route path="/notes/:id" element={<DetailNotePage notes={notes} setNotes={setNotes}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  )
}

export default App