import React from "react";

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="p-5 flex justify-start">
      <p className="text-[13px] text-[#858585]">© {currentYear} Mitr Joshi.</p>
    </div>
  );
};

export default Copyright;
