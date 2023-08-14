import { useState } from "react"



export function MessageBoardInput(){
    const [name, setName] = useState("Friedrich")
    const [message, setMessage] = useState("You can do it! Work hard")

    return(
      <div className="messageBoardInput">
        <form>
            <input 
                type="text"
                value={name}
                onChange={(e => setName(e.target.value))} 
            />
            <input 
                type="text"
                value={message}
                onChange={(e => setMessage(e.target.value))}  
            />
            <button
                type="submit"

            >
                Submit
            </button>
        </form>
      </div>
    )
  }