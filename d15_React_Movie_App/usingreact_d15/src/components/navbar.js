import React from "react";

function Navbar(){
    const [isActive, setIsActive] = useState(false);
  const [currentLinkIndex, setCurrentLinkIndex] = useState(0);

  useEffect(() => {
    const navaElements = document.querySelectorAll('.nava');
    const lihoverElements = document.querySelectorAll('.lihover');

    // Handle the click event for nava elements
    navaElements.forEach((linkelement, idx) => {
      linkelement.addEventListener('click', () => {
        navaElements.forEach((element) => {
          element.classList.remove('currentpageA');
        });
        lihoverElements.forEach((element) => {
          element.classList.remove('currentpage');
        });
        linkelement.classList.add('currentpageA');
        lihoverElements[idx].classList.add('currentpage');
        setCurrentLinkIndex(idx);
      });
    });

    // Clean up event listeners when the component unmounts
    return () => {
      navaElements.forEach((linkelement, idx) => {
        linkelement.removeEventListener('click', () => {
          // Cleanup if needed
        });
      });
    };
  }, []);

  const toggleNav = () => {
    setIsActive(!isActive);
  };



    return(
        <>
        <nav className="" id="nav">
            <ul>
                
                <li><a href="/d11_MenuButton_Animation/index.html" className="nava currentpageA">Home<div className="lihover currentpage" style={{ width: "44px" }}></div></a></li>
       
                <li><a href="#" className="nava">Work<div className="lihover" style={{width: "38px"}}></div></a></li>
                
                <li><a href="#" className="nava">About<div className="lihover" style={{width: "46px"}}></div></a></li>
                
                <li><a href="#" className="nava">Resume<div className="lihover" style={{width: "62px"}}></div></a></li>
            </ul>
            <button className="menubtn">
                <div className="line line1"></div>
                <div className="line line3"></div>
                <div className="line line2"></div>
            </button>
        </nav>


{/* react return */}
        <div>
      <nav id="nav" className={isActive ? 'active' : ''}>
        <ul>
          <li>
            <a href="/d11_MenuButton_Animation/index.html" className={`nava ${currentLinkIndex === 0 ? 'currentpageA' : ''}`}>
              Home
              <div className={`lihover ${currentLinkIndex === 0 ? 'currentpage' : ''}`} style={{ width: '44px' }}></div>
            </a>
          </li>
          {/* Add more list items here */}
        </ul>
      </nav>
      <button className="menubtn" onClick={toggleNav}>
        Menu Button
      </button>
    </div>
        
        
        
        </>
    )
}

export default Navbar;