import './style.css';
import React, {useState } from 'react';
import changeLetter from './changeLetter';

const MainScreen = (props) => {
    const [showLetters, setShowLetters] = useState(new Map());
    const items = ['item-1','item-2','item-3','item-4','item-5','item-6','item-7','item-8','item-9'];

    const writeLetter = (id, letter) =>{
        const map = new Map();
        if(showLetters.size !== 0){
            for(let value of showLetters.entries()){
                let[olId, oldLetter] = value;
                map.set(olId, oldLetter);
            }
        } 
        
        map.set(id, changeLetter());
        setShowLetters(map);
    }

    return (
        <div className="sceneryContainer" >
            {
                items.map(item =>{
                    return (
                        <div key={item} onClick={(e)=>{
                            e.preventDefault();
                            writeLetter(item, 'o');
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


