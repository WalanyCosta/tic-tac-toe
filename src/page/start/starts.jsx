import './style.css';
import React, {useState} from 'react';
import { IoMdAlarm, IoIosPlay, IoIosVolumeHigh } from "react-icons/io";
import { RiUserFill } from "react-icons/ri";
import MainScreen from './../mainScreen/mainScreen';

const Starts = (props) =>{
    let [invert, setInvert]= useState(false);
    const [player1Nome, setPlayer1Nome] = useState('');
    const [player2Nome, setPlayer2Nome] = useState('');

    const startGame = () => {
        if(player1Nome === '' || player2Nome === ''){
            alert('Insere o nome dos dois jogadores!!');
        }else{
            setInvert(true);
        }
    }
    
    return (
        <div className="startsContainer">
            <div className="playerContainer">
                <div className="player player-1">
                    <span><RiUserFill /></span>
                    <h3>Player 1</h3>
                    {!invert ? (
                        <input placeholder='nome' onChange={(e)=>{
                            setPlayer1Nome(e.target.value)
                        }}/>
                    ):(
                        <>
                            <h4>{player1Nome}</h4>
                            <p>X</p>
                        </>
                    )}
                </div>

                {!invert ?? (
                    <MainScreen />
                )}

                <div className="player player-2">
                    <span><RiUserFill /></span>
                    <h3>Player 2</h3>
                    {!invert ? (
                        <input placeholder='nome' onChange={(e)=>{
                            setPlayer2Nome(e.target.value)
                        }}/>
                    ):(
                        <>
                            <h4>{player2Nome}</h4>
                            <p>O</p>
                        </>
                    )}
                </div>
            </div>

            <div className="group-button">
                <button type='button'><IoMdAlarm /></button>
                <button type='button'><IoIosPlay/></button>
                <button type='button'><IoIosVolumeHigh/></button>
            </div>
        </div>
    )
}

export default Starts;