import Top from "../icons/up.png";

const TopBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-btn-func">
      <div></div>
      <div>
        <img src={Top} className="top-btn" onClick={scrollToTop} alt="" />
      </div>
    </div>
  );
};

export default TopBtn;