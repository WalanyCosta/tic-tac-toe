import React, {useState } from 'react';
import './style.css';

const MainScreen = (props) => {

    const [showLetters, setShowLetters] = useState(new Map());

    const items = ['item-1','item-2','item-3','item-4','item-5','item-6','item-7','item-8','item-9']
   
    const changeLetter = (id, letter) =>{
        const map = new Map();
        if(showLetters.size !== 0){
            for(let value of showLetters.entries()){
                let[olId, oldLetter] = value;
                map.set(olId, oldLetter);
            }
        }
        map.set(id, letter);
        setShowLetters(map);
    }

    return (
        <div className="sceneryContainer" >
            {
                items.map(item =>{
                    return (
                        <div key={item} onClick={(e)=>{
                            e.preventDefault();
                            changeLetter(item, 'o')
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


