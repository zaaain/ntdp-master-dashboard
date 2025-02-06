
"use client"
import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { ThemeChanger } from "../../redux/action";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import SimpleBar from 'simplebar-react';
import Menuloop from "./menuloop";
import store from "../../redux/store";
import { basePath } from "../../../next.config";
import MENUITEMS from "./nav";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Sidebar = ({ local_varaiable, ThemeChanger }) => {

	const [menuitems, setMenuitems] = useState(MENUITEMS);

	function closeMenu() {
		const closeMenudata = (items) => {
			items?.forEach((item) => {
				item.active = false;
				closeMenudata(item.children);
			});
		};
		closeMenudata(MENUITEMS);
		setMenuitems((arr) => [...arr]);
	}

	useEffect(() => {
		window.addEventListener('resize', menuResizeFn);
		window.addEventListener('resize', checkHoriMenu);
		const mainContent = document.querySelector(".main-content");
		console.log("innerwidth", window.innerWidth)
		if (window.innerWidth <= 992) {
			if (mainContent) {
				const theme = store.getState();
				ThemeChanger({ ...theme, dataToggled: "close" });
			}
			else if (document.documentElement.getAttribute('data-nav-layout') == 'horizontal') {
				closeMenu();
			}
		}
		mainContent?.addEventListener('click', menuClose);
		return () => {
			window.removeEventListener("resize", menuResizeFn);
			window.removeEventListener('resize', checkHoriMenu);
		};
	}, []);

	function Onhover() {
		const theme = store.getState();
		if ((theme.dataToggled == 'icon-overlay-close' || theme.dataToggled == 'detached-close') && theme.iconOverlay != 'open') {
			ThemeChanger({ ...theme, "iconOverlay": "open" });
		}
	}
	function Outhover() {
		const theme = store.getState();
		if ((theme.dataToggled == 'icon-overlay-close' || theme.dataToggled == 'detached-close') && theme.iconOverlay == 'open') {
			ThemeChanger({ ...theme, "iconOverlay": "" });
		}
	}


	function menuClose() {
		;
		const theme = store.getState();
		if (window.innerWidth <= 992) {
			ThemeChanger({ ...theme, dataToggled: "close" });
		}
		const overlayElement = document.querySelector("#responsive-overlay") ;
		if (overlayElement) {
			overlayElement.classList.remove("active");
		}
		if (theme.dataNavLayout == "horizontal" || theme.dataNavStyle == "menu-click" || theme.dataNavStyle == "icon-click") {
			// closeMenu();
		}
	}


	const WindowPreSize = typeof window !== 'undefined' ? [window.innerWidth] : [];

	function menuResizeFn() {

		if (typeof window === 'undefined') {
			// Handle the case where window is not available (server-side rendering)
			return;
		}

		WindowPreSize.push(window.innerWidth);
		if (WindowPreSize.length > 2) { WindowPreSize.shift() }

		const theme = store.getState();
		const currentWidth = WindowPreSize[WindowPreSize.length - 1];
		const prevWidth = WindowPreSize[WindowPreSize.length - 2];


		if (WindowPreSize.length > 1) {
			if (currentWidth < 992 && prevWidth >= 992) {
				console.log("opeing")
				// less than 992;
				console.log('Width is less than 992');
				ThemeChanger({ ...theme, dataToggled: "close" });
				console.log('menuresize',);
			}

			if (currentWidth >= 992 && prevWidth < 992) {
				// greater than 992
				console.log('Width is greater than or equal to 992');
				console.log('Current dataVerticalStyle:', theme.dataVerticalStyle);
				ThemeChanger({ ...theme, dataToggled: theme.dataVerticalStyle === "doublemenu" ? "double-menu-open" : "" });
				console.log('menuresizeclosed',);

			}
		}
	}

	function switcherArrowFn() {

		// Used to remove is-expanded class and remove class on clicking arrow buttons
		function slideClick() {
			const slide = document.querySelectorAll(".slide");
			const slideMenu = document.querySelectorAll(".slide-menu");

			slide.forEach((element) => {
				if (element.classList.contains("is-expanded")) {
					element.classList.remove("is-expanded");
				}
			});

			slideMenu.forEach((element) => {
				if (element.classList.contains("open")) {
					element.classList.remove("open");
					element.style.display = "none";
				}
			});
		}

		slideClick();
	}

	function slideRight() {
		const menuNav = document.querySelector(".main-menu");
		const mainContainer1 = document.querySelector(".main-sidebar");

		if (menuNav && mainContainer1) {
			const marginLeftValue = Math.ceil(
				Number(window.getComputedStyle(menuNav).marginInlineStart.split("px")[0])
			);
			const marginRightValue = Math.ceil(
				Number(window.getComputedStyle(menuNav).marginInlineEnd.split("px")[0])
			);
			const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
			let mainContainer1Width = mainContainer1.offsetWidth;

			if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
				if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
					if (Math.abs(check) > Math.abs(marginLeftValue)) {
						menuNav.style.marginInlineEnd = "0";

						if (!(Math.abs(check) > Math.abs(marginLeftValue) + mainContainer1Width)) {
							mainContainer1Width = Math.abs(check) - Math.abs(marginLeftValue);
							const slideRightButton = document.querySelector("#slide-right");
							if (slideRightButton) {
								slideRightButton.classList.add("hidden");
							}
						}

						menuNav.style.marginInlineStart =
							(Number(menuNav.style.marginInlineStart.split("px")[0]) -
								Math.abs(mainContainer1Width)) +
							"px";

						const slideRightButton = document.querySelector("#slide-right");
						if (slideRightButton) {
							slideRightButton.classList.remove("hidden");
						}
					}
				} else {
					if (Math.abs(check) > Math.abs(marginRightValue)) {
						menuNav.style.marginInlineEnd = "0";

						if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
							mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
							const slideRightButton = document.querySelector("#slide-right");
							if (slideRightButton) {
								slideRightButton.classList.add("hidden");
							}
						}

						menuNav.style.marginInlineStart =
							(Number(menuNav.style.marginInlineStart.split("px")[0]) -
								Math.abs(mainContainer1Width)) +
							"px";

						const slideLeftButton = document.querySelector("#slide-left");
						if (slideLeftButton) {
							slideLeftButton.classList.remove("hidden");
						}
					}
				}
			}

			const element = document.querySelector(".main-menu > .slide.open");
			const element1 = document.querySelector(".main-menu > .slide.open > ul");
			if (element) {
				element.classList.remove("active");
			}
			if (element1) {
				element1.style.display = "none";
			}
		}

		switcherArrowFn();
	}

	function slideLeft() {
		const menuNav = document.querySelector(".main-menu");
		const mainContainer1 = document.querySelector(".main-sidebar");

		if (menuNav && mainContainer1) {
			const marginLeftValue = Math.ceil(
				Number(window.getComputedStyle(menuNav).marginInlineStart.split("px")[0])
			);
			const marginRightValue = Math.ceil(
				Number(window.getComputedStyle(menuNav).marginInlineEnd.split("px")[0])
			);
			const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
			let mainContainer1Width = mainContainer1.offsetWidth;

			if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
				if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
					if (Math.abs(check) <= Math.abs(marginLeftValue)) {
						menuNav.style.marginInlineStart = "0px";
					}
				} else {
					if (Math.abs(check) > Math.abs(marginRightValue)) {
						menuNav.style.marginInlineStart = "0";

						if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
							mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
							const slideRightButton = document.querySelector("#slide-right");
							if (slideRightButton) {
								slideRightButton.classList.add("hidden");
							}
						}

						menuNav.style.marginInlineStart =
							(Number(menuNav.style.marginInlineStart.split("px")[0]) -
								Math.abs(mainContainer1Width)) +
							"px";

						const slideLeftButton = document.querySelector("#slide-left");
						if (slideLeftButton) {
							slideLeftButton.classList.remove("hidden");
						}
					}
				}
			}

			const element = document.querySelector(".main-menu > .slide.open");
			const element1 = document.querySelector(".main-menu > .slide.open > ul");
			if (element) {
				element.classList.remove("active");
			}
			if (element1) {
				element1.style.display = "none";
			}
		}

		switcherArrowFn();
	}

	const checkHoriMenu = () => {
		const menuNav = document.querySelector(".main-menu");
		const mainContainer1 = document.querySelector(".main-sidebar");

		const marginLeftValue = Math.ceil(
			Number(window.getComputedStyle(menuNav).marginLeft.split("px")[0])
		);
		const marginRightValue = Math.ceil(
			Number(window.getComputedStyle(menuNav).marginRight.split("px")[0])
		);
		const check = menuNav.scrollWidth - mainContainer1.offsetWidth;

		// Show/Hide the arrows
		if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
		} else {
			menuNav.style.marginLeft = "0px";
			menuNav.style.marginRight = "0px";
			menuNav.style.marginInlineStart = "0px";
		}

		if (!(document.querySelector("html")?.getAttribute("dir") === "rtl")) {
			// LTR check the width and adjust the menu in screen
			if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
				if (Math.abs(check) < Math.abs(marginLeftValue)) {
					menuNav.style.marginLeft = -check + "px";
				}
			}

		} else {
			// RTL check the width and adjust the menu in screen
			if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
				if (Math.abs(check) < Math.abs(marginRightValue)) {
					menuNav.style.marginRight = -check + "px";
				}
			}

		}

	};

	const level = 0;
	let hasParent = false;
	let hasParentLevel = 0;

	function setSubmenu(event, targetObject, MENUITEMS = menuitems) {
		const theme = store.getState();
		// if ((window.screen.availWidth <= 992 || theme.dataNavStyle != "icon-hover") && (window.screen.availWidth <= 992 || theme.dataNavStyle != "menu-hover")) {
		if (!event?.ctrlKey) {
			for (const item of MENUITEMS) {
				if (item === targetObject) {
					item.active = true;
					item.selected = true;
					// setMenuAncestorsActive(MENUITEMS,item);
					setMenuAncestorsActive(item);
				} else if (!item.active && !item.selected) {
					item.active = false; // Set active to false for items not matching the target
					item.selected = false; // Set active to false for items not matching the target
				} else {
					// removeActiveOtherMenus(MENUITEMS,item);
					removeActiveOtherMenus(item);
				}
				if (item.children && item.children.length > 0) {
					setSubmenu(event, targetObject, item.children);
				}
			}

		}
		// }

		setMenuitems((arr) => [...arr]);
	}

	function getParentObject(obj, childObject) {
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (typeof obj[key] === 'object' && JSON.stringify(obj[key]) === JSON.stringify(childObject)) {
					return obj; // Return the parent object
				}
				if (typeof obj[key] === 'object') {
					const parentObject = getParentObject(obj[key], childObject);
					if (parentObject !== null) {
						return parentObject;
					}
				}
			}
		}
		return null; // Object not found
	}

	function setMenuAncestorsActive(targetObject) {
		const parent = getParentObject(menuitems, targetObject);
		const theme = store.getState();
		if (parent) {
			if (hasParentLevel > 2) {
				hasParent = true;
			}
			parent.active = true;
			parent.selected = true;
			hasParentLevel += 1;
			setMenuAncestorsActive(parent);
		}
		else if (!hasParent) {
			if (theme.dataVerticalStyle == 'doublemenu') {
				ThemeChanger({ ...theme, dataToggled: "double-menu-close" });
			}
		}
	}

	function removeActiveOtherMenus(item) {
		if (item) {
			if (Array.isArray(item)) {
				for (const val of item) {
					val.active = false;
					val.selected = false;
				}
			}
			item.active = false;
			item.selected = false;

			if (item.children && item.children.length > 0) {
				removeActiveOtherMenus(item.children);
			}
		}
		else {

		}
	}

	function setMenuUsingUrl(currentPath) {
		hasParent = false;
		hasParentLevel = 1;
		// Check current url and trigger the setSidemenu method to active the menu.
		const setSubmenuRecursively = (items) => {

			items?.forEach((item) => {
				if (item.path == '') { }
				else if (item.path === currentPath) {
					setSubmenu(null, item);
				}
				setSubmenuRecursively(item.children);
			});
		};
		setSubmenuRecursively(MENUITEMS);
	}

	const pathname = usePathname()

	const [previousUrl, setPreviousUrl] = useState("/");

	useEffect(() => {

		const targetElement = document.documentElement;
		const observer = new MutationObserver(handleAttributeChange);
		const config = { attributes: true };
		observer.observe(targetElement, config);
		let currentPath = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
		if (currentPath !== previousUrl) {
			setMenuUsingUrl(currentPath);
			setPreviousUrl(currentPath);
		}
	}, [pathname]);

	function handleAttributeChange(mutationsList) {
		for (const mutation of mutationsList) {
			if (mutation.type === 'attributes' && mutation.attributeName === 'data-nav-layout') {
				const newValue = mutation.target.getAttribute('data-nav-layout');
				if (newValue == 'vertical') {
					let currentPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
					currentPath = !currentPath ? '/dashboard/ecommerce' : currentPath;
					setMenuUsingUrl(currentPath);
				} else {
					closeMenu();
				}
			}
		}
	}

	function toggleSidemenu(event, targetObject, MENUITEMS = menuitems) {
		const theme = store.getState();
		let element = event.target;
		if ((theme.dataNavStyle != "icon-hover" && theme.dataNavStyle != "menu-hover") || (window.innerWidth < 992) || (theme.dataNavLayout != "horizontal") && (theme.dataToggled != "icon-hover-closed" && theme.dataToggled != "menu-hover-closed")) {

			if (
				(theme.dataNavStyle !== "icon-hover" && theme.dataNavStyle !== "menu-hover") ||
				window.innerWidth < 992 ||
				theme.dataNavLayout !== "horizontal" ||
				(theme.dataToggled !== "icon-hover-closed" && theme.dataToggled !== "menu-hover-closed")
			) {
				for (const item of MENUITEMS) {
					if (item === targetObject) {
						if (theme.dataVerticalStyle == 'doublemenu' && item.active) { return; }
						item.active = !item.active;

						if (item.active) {
							closeOtherMenus(MENUITEMS, item);
						} else {
							if (theme.dataVerticalStyle == 'doublemenu') {
								ThemeChanger({ ...theme, dataToggled: "double-menu-close" });
							}
						}
						setAncestorsActive(MENUITEMS, item);

					}
					else if (!item.active) {
						if (theme.dataVerticalStyle != 'doublemenu') {
							item.active = false; // Set active to false for items not matching the target
						}
					}
					if (item.children && item.children.length > 0) {
						toggleSidemenu(event, targetObject, item.children);
					}
				}
				if (targetObject?.children && targetObject.active) {
					if (theme.dataVerticalStyle == 'doublemenu' && theme.dataToggled != 'double-menu-open') {
						ThemeChanger({ ...theme, dataToggled: "double-menu-open" });
					}
				}
				if (element && theme.dataNavLayout == 'horizontal' && (theme.dataNavStyle == 'menu-click' || theme.dataNavStyle == 'icon-click')) {
					const listItem = element.closest("li");
					if (listItem) {
						// Find the first sibling <ul> element
						const siblingUL = listItem.querySelector("ul");
						let outterUlWidth = 0;
						let listItemUL = listItem.closest('ul:not(.main-menu)');
						while (listItemUL) {
							listItemUL = listItemUL.parentElement.closest('ul:not(.main-menu)');
							if (listItemUL) {
								outterUlWidth += listItemUL.clientWidth;
							}
						}
						if (siblingUL) {
							// You've found the sibling <ul> element
							let siblingULRect = listItem.getBoundingClientRect();
							if (theme.dir == 'rtl') {
								if ((siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 && outterUlWidth < window.innerWidth) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
									targetObject.dirchange = true;
								} else {
									targetObject.dirchange = false;
								}
							} else {
								if ((outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth && siblingULRect.right >= 0) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
									targetObject.dirchange = true;
								} else {
									targetObject.dirchange = false;
								}
							}
						}
						setTimeout(() => {
							let computedValue = siblingUL.getBoundingClientRect();
							if ((computedValue.bottom) > window.innerHeight) {
								siblingUL.style.height = (window.innerHeight - computedValue.top - 8) + 'px';
								siblingUL.style.overflow = 'auto';
							}
						}, 100);
					}
				}
			}
		}
		setMenuitems((arr) => [...arr]);
	}

	function setAncestorsActive(MENUITEMS, targetObject) {
		const theme = store.getState();
		const parent = findParent(MENUITEMS, targetObject);
		if (parent) {
			parent.active = true;
			if (parent.active) {
				ThemeChanger({ ...theme, dataToggled: "double-menu-open" });
			}

			setAncestorsActive(MENUITEMS, parent);
		} else {
			if (theme.dataVerticalStyle == "doublemenu") {
				ThemeChanger({ ...theme, dataToggled: "double-menu-close" });
			}

		}
	}
	function closeOtherMenus(MENUITEMS, targetObject) {
		for (const item of MENUITEMS) {
			if (item !== targetObject) {
				item.active = false;
				if (item.children && item.children.length > 0) {
					closeOtherMenus(item.children, targetObject);
				}
			}
		}
	}
	function findParent(MENUITEMS, targetObject) {
		for (const item of MENUITEMS) {
			if (item.children && item.children.includes(targetObject)) {
				return item;
			}
			if (item.children && item.children.length > 0) {
				const parent = findParent(MENUITEMS = item.children, targetObject);
				if (parent) {
					return parent;
				}
			}
		}
		return null;
	}

	const Sideclick = () => {
		if (window.innerWidth > 992) {
			let html = document.documentElement;
			if (html.getAttribute('icon-overlay') != 'open') {
				html.setAttribute('icon-overlay', 'open');
			}
		}
	};
	function HoverToggleInnerMenuFn(event, item) {
		const theme = store.getState();
		let element = event.target;
		if (element && theme.dataNavLayout == "horizontal" && (theme.dataNavStyle == "menu-hover" || theme.dataNavStyle == "icon-hover")) {
			const listItem = element.closest("li");
			if (listItem) {
				// Find the first sibling <ul> element
				const siblingUL = listItem.querySelector("ul");
				let outterUlWidth = 0;
				let listItemUL = listItem.closest("ul:not(.main-menu)");
				while (listItemUL) {
					listItemUL = listItemUL.parentElement.closest("ul:not(.main-menu)");
					if (listItemUL) {
						outterUlWidth += listItemUL.clientWidth;
					}
				}
				if (siblingUL) {
					// You've found the sibling <ul> element
					let siblingULRect = listItem.getBoundingClientRect();
					if (theme.dir == "rtl") {
						if ((siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 && outterUlWidth < window.innerWidth) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
							item.dirchange = true;
						} else {
							item.dirchange = false;
						}
					} else {
						if ((outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth && siblingULRect.right >= 0) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
							item.dirchange = true;
						} else {
							item.dirchange = false;
						}
					}
				}
			}
		}
	}

	const handleClick = (event) => {
		event.preventDefault();
	};
	return (

		<Fragment>
			<div id="responsive-overlay"
				onClick={() => { menuClose(); }}> </div>
			<aside className="app-sidebar" id="sidebar" onMouseOver={() => Onhover()}
				onMouseLeave={() => Outhover()}>
				<div className="top-left"></div>
				<div className="top-right"></div>
				<div className="bottom-left"></div>
				<div className="bottom-right"></div>
				<div className="main-sidebar-header">
					<Link href="/dashboard/gaming" className="header-logo">
						<img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-logo.png`} alt="logo" className="main-logo desktop-logo" />
						<img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/toggle-dark.png`} alt="logo" className="main-logo toggle-dark" />
						<img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-dark.png`} alt="logo" className="main-logo desktop-dark" />
						<img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/toggle-logo.png`} alt="logo" className="main-logo toggle-logo" />

					</Link>
				</div>

				<SimpleBar className="main-sidebar " id="sidebar-scroll">
					<nav className="main-menu-container nav nav-pills flex-column sub-open">
						<div className="slide-left" id="slide-left" onClick={() => { slideLeft(); }}><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24"
							height="24" viewBox="0 0 24 24">
							<path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
						</svg></div>

						<ul className="main-menu" onClick={() => Sideclick()}>
							{MENUITEMS.map((levelone, index) => (
								<Fragment key={index}>
									<li className={`${levelone.menutitle ? 'slide__category' : ''} ${levelone.type === 'link' ? 'slide' : ''}
                       					${levelone.type === 'sub' ? 'slide has-sub' : ''} ${levelone?.active ? 'open' : ''} ${levelone?.selected ? 'active' : ''}`}>
										{levelone.menutitle ?
											<span className='category-name'>
												{levelone.menutitle}
											</span>
											: ""}
										{levelone.type === "link" ?
											<Link href={levelone.path + "/"} className={`side-menu__item ${levelone.selected ? 'active' : ''}`} >
												<span className={`${local_varaiable?.dataVerticalStyle == 'doublemenu' ? '' : 'd-none'}`}>
													<OverlayTrigger placement="right" overlay={<Tooltip>{levelone.title}</Tooltip>}>
														<div>{levelone.icon}</div>
													</OverlayTrigger>
												</span>
												{local_varaiable.dataVerticalStyle != "doublemenu" ? levelone.icon : ""}
												<span className="side-menu__label">{levelone.title} {levelone.badgetxt ? (<span className={levelone.class}> {levelone.badgetxt}</span>
												) : (
													""
												)}
												</span>
											</Link>
											: ""}
										{levelone.type === "empty" ?

											<Link href="#!" className='side-menu__item' onClick={handleClick}>{levelone.icon}<span className=""> {levelone.title} {levelone.badgetxt ? (
												<span className={levelone.class}>{levelone.badgetxt} </span>
											) : (
												""
											)}
											</span>
											</Link>
											: ""}
										{levelone.type === "sub" ?
											<Menuloop MenuItems={levelone} level={level + 1} toggleSidemenu={toggleSidemenu} HoverToggleInnerMenuFn={HoverToggleInnerMenuFn} />
											: ''}
									</li>
								</Fragment>
							))}
						</ul>

						<div className="slide-right" onClick={() => { slideRight(); }} id="slide-right">
							<svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
						</div>
					</nav>
				</SimpleBar>
			</aside>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Sidebar);
