import React from "react";
import styles from "./index.module.scss";

// import classNames from "classnames";

export interface Props {
	[key: string]: any;
}

const Comp: React.FC<Props> = (props: Props) => {
	
	let defaultProps: any = {};
	const mixedProps: any = Object.assign({}, defaultProps, props);
	
	return (
		<React.Fragment>
			
			indexComp
			{props.children}
			{JSON.stringify(props)}
			
			<div className={styles.wrapper}>
				<div className={styles.box}/>
			</div>
		
		</React.Fragment>
	);
};

Comp.displayName = "Index";
Comp.defaultProps = {};
Comp.propTypes = {};
Comp.contextTypes = {};

export default React.memo(Comp);
