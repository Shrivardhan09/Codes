import { useState } from "react";

const ImageBW = () => {
    const [blackAndWhite, setBlackAndWhite] = useState('100%');
    const [range, setRange] = useState(0);

    const onImageClick = () => {
        blackAndWhite === '0%' ? setBlackAndWhite('100%') : setBlackAndWhite('0%');
    }

    const colorChange = {
        filter: `grayscale(${blackAndWhite})`
    }

    const onColorChange = {
        filter: `grayscale(${range + "%"})`
    }

    return (
        <>
            <div style={{ display: 'grid', placeItems: 'center', height: '90vh', filter: `grayscale(${blackAndWhite})` }} onClick={onImageClick}>
                <img src="./image8-2.webp" alt="google-img" style={onColorChange} width={400} />
            </div>
            <input type="range" name="range" id="range" min={0} max={100} onChange={(e) => setRange(e.target.value)} />
            {range}
        </>
    );
}

export default ImageBW;
