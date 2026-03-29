import { useState, useEffect } from 'react';
import { useColorHarmony } from '../hooks/useColorHarmony';
import { useContrast } from '../hooks/useContrast';

export function GradientEditor() {
    const { palette, generateHarmony } = useColorHarmony();
    const { getRatio, getScore } = useContrast();

    const [colors, setColors] = useState(['#FF10F0', '#39FF14']);
    const [angle, setAngle] = useState(135);
    const [gradientType, setGradientType] = useState('linear');

    useEffect(() => {
        generateHarmony('complementary');
    }, [generateHarmony]);

    useEffect(() => {
        if (palette.length > 0) {
            setColors(palette.slice(0, 2));
        }
    }, [palette]);

    const handleGenerate = (type) => {
        generateHarmony(type);
    };

    const cssString = `${gradientType}-gradient(${gradientType === 'linear' ? angle + 'deg' : 'circle'}, ${colors.join(', ')})`;

    return (
        <div className="gradient-editor">
            <div className="preview-container" style={{ background: cssString }}>
                <div className="preview-content">
                    <h1 className="preview-title">GRADIENT SHIFT</h1>
                    <p className="preview-code">{cssString}</p>
                </div>
            </div>

            <div className="controls-container">
                <div className="control-group">
                    <label>HARMONY</label>
                    <div className="button-group">
                        {['complementary', 'analogous', 'triadic', 'tetradic'].map(type => (
                            <button
                                key={type}
                                onClick={() => handleGenerate(type)}
                                className="btn-harmony"
                            >
                                {type.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="control-group">
                    <label>ANGLE ({angle}°)</label>
                    <input
                        type="range"
                        min="0"
                        max="360"
                        value={angle}
                        onChange={(e) => setAngle(e.target.value)}
                    />
                </div>

                <div className="control-group">
                    <label>COLORS</label>
                    <div className="color-inputs">
                        {colors.map((c, i) => (
                            <div key={i} className="color-input-wrapper">
                                <input
                                    type="color"
                                    value={c}
                                    onChange={(e) => {
                                        const newColors = [...colors];
                                        newColors[i] = e.target.value;
                                        setColors(newColors);
                                    }}
                                />
                                <span className="color-hex">{c.toUpperCase()}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="control-group">
                    <label>ACCESSIBILITY CHECK</label>
                    <div className="contrast-badge">
                        RATIO: {getRatio(colors[0], colors[1])}
                        <span className={`score ${getScore(getRatio(colors[0], colors[1]))}`}>
                            {getScore(getRatio(colors[0], colors[1]))}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
