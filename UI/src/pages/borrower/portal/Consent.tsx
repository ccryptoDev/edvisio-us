import React from "react";

const Consent = ({ isActive }: { isActive: boolean }) => {
  if (!isActive) {
    return <></>;
  }
  return <div>Consent</div>;
};

export default Consent;
