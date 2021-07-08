type ColorButtonProps = {
    value: string;
    index: number;
    onColorChange: (index:number) => void;
}

const ColorButton = (props: ColorButtonProps) => {
    const value = props.value;
    const index = props.index;
    const handleColorChange = () => {
        props.onColorChange(index);
    } 
    
    return(
        <button type="button" id={"button" + value.charAt(0).toUpperCase() + value.slice(1)} name={"button" + value.charAt(0).toUpperCase() + value.slice(1)} onClick={handleColorChange}/>
    );
}

export default ColorButton;
