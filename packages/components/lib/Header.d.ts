/// <reference types="react" />
import * as React from "react";
export interface Props {
    id?: string;
    className?: string;
    css?: {};
    children?: React.ReactNode;
}
declare const Header: (props: Props) => JSX.Element;
export default Header;
