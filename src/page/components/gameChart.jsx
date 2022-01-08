import './style.css';
import React, {useContext, useState } from 'react';
import changeLetter from './changeLetter';
import { SceneryContext } from '../sceneryContext';


const GameChart = () => {
    const { addPointToWinner } = useContext(SceneryContext);
    const [marker, setMarker] = useState('');
    const [showLettersInChart, setShowLettersInChart] = useState(new Map());
    const divItems = ['item-1','item-2','item-3','item-4','item-5','item-6','item-7','item-8','item-9'];

    const clear = () =>{
        setTimeout(()=>{
            setMarker('')
            setShowLettersInChart(new Map());
        }, 1500);
    }

    const verifyWinner = (map) =>{
            if(map.get('item-1') === map.get('item-2') && map.get('item-2') === map.get('item-3')
                && map.has('item-2')){
                    setMarker('item-1');
                    clear();
                    addPointToWinner(map.get('item-2'));
            }else if(map.get('item-4') === map.get('item-5') && map.get('item-5') === map.get('item-6')
                && map.has('item-5')){
                    setMarker('item-2');
                    clear();
                    addPointToWinner(map.get('item-5'));
                }else if(map.get('item-7') === map.get('item-8') && map.get('item-8') === map.get('item-9') 
                && map.has('item-8')){
                    setMarker('item-3');
                    clear();
                    addPointToWinner(map.get('item-8'));
            }else if(map.get('item-1') === map.get('item-4') && map.get('item-4') === map.get('item-7') 
                && map.has('item-4')){
                    setMarker('item-4');
                    clear();
                    addPointToWinner(map.get('item-4'));
            }else if(map.get('item-2') === map.get('item-5') && map.get('item-5') === map.get('item-8') 
                && map.has('item-5')){
                    setMarker('item-5');
                    clear();
                    addPointToWinner(map.get('item-5'));
            }else if(map.get('item-3') === map.get('item-6') && map.get('item-6') === map.get('item-9') 
                && map.has('item-6')){
                    setMarker('item-6');
                    clear();
                    addPointToWinner(map.get('item-6'));
            }else if(map.get('item-1') === map.get('item-5') && map.get('item-5') === map.get('item-9') 
                && map.has('item-5')){
                    setMarker('item-7');
                    clear();
                    addPointToWinner(map.get('item-5'));
            }else if(map.get('item-3') === map.get('item-5') && map.get('item-5') === map.get('item-7') 
                && map.has('item-5')){
                    setMarker('item-8');
                    clear();
                    addPointToWinner(map.get('item-5'));
            }else if(map.size === 9){
                clear();
            }
    }

    const addValuesPrevious = (map) => {
        if(showLettersInChart.size !== 0){
            for(let value of showLettersInChart.entries()){
                let[olId, oldLetter] = value;
                map.set(olId, oldLetter);
            }
        }
    }

    const writeLetter = (id) =>{
        const map = new Map();

        addValuesPrevious(map);
        if(!map.has(id)) map.set(id, changeLetter());
        setShowLettersInChart(map);
        verifyWinner(map);
    }

    return (
        <div className={
            marker !=='' ? `gameChartContainer ${marker}` : 'gameChartContainer'
        }>
            {
                divItems.map(item =>{
                    return (
                        <div key={item} onClick={e =>{writeLetter(item)}}
                        style={
                            showLettersInChart.get(item) === 'o' ? {color: 'lightpink'} : {color: '#1293fdc0'}
                        }>
                            {showLettersInChart.get(item)}
                        </div>
                    )
                })
            }
        </div>        
    );
}

export default GameChart;


