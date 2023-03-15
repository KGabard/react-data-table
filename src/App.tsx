import React from 'react'
import { employeesList } from './data/employeesData'
import './App.css'
import Table from './lib'

function App() {
  return (
    <div className="app">
      <Table
        data={employeesList}
        columnsWidth={[1, 1, 0.85, 1, 0.85, 1, 1, 1, 0.7]}
        colors={{
          primary: 'var(--highlight-primary)',
          secondary: 'var(--highlight-secondary)',
        }}
        enableNumberOfEntries={true}
        enableSearch={true}
        enableSort={true}
      />
    </div>
  )
}

export default App
