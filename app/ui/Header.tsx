const Header = () => {
  return (
    <header>
      <nav className="border-gray-200 bg-blue px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <a href="" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold text-grey">
              SellFast
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className=" mr-2 rounded-lg bg-red px-4 py-2 text-sm font-medium hover:opacity-80 focus:outline-none focus:ring-4 focus:ring-brown lg:px-5 lg:py-2.5"
            >
              Log in
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
