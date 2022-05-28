import React, {useState } from "react";

import "./title.scss"

const Title = ({children}) => {
  return (
    <div className="title">
     
        {children}

    </div>
  )}

export default Title;