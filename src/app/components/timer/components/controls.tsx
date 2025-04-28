'use client';

import { Orbitron } from 'next/font/google';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

export type ControlsProps = {};

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const Controls = () => {
  const [screen, setScreen] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [time, setTime] = useState<string>('00:00:30');
  const timer = useRef<HTMLInputElement>(null);

  const updatePlayerScreen = useCallback(() => {
    screen ? document.exitFullscreen() : document.documentElement.requestFullscreen();
    setScreen(!screen);
  }, [screen]);

  const handlerUpdateStatusFullscreen = useCallback(() => {
    setScreen(!!document.fullscreenElement);
  }, []);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handlerUpdateStatusFullscreen);
    return () => {
      document.removeEventListener('fullscreenchange', handlerUpdateStatusFullscreen);
    };
  }, [handlerUpdateStatusFullscreen]);

  const handlerUpdateTimerNumbers = useCallback(() => {
    timer.current?.focus();
    setEdit((prev) => !prev);
  }, [edit]);

  const updateTimerNumbers = (e) => {
    let raw = e.target.value.replace(/\D/g, ''); // só números

    if (raw.length > 6) raw = raw.slice(0, 6); // limita a 6 dígitos

    let formatted = raw;
    if (raw.length >= 5) {
      formatted = `${raw.slice(0, 2)}:${raw.slice(2, 4)}:${raw.slice(4, 6)}`;
    } else if (raw.length >= 3) {
      formatted = `${raw.slice(0, 2)}:${raw.slice(2, 4)}`;
    } else {
      formatted = raw;
    }

    setTime(formatted);
  };

  return (
    <>
      <input
        type="timer"
        ref={timer}
        data-show={edit}
        className={`${orbitron.className} z-50 data-[show=true]:flex hidden text-shadow-[var(--default-text-shadow)] text-[var(--default-color-secondary)] text-9xl max-md:text-6xl text-center outline-0 transition-all select-none`}
        value={time}
        onChange={updateTimerNumbers}
        maxLength={8}
        spellCheck="false"
        autoFocus
      />
      <h2 data-show={edit} className={`${orbitron.className} data-[show=true]:hidden text-shadow-[var(--default-text-shadow)] text-[var(--default-color-secondary)] text-9xl max-md:text-6xl transition-all select-none`}>
        {time}
      </h2>
      <div className="w-full flex items-center justify-center flex-row gap-8 select-none">
        <button
          data-show={edit}
          title="fullscreen"
          onClick={updatePlayerScreen}
          className="h-8 w-8 border data-[show=true]:hidden hover:bg-[var(--default-color-secondary)]/20 hover:border-[var(--default-color-secondary)]/20 max-md:focus:bg-[var(--default-color-secondary)]/20 max-md:focus:border-[var(--default-color-secondary)]/20 flex items-center justify-center rounded-md bg-transparent p-0 transition-all"
        >
          <Image src={screen ? '/exit-full-screen.svg' : '/full-screen.svg'} width={18} height={18} alt="" />
        </button>
        <button
          data-show={edit}
          title="edit"
          onClick={handlerUpdateTimerNumbers}
          className="h-8 w-8 data-[show=true]:hidden hover:bg-[var(--default-color-secondary)]/20 hover:border-[var(--default-color-secondary)]/20 max-md:focus:bg-[var(--default-color-secondary)]/20 max-md:focus:border-[var(--default-color-secondary)]/20 border flex items-center justify-center rounded-md bg-transparent p-0 transition-all"
        >
          <Image src="/edit.svg" width={18} height={18} alt="" />
        </button>
        <button
          data-show={edit}
          title="edit"
          onClick={handlerUpdateTimerNumbers}
          className="h-8 w-8 data-[show=true]:flex hidden hover:bg-[var(--default-color-secondary)]/20 hover:border-[var(--default-color-secondary)]/20 max-md:focus:bg-[var(--default-color-secondary)]/20 max-md:focus:border-[var(--default-color-secondary)]/20 border items-center justify-center rounded-md bg-transparent p-0 transition-all"
        >
          <Image src="/approve.svg" width={18} height={18} alt="" />
        </button>
        <button
          data-show={edit}
          title="edit"
          onClick={handlerUpdateTimerNumbers}
          className="h-8 w-8 data-[show=true]:flex hidden hover:bg-[var(--default-color-secondary)]/20 hover:border-[var(--default-color-secondary)]/20 max-md:focus:bg-[var(--default-color-secondary)]/20 max-md:focus:border-[var(--default-color-secondary)]/20 border items-center justify-center rounded-md bg-transparent p-0 transition-all"
        >
          <Image src="/cancel.svg" width={18} height={18} alt="" />
        </button>
        <button
          data-show={edit}
          className="h-8 w-8 data-[show=true]:hidden hover:bg-[var(--default-color-secondary)]/20 hover:border-[var(--default-color-secondary)]/20 max-md:focus:bg-[var(--default-color-secondary)]/20 max-md:focus:border-[var(--default-color-secondary)]/20 border flex items-center justify-center rounded-md bg-transparent p-0 transition-all"
        >
          <Image src="/play.svg" width={18} height={18} alt="" />
        </button>
      </div>
    </>
  );
};
