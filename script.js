function generate_random_text(word_count) {
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
	for (let i = 0; i < word_count; i++) {
		text += `${words[Math.floor(Math.random() * words.length)]} `;
	}
	return `${text.trim()}.`;
}

document.addEventListener("DOMContentLoaded", () => {
	const num_projects = 12;
	const project_description_words = 15;

	lucide.createIcons();
	const project_container = document.querySelector(".project-grid");
	project_container.innerHTML = "";

	for (let i = 1; i <= num_projects; i++) {
		const project_card = document.createElement("div");
		project_card.className = "project-card";

		project_card.innerHTML = `
    <img src="https://picsum.photos/id/${Math.floor(Math.random() * 1085)}/400/200?grayscale&blur=2" alt="Project ${i} Image">
    <h3>Project ${i}</h3>
      <p>${generate_random_text(project_description_words)}</p>
  `;

		project_container.appendChild(project_card);
	}
});
