import Logo from "../assets/locum-people-logo.svg";
const Navbar = () => {
  return (
    <nav className="navbar w-full text-[2rem] flex flex-row h-[4.5rem] font-semibold box-border px-[2rem]">
      <div className="logo w-1/4 flex flex-row justify-center items-center">
        <img
          src={Logo}
          alt="locumpeople logo"
          className=" h-full object-fill"
        />
        <h2>
          <span className="text-[#198754]">locum</span>
          <span className="text-[#6c757d]">people</span>
        </h2>
      </div>
      <div className="hamburger absolute right-[2rem]">Humburger</div>
      <div className="navroutes absolute w-[100dvw]  z-10 bg-white top-[4.5rem] left-0 flex flex-col items-center justify-center text-center py-[1rem] gap-4">
        <ul className="flex flex-col gap-4 text-[1.5rem]">
          <li>
            About us
            <ul className="text-[1rem]">
              <li>About us</li>
              <li>Meet our Leadership team</li>
              <li>Join our team</li>
              <li>Awards &amp; Accreditation</li>
            </ul>
          </li>
          <li>
            Candidates
            <ul className="text-[1rem]">
              <li>Doctors</li>
              <li>Nurses</li>
            </ul>
          </li>
          <li>Vacancies</li>
          <li>
            Clients
            <ul className="text-[1rem]">
              <li>Why work with us</li>
              <li>How we support you</li>
              <li>Frameworks and contracts</li>
              <li>What our clients say</li>
            </ul>
          </li>
          <li>Latest News</li>
          <li>FAQs</li>
          <li>Resources for Locums</li>
          <li>Contact</li>
        </ul>
        <button className="text-[1.5rem] bg-[#198754] w-fit px-4 py-1 rounded-sm text-white">
          Quick Registration
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
