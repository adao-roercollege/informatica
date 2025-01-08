function generateRandomText() {
	const words = [
		"Lorem",
		"ipsum",
		"dolor",
		"sit",
		"amet",
		"consectetur",
		"adipiscing",
		"elit",
		"Sed",
		"do",
		"eiusmod",
		"tempor",
		"incididunt",
		"ut",
		"labore",
		"et",
		"dolore",
		"magna",
		"aliqua",
	];
	let text = "";
	const wordCount = Math.floor(Math.random() * 10) + 5;
	for (let i = 0; i < wordCount; i++) {
		text += `${words[Math.floor(Math.random() * words.length)]} `;
	}
	return `${text.trim()}.`;
}

document.addEventListener("DOMContentLoaded", () => {
	lucide.createIcons();

	const projectContainer = document.querySelector(".project-grid");
	const NUM_PROJECTS = 12;
	projectContainer.innerHTML = "";

	for (let i = 1; i <= NUM_PROJECTS; i++) {
		const projectCard = document.createElement("div");
		projectCard.className = "project-card";

		projectCard.innerHTML = `
      <img src="https://picsum.photos/id/${Math.floor(Math.random() * 1085)}/400/200?grayscale&blur=2" alt="Project ${i} Image">
      <h3>Project ${i}</h3>
      <p>${generateRandomText()}</p>
    `;

		projectContainer.appendChild(projectCard);
	}
});
