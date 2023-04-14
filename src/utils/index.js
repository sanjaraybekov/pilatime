// utils to initialize other funcs
export const initFunctions = () => {
	definePolyfills();
};

/**
 * definePolyfills
 */
export const definePolyfills = () => {
	if (typeof Object.values != "function") {
		Object.defineProperty(Object, "values", {
			value: function values(obj) {
				if (obj === null) {
					throw new TypeError(
						"Cannot convert undefined or null to object"
					);
				}

				let res = [];

				Object.keys(obj).map(function (key) {
					res.push(obj[key]);
					return 1;
				});

				return res;
			},
		});
	}

	if (window.Element && !Element.prototype.closest) {
		Element.prototype.closest = function (s) {
			var matches = (
					this.document || this.ownerDocument
				).querySelectorAll(s),
				i,
				el = this;

			do {
				i = matches.length;
				while (--i >= 0 && matches.item(i) !== el) {}
			} while (i < 0 && (el = el.parentElement));
			return el;
		};
	}

	if (!Element.prototype.index) {
		Element.prototype.index = function (s) {
			let self = this;
			let children = self.parentElement.children;
			for (let i = 0; i < children.length; i++) {
				if (self === children[i]) return i;
			}
			return 0;
		};
	}
};

/**
 * add event listener to anchors of product to prevent default.
 */
export function preventProductDefault() {
	let items = document.querySelectorAll(".product-nav a, .product-size a");
	for (let i = 0; i < items.length; i++) {
		items[i].addEventListener("click", preventDefaultHandler);
	}
}

export function removePreventProductDefault() {
	let items = document.querySelectorAll(".product-nav a, .product-size a");

	for (let i = 0; i < items.length; i++) {
		items[i].addEventListener("click", preventDefaultHandler);
	}
}

function preventDefaultHandler(e) {
	e.preventDefault();
}

/**
 * Apply sticky header
 */
export const stickyHeaderHandler = function () {

	let top = document.querySelector("main")
		? document.querySelector("main").offsetTop
		: 300;

	let stickyHeader = document.querySelector(".sticky-header");
	let height = 0;

	if (stickyHeader) {
		height = stickyHeader.offsetHeight;
	}

	if (window.pageYOffset >= top) {
		if (stickyHeader) {
			stickyHeader.classList.add("fixed");
			if (!document.querySelector(".sticky-wrapper")) {
				let newNode = document.createElement("div");
				newNode.className = "sticky-wrapper";
				stickyHeader.parentNode.insertBefore(newNode, stickyHeader);
				document
					.querySelector(".sticky-wrapper")
					.insertAdjacentElement("beforeend", stickyHeader);
				document
					.querySelector(".sticky-wrapper")
					.setAttribute("style", "height: " + height + "px");
			}

			if (
				!document.querySelector(".sticky-wrapper").getAttribute("style")
			) {
				document
					.querySelector(".sticky-wrapper")
					.setAttribute("style", "height: " + height + "px");
			}
		}
	} else {
		if (stickyHeader) {
			stickyHeader.classList.remove("fixed");
		}

		if (document.querySelector(".sticky-wrapper")) {
			document.querySelector(".sticky-wrapper").removeAttribute("style");
		}
	}

	if (window.outerWidth < 992 && document.querySelector(".sticky-wrapper")) {
		document.querySelector(".sticky-wrapper").style.height = "auto";
	}
};


/**
 * utils to scroll element to top
 */
