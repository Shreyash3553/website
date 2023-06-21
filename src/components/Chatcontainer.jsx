import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import Chatinput from './Chatinput';
import { v4 as uuidv4 } from "uuid";
import Logout from './Logout'
import axios from 'axios'
import { addmessage, getallmessage } from '../utils/APIRoutes'


export default function Chatcontainer({ currentchat, currentUser, socket }) {
  const [messages, Setmessages] = useState([])
  const [arrivalMessage, SetarrivalMessage] = useState(null)
  const scrollRef = useRef();

  useEffect(() => {
    getmessages()
  })
//..................changes in useEffect...,[]last line
  async function getmessages() {
    if (currentchat) {
      const responce = await axios.post(getallmessage, {
        from: currentUser._id,
        to: currentchat._id,
      })
      console.log(responce)
      Setmessages(responce.data)
    }
  }
  const handlechangeMsg = async (msg) => {
    console.log(currentUser, currentchat)
    await axios.post(addmessage, {
      from: currentUser._id,
      to: currentchat._id,
      message: msg,
    })

    socket.current.emit('send-msg', {
      to: currentchat._id,
      from: currentUser._id,
      message: msg,
    })

    const msgs = [...messages]
    msgs.push({ fromself: true, message: msg })
    Setmessages(msgs)
  }

  useEffect(() => {
    if (socket.current) {
      socket.current.on('msg-recieve', (msg) => {
        SetarrivalMessage({ fromself: false, message: msg })
      })
    }
  }, [socket])
  //..............added socket in the array

  useEffect(() => {
    arrivalMessage && Setmessages((prev) => [...prev, arrivalMessage])
  }, [arrivalMessage])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])
  return (
    <>
      {currentchat && (
        <Container>
          <div className="chat-header">
            <div className="user-details">
              <div className="avatar">
                <img
                  src={`data:image/svg+xml;base64,${currentchat.avatarImage}`}
                  alt="avatar"
                />
              </div>
              <div className="username">
                <h3>{currentchat.username}</h3>
              </div>
            </div>
            <Logout />
          </div>
          <div className="chat-messages">
            {messages.map((message) => {
              return (
                <div ref={scrollRef}  key={uuidv4()}>
                  <div
                    className={`message ${
                      message.fromself ? 'sended' : 'recieved'
                    }`}
                  >
                    <div className="content">
                      <p>{message.message}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <Chatinput handlechangeMsg={handlechangeMsg} />
        </Container>
      )}
    </>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;

        }
      }
    }
  }
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: red;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 30%;
        overflow-wrap: break-word;
        padding: 10px;
        font-size: 1rem;
        border-radius: 10px;
        color: #d1d1d1;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 100%;
        }
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color: #4f04ff21;
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: #9900ff20;
      }
    }
  }
`
