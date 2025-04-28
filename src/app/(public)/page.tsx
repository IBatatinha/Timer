import { DinRoundPro } from '../assets/google/fonts/DinRoundPro';
import Header from '../components/header/layout';
import { TimerComponents } from '../components/timer';

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col justify-between transition-all">
      <Header />
      <section className="w-full flex flex-col gap-[3rem] items-center justify-center">
        <TimerComponents.Controls />
      </section>
      <footer className={`${DinRoundPro.className} text-sm opacity-5`}>This website was created by batatinha.</footer>
    </main>
  );
}