export const scrollTop = function () {
	console.log("Scrolllledd");
	let scrollTop = document.querySelector("#scroll-top");
	document.addEventListener(
		"scroll",
		function () {
			if (window.pageYOffset >= 400) {
				scrollTop.classList.add("show");
			} else {
				scrollTop.classList.remove("show");
			}
		},
		false
	);

	scrollTop.addEventListener("click", function (e) {
		if (isIEBrowser() || isSafariBrowser() || isEdgeBrowser()) {
			let pos = window.pageYOffset;
			let timerId = setInterval(() => {
				if (pos <= 0) clearInterval(timerId);
				window.scrollBy(0, -120);
				pos -= 120;
			}, 1);
		} else {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
		e.preventDefault();
	});
};

/**
 * utils to make background parallax
 */
export const parallax = () => {
	let parallax = document.querySelectorAll(".bg-parallax");

	for (let i = 0; i < parallax.length; i++) {
		let y = 0;
		if (parallax[i].classList.contains("header-parallax")) {
			y = ((10 - window.pageYOffset) * 47) / 900 + 50;
		} else {
			y =
				((parallax[i].offsetTop - window.pageYOffset) * 47) /
					parallax[i].offsetTop +
				50;
		}

		parallax[i].style.backgroundPositionY = y + "%";
	}
};

/**
 * utils to remove all XSS  attacks potential
 * @param {String} html
 * @return {Object}
 */
export const safeContent = (html) => {
	const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

	//Removing the <script> tags
	while (SCRIPT_REGEX.test(html)) {
		html = html.replace(SCRIPT_REGEX, "");
	}

	//Removing all events from tags...
	html = html.replace(/ on\w+="[^"]*"/g, "");

	return {
		__html: html,
	};
};

/**
 * utils to make quanity input in product page
 */
export const quantityInputs = () => {
	let items = document.querySelectorAll("input[type='number']");
	// console.log("items.length", items.length);
	for (let i = 0; i < items.length; i++) {
		let item = items[i];

		if ("none" !== item.style.display) {
			let min = item.getAttribute("min"),
				max = item.getAttribute("max"),
				step = item.getAttribute("step"),
				element = document.createElement("div");
			element.className = "input-group input-spinner";
			element.innerHTML =
				'<div class="input-group-prepend"><button style="min-width: 26px" class="btn btn-decrement btn-spinner" type="button"><i class="icon-minus"></i></button></div><input type="text" style="text-align: center" class="form-control " required placeholder=""><div class="input-group-append"><button style="min-width: 26px" class="btn btn-increment btn-spinner" type="button"><i class="icon-plus"></i></button></div>';
			item.insertAdjacentElement("afterEnd", element);
			item.style.display = "none";

			let inputNumber = element.querySelector("input[type='text']");
			inputNumber.value = item.value;

			element
				.querySelector(".btn-decrement")
				.addEventListener("click", decrementHandler);

			element
				.querySelector(".btn-increment")
				.addEventListener("click", incrementHandler);

			function decrementHandler() {
				if (min <= parseInt(inputNumber.value) - parseInt(step)) {
					inputNumber.value =
						parseInt(inputNumber.value) - parseInt(step);
					item.value = inputNumber.value;
					item.setAttribute("value", inputNumber.value);
				}
			}

			function incrementHandler() {
				if (max >= parseInt(inputNumber.value) + parseInt(step)) {
					inputNumber.value =
						parseInt(inputNumber.value) + parseInt(step);
					item.value = inputNumber.value;
					item.setAttribute("value", inputNumber.value);
				}
			}
		}
	}
};

/**
 * utils to detect IE browser
 * @return {bool}
 */
export const isIEBrowser = function () {
	let sUsrAg = navigator.userAgent;
	if (sUsrAg.indexOf("Trident") > -1) return true;
	return false;
};

/**
 * utils to detect safari browser
 * @return {bool}
 */
export const isSafariBrowser = function () {
	let sUsrAg = navigator.userAgent;
	if (sUsrAg.indexOf("Safari") !== -1 && sUsrAg.indexOf("Chrome") === -1)
		return true;
	return false;
};

/**
 * utils to detect Edge browser
 * @return {bool}
 */
export const isEdgeBrowser = function () {
	let sUsrAg = navigator.userAgent;
	if (sUsrAg.indexOf("Edge") > -1) return true;
	return false;
};

/**
 * find index of first matched string
 */
export const findIndex = function (array, cb) {
	if (array) {
		for (let i = 0; i < array.length; i++) {
			if (true === cb(array[i])) return i;
		}
	}
	return -1;
};

/**
 * utils to set Masonry / Grid layout
 *
 * @param {Object} isotope
 * @param {Function} imagesLoaded
 * @param {String} container
 * @param {String} selector
 * @param {String} filterNav
 */

export function isotopeLoad(
	isotope,
	imagesLoaded,
	container,
	selector,
	filterNav,
	layoutMode = "masonry"
) {
	let items = document.querySelectorAll(container);

	for (let i = 0; i < items.length; i++) {
		let item = items[i];

		let iso = new isotope(items[i], {
			itemSelector: selector,
			layoutMode: layoutMode,
			filter: document.querySelector(filterNav + " .active")
				? document
						.querySelector(filterNav + " .active")
						.getAttribute("data-filter")
				: "",
		});

		let imgLoad = imagesLoaded(item, { background: true });
		imgLoad.on("done", function (instance, image) {
			iso.layout();
		});

		if (filterNav) {
			let tabList = document.querySelectorAll(filterNav + " a");

			for (let i = 0; i < tabList.length; i++) {
				tabList[i].addEventListener("click", function (e) {
					e.preventDefault();

					let filterValue = e.currentTarget.getAttribute(
						"data-filter"
					);
					iso.arrange({
						filter: filterValue,
					});

					// add active class
					for (let j = 0; j < tabList.length; j++) {
						if (
							tabList[j].getAttribute("data-filter") ===
							filterValue
						) {
							tabList[j].parentNode.classList.add("active");
						} else {
							tabList[j].parentNode.classList.remove("active");
						}
					}
				});
			}
		}
	}
}

/**
 * utils to set Single Product Gallery
 */
export const productGallery = () => {
	let items = document.querySelectorAll(".product-gallery-item");

	for (let i = 0; i < items.length; i++) {
		let item = items[i];

		item.addEventListener("click", productGalleryClickHandler);

		function productGalleryClickHandler(e) {
			for (let i = 0; i < items.length; i++)
				items[i].classList.remove("active");

			item.classList.add("active");

			let images = document.querySelectorAll(".product-main-image img");

			images[0].setAttribute("src", item.getAttribute("data-image"));
			// images[1].setAttribute("src", item.getAttribute("data-zoom-image"));
			document
				.querySelector(".product-main-image")
				.setAttribute("index", i);
			e.preventDefault();
		}
	}
};
