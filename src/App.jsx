import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
      <div className = "form-container">
      <div className="form-inputs"> 
            <input id="input-title" type="text" placeholder="Title..."> </input>
            <input id="input-about" type="text" placeholder="About..."></input>
            </div>
            <div class="button-add-task-container">
            <button id="add-task-button"> <img src="src/assets/images/plus-button.svg" alt="">  
            </img> </button>
        </div>
      </div>
    </>
  )
}

export default App