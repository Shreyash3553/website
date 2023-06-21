import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { getallcontact, host } from '..//utils/APIRoutes'
import Contact from '../components/Contact'
import Welcomescreen from '../components/Welcomescreen'
import Chatcontainer from '../components/Chatcontainer'
import { io } from 'socket.io-client'

export default function Chatting() {
  const socket = useRef()
  const [contact, SetContact] = useState([])
  const [currentuser, SetCurrentUser] = useState(undefined)
  const [currentchat, Setcurrentchat] = useState(undefined)
  const [Isloaded, SetIsLoaded] = useState(false)

  useEffect(() => {
    if (currentuser) {
      socket.current = io(host)
      socket.current.emit('add-user', currentuser._id)
    }
  }, [currentuser])

  useEffect(() => {
    if (!localStorage.getItem('linky-user')) {
      window.location.href = '/login'
    } else {
      SetCurrentUser(JSON.parse(localStorage.getItem('linky-user')))
      SetIsLoaded(true)
    }
  }, [])

  useEffect(() => {
    console.log(currentuser)
    if (currentuser) {
      if (currentuser.isAvatarImageSet) {
        getcontact()
      } else {
        window.location.href = '/setavatar'
      }
    }
  }, [currentuser])

  async function getcontact() {
    const data = await axios.get(`${getallcontact}/${currentuser._id}`)
    SetContact(data.data.Contacts)
    console.log(data.data.Contacts)
  }

  const handlechatchage = (chat) => {
    Setcurrentchat(chat)
  }
  return (
    <Container>
      <div className="container">
        <Contact
          contacts={contact}
          currentuser={currentuser}
          changeChat={handlechatchage}
        />
        {Isloaded && currentchat === undefined ? (
          <Welcomescreen currentuser={currentuser} />
        ) : (
          <Chatcontainer
            currentchat={currentchat}
            currentUser={currentuser}
            socket={socket}
          />
        )}
      </div>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`
