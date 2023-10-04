function update() {
	const matches = document.querySelectorAll("pre > code");
	matches.forEach((item) => {
		item.parentNode.classList.add("cb-wrapper");
		let button = document.createElement("button");
		button.innerText = "Copy";
		button.classList.add("cb-button");
		button.setAttribute("data-copied", false);
		button.addEventListener('click', () => {
			const value = item.innerText.replace(/[\r\n]+$/, '');
			const textCopied = ClipboardJS.copy(value);
			button.setAttribute("data-copied", true);
			button.innerText = "Copied!";
			let alert = document.createElement("div");
			alert.innerText = "Copied to clipboard";
			alert.classList.add("cb-alert");
			alert.setAttribute("role", "status");
			button.parentNode.insertBefore(alert, button.nextSibling);
			setTimeout(() => {
				button.innerHTML = "Copy";
				button.setAttribute("data-copied", false);
				item.parentElement.removeChild(alert);
				alert = null;
			}, 2000);
		});
		item.parentNode.insertBefore(button, item.nextSibling);
	});
}

window.addEventListener("load", () => {
	document.body.addEventListener("ia-writer-change", update);
});
