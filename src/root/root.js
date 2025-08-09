const links = document.querySelectorAll("nav a");
  const contents = document.querySelectorAll("div");
  const homeSection = document.getElementById("home");
  const tomorrowSection = document.getElementById("tomorrow");
  const weekSection = document.getElementById("week");
  const nextWeekSection = document.getElementById("nextWeek");
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1); 

      sections.forEach(section => section.classList.remove("active"));

      document.getElementById(targetId).classList.add("active");

      history.pushState(null, "", `/${targetId}`);
    });
  });

  window.addEventListener("load", () => {
    const hash = location.hash.substring(1);
    if (hash) {
      document.querySelector(`nav a[href="/${hash}"]`)?.click();
    }
  });