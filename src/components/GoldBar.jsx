const GoldBar = () => {
  return (
    <>
      <div className="absolute top-0 right-0 w-[150vw] rotate-45 border-t-2 border-gold aspect-square">
        <div className=" animate-[slide_5s_linear_infinite] shadow-custom shadow-gold border-b-2 border-gold"></div>
      </div>
      <div className="absolute left-[-5%] w-[150vw] border-b-2 -rotate-12 top-32 border-gold">
        <div className="w-[20%] animate-[slide_4s_linear_infinite] shadow-custom shadow-gold border-b-2 border-gold"></div>
      </div>
      <div className="absolute left-[-10%] top-[40%] w-[150vw] border-b-2 rotate-[30deg] border-gold">
        <div className="w-[20%] animate-[slide_3s_linear_infinite] shadow-custom shadow-gold border-b-2 border-gold"></div>
      </div>
      <div className="absolute w-[150vw] left-[-20%] top-40 border-b-2 rotate-[-40deg] border-gold">
        <div className="w-[20%] animate-[slide_5s_linear_infinite] shadow-custom shadow-gold border-b-2 border-gold"></div>
      </div>
      <div className="absolute left-[-20%] top-[90%] w-[150vw] border-b-2 rotate-[30deg] border-gold">
        <div className="w-[20%] animate-[slide_4s_linear_infinite] shadow-custom shadow-gold border-b-2 border-gold"></div>
      </div>
    </>
  );
};

export default GoldBar;
