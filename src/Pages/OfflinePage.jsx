import React from 'react'
import gulgb from "../MoreSounds/rising-pops.mp3";
import useSound from 'use-sound';
const OfflinePage = () => {
  const [ping] = useSound(gulgb)
  return (
    <div className="w-full  flex flex-col items-center justify-center">
      <div className="text-4xl twitter_text">
        About Me Offline
      </div>
      <div className='w-full px-4 h-[30rem]'>
        Im into all sorts of things , im part of many many communities 
        like <a className="btn btn-ghost" onMouseEnter={()=>ping()}   href="https://github.com/orgs/community/discussions/">GhCommuninity</a>,
        <a className="btn btn-ghost" onMouseEnter={()=>ping()}   href="https://eddiehub.org">Eddiehub</a>, <a className="btn btn-ghost" onMouseEnter={()=>ping()}   href="https://www.commclassroom.org/">ComClassRoom</a> , <a className="btn btn-ghost" onMouseEnter={()=>ping()}   href="https://mlh.io/">MLH</a>  and now recently <a className="btn btn-ghost" onMouseEnter={()=>ping()}   href="https://gdsc.community.dev/nbn-sinhgad-school-of-engineering-pune/">GDSC</a>

      </div>
    </div>
  )
}

export default OfflinePage;