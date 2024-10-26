import React, { useEffect, useState } from "react";
import { Wrapper } from "../../Styles/Wrapper";
import LeftGroup from "../Network/LeftGroup";
import MiddleGroup from "../Network/MiddleGroup";
import RightGroup from "../Network/RightGroup";
const index = () => {
  

  return (
    <div style={{ width: "100%" }}>
      <Wrapper>
          <LeftGroup/>
          <MiddleGroup/>
          <RightGroup/>
      </Wrapper>
    </div>
  );
};

export default index;
