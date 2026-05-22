const ButtonMenuToggler = ({
	isMobile,
	type,
	headerType,
	handleMobileToggler,
	onMenuMouseEnter,
	onMenuMouseLeave,
}) => {
	return (
		<>
			{type ? (
				<button
					className={`menu_btn ${isMobile ? "d-lg-none" : ""}`}
					onMouseEnter={onMenuMouseEnter}
					onMouseLeave={onMenuMouseLeave}
				>
					<span className="line">
						<span></span>
						<span></span>
						<span></span>
					</span>
				</button>
			) : (
				<button
					className={`menu_btn ${
						isMobile
							? "d-lg-none"
							: headerType === 3 || headerType == 4 || headerType == 6
							? "d-none d-xl-inline-flex"
							: ""
					}`}
					onMouseEnter={onMenuMouseEnter}
					onMouseLeave={onMenuMouseLeave}
				>
					Follow us
					<span className="cubes">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</span>
				</button>
			)}
		</>
	);
};

export default ButtonMenuToggler;
