let invert = true;

export default function changeLetter(){
    let letter = invert ? 'x' : 'o'
    invert = !invert;
    return letter;
}