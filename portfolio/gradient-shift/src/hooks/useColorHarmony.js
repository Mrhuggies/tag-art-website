import { useState, useCallback } from 'react';
import chroma from 'chroma-js';

export function useColorHarmony() {
  const [baseColor, setBaseColor] = useState(chroma.random().hex());
  const [palette, setPalette] = useState([]);

  const generateHarmony = useCallback((type = 'analogous') => {
    let colors = [];
    const base = chroma(baseColor);

    switch (type) {
      case 'complementary':
        colors = [base.hex(), base.set('hsl.h', '+180').hex()];
        break;
      case 'triadic':
        colors = [
          base.hex(),
          base.set('hsl.h', '+120').hex(),
          base.set('hsl.h', '+240').hex()
        ];
        break;
      case 'analogous':
        colors = chroma.scale([base.set('hsl.h', '-20'), base, base.set('hsl.h', '+20')])
          .mode('lch').colors(5);
        break;
      case 'tetradic':
        colors = [
          base.hex(),
          base.set('hsl.h', '+90').hex(),
          base.set('hsl.h', '+180').hex(),
          base.set('hsl.h', '+270').hex()
        ];
        break;
      default:
        colors = [base.hex()];
    }
    setPalette(colors);
    return colors;
  }, [baseColor]);

  return { baseColor, setBaseColor, palette, generateHarmony };
}
