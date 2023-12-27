import { useState } from 'react';
import './navbar.scss';
import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {


  const [bannerClosed, setBannerClose] = useState(false);

  return (
    <nav>
      {
        !bannerClosed &&
        (<div className="sale_banner">
          <div className="container">
            <div className="logo">
              <div className="logo_img">
                Black
              </div>
              <span>Friday</span>
            </div>

            <div className="sale">
              <h6>Up to</h6>
              <h2>59%</h2>
              <h4>Off</h4>
            </div>

            <button>
              SHOP NOW
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M3.625 10H17.375" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.75 4.375L17.375 10L11.75 15.625" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="close_btn" onClick={() => setBannerClose(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12.5 3.5L3.5 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.5 12.5L3.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>)
      }


      <div className="nav_welcome">
        <div className="container">
          <p>
            Welcome to Clicon online eCommerce store.
          </p>

          <div className="rightside">
            <div className="socials">
              <span>Follow us:</span>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.03184 14.5024C11.0699 14.5024 14.3718 9.49713 14.3718 5.15672C14.3718 5.01457 14.3689 4.87308 14.3625 4.73216C15.005 4.26699 15.5595 3.69102 16 3.03127C15.4118 3.29293 14.7789 3.46904 14.1149 3.54844C14.7926 3.1418 15.3129 2.4985 15.5584 1.73168C14.914 2.11418 14.2091 2.38382 13.4739 2.52898C12.8749 1.89052 12.0221 1.4912 11.0778 1.4912C9.26494 1.4912 7.79489 2.96218 7.79489 4.77539C7.79489 5.03318 7.82374 5.28384 7.88006 5.52435C5.15177 5.38698 2.73252 4.07994 1.11343 2.09252C0.821818 2.59379 0.668434 3.16349 0.668943 3.74344C0.668943 4.88303 1.24846 5.88902 2.12976 6.47758C1.60846 6.46165 1.0986 6.32076 0.643057 6.06675C0.642569 6.08055 0.642569 6.09398 0.642569 6.10872C0.642569 7.69943 1.77408 9.02758 3.27613 9.32853C2.99402 9.40541 2.70292 9.44428 2.41054 9.44411C2.19938 9.44411 1.99359 9.42332 1.79359 9.3849C2.21151 10.69 3.42335 11.6397 4.86013 11.6663C3.73659 12.5474 2.32127 13.0722 0.783024 13.0722C0.521349 13.0725 0.259888 13.0573 0 13.0267C1.45281 13.9585 3.17789 14.5022 5.032 14.5022" fill="white" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clipPath="url(#clip0_2515_3527)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 0C12.4183 0 16 3.58173 16 8C16 12.4183 12.4183 16 8 16C3.58173 16 0 12.4183 0 8C0 3.58173 3.58173 0 8 0Z" fill="white" />
                    <path d="M9.04144 15.9328V9.75225H10.7849L11.016 7.57697H9.04144L9.04437 6.48815C9.04437 5.92079 9.0983 5.61693 9.91372 5.61693H11.0038V3.44128H9.25992C7.16524 3.44128 6.42808 4.49647 6.42808 6.27123V7.57714H5.12231V9.75261H6.42808V15.8452C6.93677 15.9465 7.46267 16 8.00114 16C8.34899 16 8.69648 15.9776 9.04144 15.9328Z" fill="#1B6392" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2515_3527">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clipPath="url(#clip0_2515_3530)">
                    <path d="M7.02418 0.0531119C4.36532 0.349929 1.71584 2.50107 1.60648 5.57391C1.53775 7.4501 2.07046 8.85764 3.85605 9.25288C4.63089 7.88596 3.60609 7.58445 3.44675 6.59558C2.79219 2.54325 8.12084 -0.220272 10.9094 2.60886C12.8387 4.56785 11.5686 10.5948 8.45671 9.96836C5.47604 9.37004 9.9158 4.57254 7.53658 3.63054C5.60258 2.86506 4.57466 5.97227 5.49167 7.51572C4.95427 10.1699 3.79668 12.671 4.26534 16C5.78536 14.8971 6.29776 12.785 6.71799 10.5823C7.4819 11.0463 7.88964 11.529 8.86445 11.604C12.4591 11.8821 14.4665 8.01562 13.976 4.44913C13.5401 1.28725 10.3845 -0.321815 7.02418 0.0531119Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2515_3530">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>


              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clipPath="url(#clip0_2515_3538)">
                    <path d="M5.60062 8C5.60062 6.67457 6.67485 5.59981 8.00034 5.59981C9.32582 5.59981 10.4006 6.67457 10.4006 8C10.4006 9.32544 9.32582 10.4002 8.00034 10.4002C6.67485 10.4002 5.60062 9.32544 5.60062 8ZM4.30308 8C4.30308 10.0419 5.95833 11.6971 8.00034 11.6971C10.0423 11.6971 11.6976 10.0419 11.6976 8C11.6976 5.95808 10.0423 4.30289 8.00034 4.30289C5.95833 4.30289 4.30313 5.95797 4.30313 8H4.30308ZM10.98 4.1563C10.9799 4.32718 11.0305 4.49425 11.1254 4.63637C11.2203 4.77849 11.3552 4.88929 11.5131 4.95474C11.6709 5.0202 11.8446 5.03738 12.0122 5.00411C12.1799 4.97084 12.3339 4.88861 12.4547 4.76783C12.5756 4.64704 12.658 4.49313 12.6914 4.32554C12.7248 4.15795 12.7078 3.98423 12.6424 3.82632C12.5771 3.66842 12.4664 3.53344 12.3243 3.43845C12.1823 3.34345 12.0153 3.29271 11.8444 3.29264H11.844C11.615 3.29275 11.3953 3.38376 11.2333 3.5457C11.0713 3.70763 10.9802 3.92724 10.98 4.1563ZM5.09142 13.8607C4.38942 13.8287 4.00786 13.7118 3.7543 13.613C3.41813 13.4821 3.17828 13.3263 2.92609 13.0744C2.67391 12.8226 2.51781 12.583 2.38751 12.2469C2.28867 11.9934 2.17173 11.6118 2.13982 10.9098C2.10491 10.1508 2.09794 9.92286 2.09794 8.00012C2.09794 6.07737 2.10549 5.85003 2.13982 5.09045C2.17179 4.38848 2.28959 4.00757 2.38751 3.75339C2.51838 3.41723 2.67425 3.17739 2.92609 2.92521C3.17793 2.67304 3.41756 2.51694 3.7543 2.38665C4.00775 2.28781 4.38942 2.17088 5.09142 2.13897C5.85039 2.10407 6.07838 2.0971 8.00034 2.0971C9.92229 2.0971 10.1505 2.10453 10.9101 2.13909C11.6121 2.17106 11.993 2.28885 12.2472 2.38677C12.5834 2.51706 12.8233 2.6735 13.0754 2.92533C13.3276 3.17716 13.4832 3.41735 13.614 3.7535C13.7129 4.00694 13.8298 4.3886 13.8617 5.09057C13.8966 5.85014 13.9036 6.07749 13.9036 8.00023C13.9036 9.92298 13.8966 10.1503 13.8617 10.9099C13.8297 11.6119 13.7122 11.9934 13.614 12.247C13.4832 12.5831 13.3273 12.823 13.0754 13.0746C12.8236 13.3262 12.5834 13.4823 12.2472 13.6131C11.9938 13.712 11.6121 13.8289 10.9101 13.8608C10.1511 13.8957 9.92316 13.9027 8.00034 13.9027C6.07751 13.9027 5.85016 13.8957 5.09142 13.8608V13.8607ZM5.0318 0.843606C4.26529 0.878512 3.74151 1.00005 3.28409 1.17803C2.81066 1.36183 2.40934 1.60842 2.0086 2.00851C1.60786 2.4086 1.3619 2.80996 1.17809 3.28395C1.0001 3.74164 0.878561 4.2651 0.843654 5.03159C0.808171 5.79928 0.800049 6.04471 0.800049 8C0.800049 9.95529 0.808171 10.2007 0.843654 10.9684C0.878561 11.735 1.0001 12.2584 1.17809 12.7161C1.3619 13.1895 1.60792 13.5916 2.0086 13.9915C2.40928 14.3914 2.81008 14.6377 3.28409 14.822C3.74237 15 4.26529 15.1215 5.0318 15.1564C5.79993 15.1913 6.04497 15.2 8.00034 15.2C9.9557 15.2 10.2011 15.1919 10.9689 15.1564C11.7354 15.1215 12.2589 15 12.7166 14.822C13.19 14.6377 13.5913 14.3916 13.9921 13.9915C14.3928 13.5914 14.6383 13.1895 14.8226 12.7161C15.0006 12.2584 15.1227 11.7349 15.157 10.9684C15.1919 10.2002 15.2 9.95529 15.2 8C15.2 6.04471 15.1919 5.79928 15.157 5.03159C15.1221 4.26505 15.0006 3.74135 14.8226 3.28395C14.6383 2.81053 14.3922 2.40923 13.9921 2.00851C13.592 1.60779 13.19 1.36183 12.7172 1.17803C12.2589 1.00005 11.7354 0.877936 10.9694 0.843606C10.2016 0.808528 9.95628 0.800003 8.0012 0.800003C6.04612 0.800003 5.80022 0.808125 5.03209 0.843606" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2515_3538">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>

            <div className="spacer"></div>

            <div className="lang_currency">
              <div className="lang">
                <span>Eng</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <g opacity="0.5">
                    <path d="M9.75 4.5L6 8.25L2.25 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>

              <div className="currency">
                <span>USD</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <g opacity="0.5">
                    <path d="M9.75 4.5L6 8.25L2.25 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nav_main">
        <div className="container">
          <div className="nav_logo">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24ZM24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="white" />
              </svg>
              <span>CLICON</span>
            </a>
          </div>

          <div className="search_container">
            <input type="text" placeholder='Search for anything...' />
            <div className="search_icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M9.5625 15.625C13.1869 15.625 16.125 12.6869 16.125 9.0625C16.125 5.43813 13.1869 2.5 9.5625 2.5C5.93813 2.5 3 5.43813 3 9.0625C3 12.6869 5.93813 15.625 9.5625 15.625Z" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.2031 13.7031L18 17.5" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className="nav_actions">
            <div className="basket">
              <CiShoppingCart />
            </div>

            <div className="favorites">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 27C16 27 3.5 20 3.5 11.5C3.5 9.99735 4.02062 8.54112 4.97328 7.37907C5.92593 6.21701 7.25178 5.42091 8.72525 5.12622C10.1987 4.83153 11.7288 5.05645 13.0551 5.76271C14.3814 6.46897 15.4221 7.61294 16 9C16.5779 7.61294 17.6186 6.46897 18.9449 5.76271C20.2712 5.05645 21.8013 4.83153 23.2748 5.12622C24.7482 5.42091 26.0741 6.21701 27.0267 7.37907C27.9794 8.54112 28.5 9.99735 28.5 11.5C28.5 20 16 27 16 27Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                <path d="M3.875 27C5.10367 24.8714 6.87104 23.1038 8.99944 21.8749C11.1278 20.6459 13.5423 19.9989 16 19.9989C18.4577 19.9989 20.8722 20.6459 23.0006 21.8749C25.129 23.1038 26.8963 24.8714 28.125 27" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar