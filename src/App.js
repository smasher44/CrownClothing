import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import { Route, Routes } from 'react-router-dom';


const HatsPage = () => (
    <div>
      <h1>HATS PAGE</h1>
      <p>Testing page</p>
    </div>
)
   

//Route- Declares an element that should be rendered at a certain URL path

const App = () => (
    <Routes>
          <Route path="/" element={<HomePage/>}>
              <Route path="/" element={<HatsPage/>} />
          </Route>
    </Routes>
)

export default App;
// ReactDOM.render(
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route path="expenses" element={<Expenses />} />
//           <Route path="invoices" element={<Invoices />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>, 
//     document.getElementById('root')
//   );