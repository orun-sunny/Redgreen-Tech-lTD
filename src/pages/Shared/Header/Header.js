

const Header = () => {
  return (
    <div className="navbar border-b-[1px] border-[#eaeaea]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              // xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Item 1</a>
            </li>
            <li>
              <a href="/">Parent</a>
              <ul className="p-2">
                <li>
                  <a href="/">Submenu 1</a>
                </li>
                <li>
                  <a href="/">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/"> Item 3</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img src="/src/assets/redgreen.jpeg" className="w-6 h-5" alt="" />
          <a href="/" className="text-xl">Redgreen</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="px-1 flex items-center gap-8 ">
          <li className="group/item min-h-[38px] mt-5 hover:border-b-[2px] border-rose-600  cursor-pointer">
            <a href="/" className=" ">Laptop</a>
            <div className="group-hover/item:visible group-hover/item:h-60 invisible h-0 w-full min-w-full series-slide absolute z-50 bg-white top-12 left-0  max-w-5xl py-8 border-b border-[#eaeaea]">
              <div className="series-slide-card-container flex align-center justify-center gap-10">
                <div className="series-slide-card flex items-center flex-col justify-center">
                  <img
                    className="max-w-[120px] object-cover"
                    src="https://oasis.opstatics.com/content/dam/oasis/page/2023/6-0-product-card/phones/10pro/pc.png.thumb.webp"
                    alt=""
                  />
                  {/* <div className="text">Demo Product</div> */}
                </div>
                <div className="series-slide-card flex items-center flex-col justify-center">
                  <img
                    className="max-w-[120px] object-cover"
                    src="https://oasis.opstatics.com/content/dam/oasis/page/2023/6-0-product-card/phones/10pro/pc.png.thumb.webp"
                    alt=""
                  />
                  {/* <div className="text">Demo Product</div> */}
                </div>
                <div className="series-slide-card flex items-center flex-col justify-center">
                  <img
                    className="max-w-[120px] object-cover"
                    src="https://oasis.opstatics.com/content/dam/oasis/page/2023/6-0-product-card/phones/10pro/pc.png.thumb.webp"
                    alt=""
                  />
                  {/* <div className="text">Demo Product</div> */}
                </div>

              </div>
            </div>
          </li>
          {/* <li className="group/item min-h-[32px] mt-2 cursor-pointer">
            <a href="/">Phones</a>
          </li> */}
          <li className="group/item min-h-[38px] mt-5 hover:border-b-[2px] border-rose-600  cursor-pointer">
            <a href="/" className=" ">Phones</a>
            <div className="group-hover/item:visible group-hover/item:h-60 invisible h-0 w-80 min-w-full series-slide absolute z-50 bg-white top-12 left-0  max-w-5xl py-8 border-b border-[#eaeaea]">
              {/* <div className="">
                <div>Services</div>
                <div>Services</div>
                <div>Services</div>
                <div>Services</div>
              </div> */}
              <div className="series-slide-card-container flex align-center justify-center gap-10">
                <div className="series-slide-card flex items-center flex-col justify-center">
                  <img
                    className="max-w-[120px] object-cover"
                    src="https://oasis.opstatics.com/content/dam/oasis/page/2023/6-0-product-card/phones/10pro/pc.png.thumb.webp"
                    alt=""
                  />
                 
                </div>
                <div className="series-slide-card flex items-center flex-col justify-center">
                  <img
                    className="max-w-[120px] object-cover"
                    src="https://oasis.opstatics.com/content/dam/oasis/page/2023/6-0-product-card/phones/10pro/pc.png.thumb.webp"
                    alt=""
                  />
                  
                </div>
                <div className="series-slide-card flex items-center flex-col justify-center">
                  <img
                    className="max-w-[120px] object-cover"
                    src="https://oasis.opstatics.com/content/dam/oasis/page/2023/6-0-product-card/phones/10pro/pc.png.thumb.webp"
                    alt=""
                  />
                 
                </div>

              </div>
            </div>
          </li>


          <li className="group/item min-h-[32px] mt-2 cursor-pointer">
            <a href="/">Audio</a>
          </li>
          <li className="group/item min-h-[32px] mt-2 cursor-pointer">
            <a href="/">Accessories</a>
          </li>
          <li className="group/item min-h-[32px] mt-2 cursor-pointer">
            <a href="/">Offers</a>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            {/* <div className="w-10 rounded-full">
              <img src="../../../src/assets/kaderfoysal.jpg" />
            </div> */}
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/" className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a href="/">Settings</a>
            </li>
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
