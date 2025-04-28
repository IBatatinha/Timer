'use client';

import { ColorsContext } from '@/app/context/colors';
import { useContext, type ComponentProps } from 'react';

export interface ColorProps extends ComponentProps<'div'> {}

export const Color = (props: ColorProps) => {
  const { updateAllColors } = useContext(ColorsContext);

  return (
    <div className="w-[1.5rem] h-6 bg-[var(--default-color-secondary)] rounded-full border border-zinc-400 hover:opacity-95 transition-opacity" {...props}>
      <input className="w-full h-full opacity-0 border-none" type="color" defaultValue="#46ffce" title="Colors" onChange={updateAllColors} />
    </div>
  );
};
