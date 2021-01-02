import './src/styles/main.css';

import React from 'react';
import GlobalState from "./src/context/GlobalState";

export const wrapRootElement = ({ element }) => (
    <GlobalState>{element}</GlobalState>
)
