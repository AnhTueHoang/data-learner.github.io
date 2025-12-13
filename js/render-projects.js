function getMostRecentProject(projectList) {
  return projectList.reduce((latest, current) =>
    new Date(current.date) > new Date(latest.date) ? current : latest
  );
}

function renderProjectCard(project) {
  return `
    <div class="project-card" onclick="window.location='${project.url}'">
      <div class="project-meta">${project.type}</div>
      <h3>${project.title}</h3>
      <p style="font-size: 0.9rem;">${project.description}</p>
      <div style="margin-top: 0.4rem;">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join(" ")}
      </div>
    </div>
  `;
}

function renderProjectsGrid(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const sorted = [...projects].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  container.innerHTML = sorted.map(renderProjectCard).join("");
}

function renderMostRecentProject(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const project = getMostRecentProject(projects);
  container.innerHTML = renderProjectCard(project);
}
