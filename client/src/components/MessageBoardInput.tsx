import { useState } from "react"



export function MessageBoardInput(){
    const [name, setName] = useState("Name")
    const [message, setMessage] = useState("Message")



    function submitFormData(e:React.ChangeEvent<HTMLInputElement>){
        e.preventDefault()
        let name = e.target[0].value
        let message = e.target[0].value
        // POST request with the information from the inputs
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name, 
                message: message, 
            })
        }
        console.table(requestOptions)
        fetch('https..', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            // then fetch message data from db
            // then update the message state
    }


    return(
        <form id="messageBoardInput" onSubmit={e => submitFormData(e)}>
            <div className="inputs">
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
            </div>
            <button
                type="submit"
            >
                Submit
            </button>
        </form>
    )
  }