import React from "react";
import "prismjs/themes/prism.css";

import "../global-styles";
import userConfig from "../../config";

import Header from "../components/Header";
import GlobalStyle from "../global-styles";

class Template extends React.Component {
    render() {
        const { children, showHeader } = this.props;
        return (
            <div>
                <GlobalStyle />
                {showHeader && <Header config={userConfig} />}
                {children}
            </div>
        );
    }
}

export default Template;
