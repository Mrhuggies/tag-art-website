import chroma from 'chroma-js';

export function useContrast() {
    const getRatio = (color1, color2) => {
        try {
            return chroma.contrast(color1, color2).toFixed(2);
        } catch (e) {
            return 0;
        }
    };

    const getScore = (ratio) => {
        if (ratio >= 7) return 'AAA';
        if (ratio >= 4.5) return 'AA';
        if (ratio >= 3) return 'AA Large';
        return 'Fail';
    };

    return { getRatio, getScore };
}
