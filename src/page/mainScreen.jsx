import './style.css';
import React, {useState } from 'react';
import changeLetter from './changeLetter';

const MainScreen = (props) => {
    const [showLetters, setShowLetters] = useState(new Map());
    const items = ['item-1','item-2','item-3','item-4','item-5','item-6','item-7','item-8','item-9'];


    const verifyWinner = (map) =>{
        if(map.size > 0){
            if(map.get('item-1') === map.get('item-2') && map.get('item-2') === map.get('item-3')
                && map.has('item-2')){
                    console.log('Vencedor')
                    setShowLetters(new Map()) 
            }else if(map.get('item-4') === map.get('item-5') && map.get('item-5') === map.get('item-6')
                && map.has('item-5')){
                    console.log('Vencedor')
                    setShowLetters(new Map()) 
            }else if(map.get('item-7') === map.get('item-8') && map.get('item-8') === map.get('item-9') 
                && map.has('item-8')){
                    console.log('Vencedor')
                    setShowLetters(new Map()) 
            }else if(map.get('item-1') === map.get('item-4') && map.get('item-4') === map.get('item-7') 
                && map.has('item-4')){
                    console.log('Vencedor')
                    setShowLetters(new Map()) 
            }else if(map.get('item-2') === map.get('item-5') && map.get('item-5') === map.get('item-8') 
                && map.has('item-5')){
                    console.log('Vencedor')
                    setShowLetters(new Map()) 
            }else if(map.get('item-3') === map.get('item-6') && map.get('item-6') === map.get('item-9') 
                && map.has('item-6')){
                    console.log('Vencedor')
                    setShowLetters(new Map()) 
            }else if(map.get('item-1') === map.get('item-5') && map.get('item-5') === map.get('item-9') 
                && map.has('item-5')){
                    console.log('Vencedor')
                    setShowLetters(new Map()) 
            }else if(map.get('item-3') === map.get('item-5') && map.get('item-5') === map.get('item-7') 
                && map.has('item-5')){
                    console.log('Vencedor')
                    setShowLetters(new Map()) 
            }else if(map.size === 9){
                console.log('Empate');
                setShowLetters(new Map())
            }
    }}

    const writeLetter = (id) =>{
        const map = new Map();
        if(showLetters.size !== 0){
            for(let value of showLetters.entries()){
                let[olId, oldLetter] = value;
                map.set(olId, oldLetter);
            }
        } 
  
        map.set(id, changeLetter());
        setShowLetters(map);
        verifyWinner(map);
    }

    return (
        <div className="sceneryContainer" >
            {
                items.map(item =>{
                    return (
                        <div key={item} onClick={(e)=>{
                            e.preventDefault();
                            writeLetter(item);
                        }}>
                            {showLetters.get(item)}
                        </div>
                    )
                })
            }
        </div>        
    );
}

export default MainScreen;


