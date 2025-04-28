'use client';

import { createContext } from 'react';

export type ColorsContextProps = {
  updateAllColors: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ColorsContext = createContext({} as ColorsContextProps);

const hexToRgb = (hex: string) => (hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i) ? { r: parseInt(RegExp.$1, 16), g: parseInt(RegExp.$2, 16), b: parseInt(RegExp.$3, 16) } : null);

export const ColorsProvider = ({ children }: { children: React.ReactNode }) => {
  const updateAllColors = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const { r, g, b } = hexToRgb(value) || { r: 0, g: 0, b: 0 };
    document.documentElement.style.setProperty('--default-color-secondary', value);
    document.documentElement.style.setProperty(
      '--default-text-shadow',
      `0px 17px 127px rgba(${r}, ${g}, ${b}, 0.46), 0px 7.102px 53.058px rgba(${r}, ${g}, ${b}, 0.33), 0px 3.797px 28.367px rgba(${r}, ${g}, ${b}, 0.27), 0px 2.129px 15.902px rgba(${r}, ${g}, ${b}, 0.23), 0px 1.131px 8.446px rgba(${r}, ${g}, ${b}, 0.19),
      0px 0.47px 3.514px rgba(${r}, ${g}, ${b}, 0.13)`
    );
  };

  return <ColorsContext.Provider value={{ updateAllColors }}>{children}</ColorsContext.Provider>;
};
