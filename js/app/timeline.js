

// create a work experience
/**
 * 
 * @param {TimelineElement} exp 
 * @param {string} className 
 * @param {string} iconClass 
 */
function createTimelineElement(exp, className, iconClass) {


    const description = document.createElement("p");
    description.textContent = exp.description;

    const body = document.createElement("div");
    body.className = "timeline-body";
    body.appendChild(description);

    const title = document.createElement("h3");
    title.textContent = exp.title;
    title.className = "timeline-title";
    const company = document.createElement("span");
    company.className = "company";
    company.textContent = `${exp.institue} - ${exp.from} - ${exp.to || "Current"}`;
    const heading = document.createElement("div");
    heading.appendChild(title);
    heading.appendChild(company);

    const panel = document.createElement("div");
    panel.className = "timeline-panel";
    panel.appendChild(heading);
    panel.appendChild(body);

    const icon = document.createElement("i");
    // icon.className = "";
    icon.className = iconClass;

    const badge = document.createElement("div");
    badge.className = "timeline-badge";
    badge.appendChild(icon);

    const expElement = document.createElement("li");
    expElement.className = "animate-box" + " " + className;
    expElement.appendChild(badge);
    expElement.appendChild(panel);

    return expElement;
}

/**
 * @type {TimelineElement[]}
 */
const experiences = [
    {
        institue: "Banan IT",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
        from: "2020",
        to: "2022",
        title: "Software Engineer"
    },
    {
        institue: "Banan IT",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
        from: "2020",
        to: "2022",
        title: "Software Engineer"
    },
    {
        institue: "Banan IT",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
        from: "2020",
        to: "2022",
        title: "Software Engineer"
    },
    {
        institue: "Banan IT",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
        from: "2020",
        to: "2022",
        title: "Software Engineer"
    }
];

const educations = [
    {
        institue: "UofK",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
        from: "2020",
        to: "2022",
        title: "Bachelors Degree"
    }
]

const resume = document.getElementById("resume");
// Add Elements
function addSection(elements, title, icon) {
    const header = document.createElement("li");
    header.className = "timeline-heading text-center animate-box";
    header.innerHTML = `<div><h3>${title}</h3></div></li>`;

    resume.appendChild(header);
    for (let i = 0; i < elements.length; i++) {
        const exp = elements[i];
        const el = createTimelineElement(exp, i % 2 == 0 ? "timeline-unverted" : "timeline-inverted", icon);
        resume.appendChild(el);
    }
}
addSection(experiences, "Work Experience", "icon-suitcase");
resume.appendChild(document.createElement("br"));
addSection(educations, "Education", "icon-graduation-cap");
