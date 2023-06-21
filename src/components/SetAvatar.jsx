import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import loader from '../assets/loading-23.gif'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { setavatar } from '../utils/APIRoutes'
import { Buffer } from 'buffer'
import './setavatar.css'

function SetAvatar() {
  const api = `https://api.multiavatar.com/4645646`

  const [avatar, SetAvatar] = useState([])

  const [isloading, Setloading] = useState(true)

  const [selectedAvtar, SetselectedAvatar] = useState(undefined)

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  }
  useEffect(() => {
    if (!localStorage.getItem('linky-user'))
      window.location.href='/login'
  }, []);
  
  const SetprofilePicture = async () => {
    if (selectedAvtar === undefined) {
      toast.error('Please select an avatar', toastOptions)
    } else {
      const user = await JSON.parse(localStorage.getItem('linky-user'))
      // console.log(user.user._id);
      const { data } = await axios.post(`${setavatar}/${user._id} `, {
        image: avatar[selectedAvtar],
      })
      if (data.isSet) {
        user.isAvatarImageSet = true
        user.avatarImage = data.image
        localStorage.setItem('linky-user', JSON.stringify(user))
        console.log(data);
        window.location.href = '/';
      } else {
        toast.error('Error selecting avatar..Try again..!', toastOptions)
      }
    }
  }

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function fetchData() {
    const data = [] 
    for (let i = 0; i < 3; i++) {
      const image = await axios.get(
        `${api}/${Math.round(Math.random() * 1000)}`,
      )
      const buffer = new Buffer(image.data)
      data.push(buffer.toString('base64'))
    }
    SetAvatar(data)
    Setloading(false)
  }

  //   const options = {
  //         method: 'GET',
  //         url: 'https://doppelme-avatars.p.rapidapi.com/assets/1101/eye',
  //         headers: {
  //           'X-RapidAPI-Key': '5c163ea755msh531d407a9b98baep189a66jsn4b04cebfe236',
  //           'X-RapidAPI-Host': 'doppelme-avatars.p.rapidapi.com'
  //         }
  //       };

  //       axios.request(options).then(function (response) {
  //           console.log(response.data);
  //       }).catch(function (error) {
  //           console.error(error);
  //       });

  return (
    <>
      {isloading ? (
        <Container className="Container">
          <img src={loader} alt="loader" className="loader" />
        </Container>
      ) : (
        <Container className="Container">
          <div className="title-container">
            <h1>Pick an Avatar as your profile picture</h1>
          </div>
          <div className="avatars">
            {avatar.map((avatar, index) => {
              return (
                <div
                  className={`avatar ${
                    selectedAvtar === index ? 'selected' : ''
                  }`}
                >
                  <img
                    src={`data:image/svg+xml;base64,${avatar}`}
                    alt="avatar"
                    key={avatar}
                    onClick={() => SetselectedAvatar(index)}
                  />
                </div>
              )
            })}
          </div>
          <button onClick={SetprofilePicture} className="submit-btn">
            Set as Profile Picture
          </button>
          <ToastContainer />
        </Container>
      )}
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: #131324;
  height: 100vh;
  width: 100vw;
  .loader {
    max-inline-size:500px;
  }
  .title-container {
    h1 {
      color: white;
    }
  }
  .avatars {
    display: flex;
    gap: 2rem;
    .avatar {
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s ease-in-out;
      img {
        height: 6rem;
        transition: 0.5s ease-in-out;
      }
    }
    .selected {
      border: 0.4rem solid #4e0eff;
    }
  }
  .submit-btn {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
`

export default SetAvatar
