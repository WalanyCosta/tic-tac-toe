import './style.css';
import React, {useState } from 'react';
import changeLetter from './changeLetter';

const MainScreen = (props) => {
    const [marker, setMarker] = useState('');
    const [showLetters, setShowLetters] = useState(new Map());
    const items = ['item-1','item-2','item-3','item-4','item-5','item-6','item-7','item-8','item-9'];

    const clear = () =>{
        setTimeout(()=>{
            setMarker('')
            setShowLetters(new Map());
        }, 1500)
    }

    const verifyWinner = (map) =>{
            if(map.get('item-1') === map.get('item-2') && map.get('item-2') === map.get('item-3')
                && map.has('item-2')){
                    setMarker('item-1');
                    clear();
            }else if(map.get('item-4') === map.get('item-5') && map.get('item-5') === map.get('item-6')
                && map.has('item-5')){
                    setMarker('item-2');
                    clear();
            }else if(map.get('item-7') === map.get('item-8') && map.get('item-8') === map.get('item-9') 
                && map.has('item-8')){
                    setMarker('item-3');
                    clear();
            }else if(map.get('item-1') === map.get('item-4') && map.get('item-4') === map.get('item-7') 
                && map.has('item-4')){
                    setMarker('item-4');
                    clear();
            }else if(map.get('item-2') === map.get('item-5') && map.get('item-5') === map.get('item-8') 
                && map.has('item-5')){
                    setMarker('item-5');
                    clear();
            }else if(map.get('item-3') === map.get('item-6') && map.get('item-6') === map.get('item-9') 
                && map.has('item-6')){
                    setMarker('item-6');
                    clear();
            }else if(map.get('item-1') === map.get('item-5') && map.get('item-5') === map.get('item-9') 
                && map.has('item-5')){
                    setMarker('item-7');
                    clear();
            }else if(map.get('item-3') === map.get('item-5') && map.get('item-5') === map.get('item-7') 
                && map.has('item-5')){
                    setMarker('item-8');
                    clear();
            }else if(map.size === 9){
                clear();
            }
    }

    const addValuesPrevious = (map) => {
        if(showLetters.size !== 0){
            for(let value of showLetters.entries()){
                let[olId, oldLetter] = value;
                map.set(olId, oldLetter);
            }
        }
    }

    const writeLetter = (id) =>{
        const map = new Map();

        addValuesPrevious(map);

        if(!map.has(id)){
            map.set(id, changeLetter());
        }

        setShowLetters(map);
        verifyWinner(map);
    }

    return (
        <div className={
            marker !=='' ? `sceneryContainer ${marker}` : 'sceneryContainer'
        }>
            {
                items.map(item =>{
                    return (
                        <div key={item} onClick={(e)=>{
                            e.preventDefault();
                            writeLetter(item);
                        }}
                        style={
                            showLetters.get(item) === 'o' ? {color: 'lightpink'} : {color: '#1293fdc0'}
                        }>
                            {showLetters.get(item)}
                        </div>
                    )
                })
            }
        </div>        
    );
}

export default MainScreen;


