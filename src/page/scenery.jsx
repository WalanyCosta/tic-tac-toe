import './style.css';
import React, {useState} from 'react';
import { IoMdAlarm, IoIosPlay, IoIosVolumeHigh } from "react-icons/io";
import { RiUserFill } from "react-icons/ri";
import GameChart from './components/gameChart'; 
import { SceneryContext } from './sceneryContext';

const Scenery = (props) =>{
    const [activeGame, setActiveGame]= useState(false);
    const [playerNome, setPlayerNome] = useState('');
    const [player2Nome, setPlayer2Nome] = useState('');
    const [point, setPoint] = useState(0);
    const [point2, setPoint2] = useState(0);
    
    const addPointToWinner = (letter) =>{
        if(letter === 'x'){
            setPoint(point + 1);
        }else{
            setPoint2(point2 + 1);
        }
    }

    const startGame = () => {
        if(playerNome === '' || player2Nome === ''){
            alert('Insere o nome dos dois jogadores!!');
        }else{
            setActiveGame(true);
        }
    }
    
    return (
        <div className="sceneryContainer">
            <div className="playerContainer">
                <div className="player player-1">
                    <span><RiUserFill /></span>
                    <h3>Player 1</h3>
                    {!activeGame ? (
                        <input placeholder='nome' onChange={e => setPlayerNome(e.target.value)}/>
                    ):(
                        <>
                            <h4>{playerNome}</h4>
                            <p>Pontuação</p>
                            <p>{point}</p>
                        </>
                    )}
                </div>

                {!activeGame?'':(
                    <SceneryContext.Provider value={{ addPointToWinner }}>
                        <GameChart />
                    </SceneryContext.Provider>
                )}

                <div className="player player-2">
                    <span><RiUserFill /></span>
                    <h3>Player 2</h3>
                    {!activeGame ? (
                        <input placeholder='nome' onChange={ e => setPlayer2Nome(e.target.value)}/>
                    ):(
                        <>
                            <h4>{player2Nome}</h4>
                            <p>Pontuação</p>
                            <p>{point2}</p>
                        </>
                    )}
                </div>
            </div>

            <div className={activeGame ? 'group-button on': 'group-button'}>
                <button type='button'><IoMdAlarm /></button>
                <button type='button' onClick={startGame}>
                    <IoIosPlay />
                </button>
                <button type='button'><IoIosVolumeHigh/></button>
            </div>
        </div>
    )
}

export default Scenery;