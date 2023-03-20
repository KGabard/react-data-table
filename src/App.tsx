import React from 'react'
import './App.css'
import Table from './lib'
import { exampleList } from './data/exampleData'

function App() {
  return (
    <div className="app">
      <Table
        data={exampleList}
        columnsWidth={[0.5, 1, 1.8, 1, 1]}
        colors={{
          primary: 'red',
          secondary: 'lightblue',
        }}
        enableNumberOfEntries={false}
        enableSearch={false}
        enableSort={true}
      />
    </div>
  )
}

export default App
