import React from "react";
import { Outlet } from "@@/exports";
import "@/styles/global/index.scss";
// import styles from "./index.module.scss";
// import classNames from "classnames";

export interface Props {
	[key: string]: any;
}

const Comp: React.FC<Props> = (props: Props) => {
	
	let defaultProps: any = {};
	const mixedProps: any = Object.assign({}, defaultProps, props);
	
	return (
		<React.Fragment>
			
			{/*layoutComp*/}
			{/*{props.children}*/}
			{/*{JSON.stringify(props)}*/}
			<Outlet/>
		
		</React.Fragment>
	);
};

Comp.displayName = "Layout";
Comp.defaultProps = {};
Comp.propTypes = {};
Comp.contextTypes = {};

export default React.memo(Comp);
