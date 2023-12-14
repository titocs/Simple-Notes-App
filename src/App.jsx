import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ArchivePage from './pages/ArchivePage'
import DetailNotePage from './pages/DetailNotePage'
import { getAllNotes } from './utils/local-data'
import NotFoundPage from './pages/NotFoundPage'
import { useSearchParams } from 'react-router-dom'

const App = () => {
  const [notes, setNotes] = useState(getAllNotes());
  const [querySearch, setQuerySearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get('title');

  const searchNotesHandler = (search) => {
    setQuerySearch(search);
    setSearchParams({ title: search });
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home title={title} setNotes={setNotes} querySearch={querySearch} searchNotesHandler={searchNotesHandler}/>} />
        <Route path="/archives" element={<ArchivePage notes={notes} title={title} setNotes={setNotes} querySearch={querySearch} searchNotesHandler={searchNotesHandler}/>} />
        <Route path="/notes/:id" element={<DetailNotePage setNotes={setNotes}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  )
}

export default App