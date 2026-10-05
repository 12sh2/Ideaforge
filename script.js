const ideas = [
  {
    title: "Smart Campus Helper",
    problem: "Students often struggle to find important campus information quickly.",
    solution: "A digital hub for notices, events, resources and student support."
  },
  {
    title: "Local Problem Solver",
    problem: "Community problems can be difficult to report and organize.",
    solution: "A platform where users can share problems and suggest practical solutions."
  }
];

function renderIdeas() {
  const box = document.getElementById("ideas");

  box.innerHTML = ideas.map((idea, index) => `
    <article class="idea">
      <h3>${escapeHtml(idea.title)}</h3>
      <small>Idea #${index + 1}</small>
      <p><strong>Problem:</strong> ${escapeHtml(idea.problem)}</p>
      <p><strong>Solution:</strong> ${escapeHtml(idea.solution)}</p>
    </article>
  `).join("");
}

function addIdea() {
  const title = document.getElementById("title").value.trim();
  const problem = document.getElementById("problem").value.trim();
  const solution = document.getElementById("solution").value.trim();
  const message = document.getElementById("message");

  if (!title || !problem || !solution) {
    message.textContent = "Please fill all three fields.";
    return;
  }

  ideas.unshift({
    title: title,
    problem: problem,
    solution: solution
  });

  renderIdeas();

  document.getElementById("title").value = "";
  document.getElementById("problem").value = "";
  document.getElementById("solution").value = "";

  message.textContent = "Idea added successfully!";
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

renderIdeas();
