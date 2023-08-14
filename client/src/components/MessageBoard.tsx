import { MessageBoardContent } from "./MessageBoardContent"
import { MessageBoardInput } from "./MessageBoardInput"

export function MessageBoard(){
    return(
      <div className='messageBoard'>
        <MessageBoardContent/>
        <MessageBoardInput/>
      </div>
    )
  }