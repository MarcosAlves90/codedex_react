import {useState} from "react";

export default function ColorPicker() {
    const [selectedColor, setSelectedColor] = useState({ hex: null, name: null });
    const [focusedIndex, setFocusedIndex] = useState(null);

    const colors = [
        { name: "Red", hex: "#FF0000" },
        { name: "Green", hex: "#00FF00" },
        { name: "Blue", hex: "#0000FF" },
        { name: "Yellow", hex: "#FFFF00" },
        { name: "Cyan", hex: "#00FFFF" },
        { name: "Magenta", hex: "#FF00FF" },
    ];

    function handleClick(e, color) {
        navigator.clipboard.writeText(color.hex).then(() => null);
        setSelectedColor({hex: color.hex, name: color.name});
        e.target.style.cursor = 'default';
    }

    function handleMouseEnter(e, hex) {
        setSelectedColor({hex: hex, name: null});
        e.target.style.cursor = 'pointer';
    }

    function handleMouseLeave() {
        setSelectedColor({ hex: null, name: null });
    }

    function handleFocus(index) {
        setFocusedIndex(index);
    }

    function handleBlur() {
        setFocusedIndex(null)
    }

    function handleKeyDown(e, index) {
        if (e.key === 'Enter') {
            setSelectedColor({hex: colors[index].hex, name: colors[index].name});
            navigator.clipboard.writeText(colors[index].hex).then(() => null);
        }
    }

    return (
        <div className="color-picker">
            <h1>Color Picker</h1>
            <p>Click on a color to copy it.</p>
            <div className="color-list">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className={`color-item ${focusedIndex === index ? 'focused' : ''} ${color.name === 'Yellow' ? 'dark-text' : ''}`}
                        style={{backgroundColor: color.hex}}
                        onClick={(e) => handleClick(e, color)}
                        onMouseEnter={(e) => handleMouseEnter(e, color.hex)}
                        onMouseLeave={handleMouseLeave}
                        onFocus={() => handleFocus(index)}
                        onBlur={handleBlur}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        tabIndex={0}
                    >
                        {selectedColor.hex === color.hex && (
                            <span className="color-code">{selectedColor.name || color.hex}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )

}