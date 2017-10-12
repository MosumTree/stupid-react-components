import React from "react"
import View from './view.js'



const rmb = (props) => (
		<View {...props}>	
			<svg viewBox="0 0 1024 1024"><defs></defs><path d="M843.579349 64.413032 602.322633 474.839659 792.421202 474.839659l0 90.690512L570.930669 565.530171l0 124.988666L792.421202 690.518836l0 91.851964L570.930669 782.370801l0 181.959192L456.98757 964.329992 456.98757 782.369777l-229.629911 0 0-91.851964 229.629911 0L456.98757 565.530171l-229.629911 0 0-90.690512 195.911972 0L184.337867 64.413032l128.476093 0C424.432107 268.273023 492.248655 397.521712 516.284071 452.167287l2.324952 0c8.138354-22.472827 30.419823-67.816548 66.853617-136.034233L722.079134 64.413032 843.579349 64.413032z" ></path></svg>
		</View>
)

const close = (props) => (
	<View {...props}>	
		<svg viewBox="0 0 1024 1024"><defs></defs><path d="M62.407352 764.013711"></path><path d="M836.827063 317.363068c-34.278711-58.449203-79.650061-103.81646-138.102335-138.099265-57.799404-33.900088-120.620172-50.691519-188.797947-50.691519s-131.221624 16.409738-189.67185 50.691519c-57.800427 33.900088-102.948697 79.650061-137.228431 138.099265-33.897018 57.805544-50.695612 120.627335-50.695612 188.799994 0 68.182892 16.416901 131.218554 50.695612 189.676967 33.897018 57.796334 79.428004 103.322204 137.228431 137.223315 58.45125 34.282804 121.495098 50.700729 189.67185 50.700729s130.998543-16.800641 188.797947-50.700729c58.45125-34.282804 104.204293-79.426981 138.102335-137.223315 34.279734-58.458413 50.696636-121.494075 50.696636-189.676967C887.523699 437.990403 870.725104 375.168612 836.827063 317.363068zM692.607404 643.395586l-46.325072 45.452191L509.927805 551.615253 373.574301 688.847777l-46.325072-45.452191 137.228431-137.232524-137.228431-136.355551 45.451168-46.318932L509.927805 460.711893l136.353504-137.223315 46.325072 46.318932-137.228431 136.355551L692.607404 643.395586z"></path><path d="M957.451328 764.013711"></path></svg>
	</View>
)

let arrow = (props) => (
	<View {...props}>
		<svg viewBox="0 0 1024 1024" width="200" height="200"><defs></defs><path d="M755.5 478.8L354.7 78.1c-18.4-18.4-48.4-18.4-66.8 0s-18.4 48.3 0 66.8l367.4 367.4-367.4 367.3c-18.4 18.4-18.4 48.4 0 66.8s48.4 18.4 66.8 0l400.8-400.8c18.4-18.4 18.4-48.3 0-66.8z" fill="#9F9F9F"></path></svg>
	</View>	
)


export default {
	rmb,
	close,
	arrow
}