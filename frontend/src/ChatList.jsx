import { useEffect } from "react"

export const ChatList = ({chatList}) => {
    useEffect(() => {
        console.log('heyyyyy', chatList);
    }, [])
    return "hey this is chat list..."
}