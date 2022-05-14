import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import s from './ChatPage.module.scss'
import { ChatMessageAPIType } from '../../api/chat-api'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../redux/chat-reducer'
import { AppStateType } from '../../redux/redux-store'
import { WRITE_MESSAGE } from "../../Components/common/constants/index";
import { Nullable } from './../../types/types'



const ChatPage: React.FC = () => {
    return <div className={s.chatPage}>
        <Chat />
    </div>
}

const Chat: React.FC = () => {

    const dispatch = useDispatch()


    const status = useSelector((state: AppStateType) => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return <div className={s.chatPageBlock}>
        {status === 'error' && <div>Some error occured. Please refresh the page</div>}
        <>
            <Messages />
            <AddMessageForm />
        </>
    </div>
}

const Messages: React.FC<{}> = ({ }) => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages])

    return <div className={s.messagesPart} style={{ height: '400px', overflowY: 'auto' }} onScroll={scrollHandler}>
        {messages.map((m, index) => <Message key={m.id} message={m} />)}
        <div ref={messagesAnchorRef}></div>
    </div>
}


const Message: React.FC<{ message: ChatMessageAPIType }> = React.memo(({ message }) => {
    console.log(">>>>>>Message")
    return <div className={s.message}>
        <div className={s.userInfoContainer}>
            <img src={message.photo} /> <b>{message.userName}</b>
            <br />
            {message.message}
            <hr />
        </div>

    </div>
})


const AddMessageForm: React.FC<{}> = () => {
    const [message, setMessage] = useState('')
    const [error, setError] = useState<Nullable<boolean>>(null)
    const dispatch = useDispatch()

    const status = useSelector((state: AppStateType) => state.chat.status)


    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage('')
    }
    const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
        setError(false)
    }

    return (
        <div className={s.addChatMessageForm}>
            <textarea onChange={onTextareaChange}
                value={message}
                className={!error ? s.textField : `${s.textField} ${s.errorField}`}
                placeholder={WRITE_MESSAGE}
            />
            <div>
                <button disabled={status !== 'ready'} onClick={sendMessageHandler}>Send</button>
            </div>
        </div>
    )
}

export default ChatPage