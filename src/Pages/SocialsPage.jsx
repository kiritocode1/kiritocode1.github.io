import React from 'react'
import mainGif from "../Pictures/BattleOfRetention.gif";













const useMousePosition = () => {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState({ x: null, y: null });
  React.useEffect(() => {
    const updateMousePosition = ev => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return mousePosition;
};












const SocialsPage = () => {


  const Mousy = useMousePosition();
  const MouseX = Mousy.x;
  const MouseY = Mousy.y;
  return (
    <div className=' flex flex-wrap mb-6'>
      <div className="w-full h-96 flex flex-wrap px-2 md:px-0">

        <div className=' h-96 bg-primary flex items-center justify-center resize'>
          
          <div>{MouseY}</div>
          <div>{MouseX}</div>
          
          <div class="stats stats-vertical lg:stats-horizontal shadow">
  
  <div class="stat">
    <div class="stat-title">Downloads</div>
    <div class="stat-value">31K</div>
    <div class="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div class="stat">
    <div class="stat-title">New Users</div>
    <div class="stat-value">4,200</div>
    <div class="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div class="stat">
    <div class="stat-title">New Registers</div>
    <div class="stat-value">1,200</div>
    <div class="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div></div>
      </div>
    </div>
  )
}

export default SocialsPage