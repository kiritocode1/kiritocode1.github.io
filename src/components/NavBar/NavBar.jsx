import { useSpring, animated as a  } from "react-spring";



//!  Self explanatory code , animated w/ spring and native implementation of the 


const NavBar = () => { 


  const styl = useSpring({
    from: { rotateX: 0, x: 0 },
    to: { rotateX: 360, x: 3 },
    loop: { reverse: true },
    delay: 1500
  });
    return (
      <div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="https://www.github.com/kiritocode1"><div className="bg-clip-text text-transparent  bg-secondary text-xl flex"><a.div style={styl} className="bg-inherit bg-clip-text text-transparent ">◉</a.div>/_\<a.div style={styl} className="bg-inherit bg-clip-text text-transparent ">◉</a.div></div></a>
  </div>
  <div class="flex-none dropdown dropdown-end">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </button>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a href="#footer">Content</a></li>
            <li><a href="https://github.com/kiritocode1">
            <div>themes</div>
            </a></li>
  </ul>
  </div>
</div>
    );
}

export default NavBar;