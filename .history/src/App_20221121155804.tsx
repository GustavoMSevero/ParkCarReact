import './App.css'

import Routes from './routes';

import {
  RouterProvider,
} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <RouterProvider router={Routes} />
    </div>
  )
}

export default App
