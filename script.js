const header = document.querySelector("header");
const ham = document.querySelector(".ham");

window.onload = () => {
  // window.scrollTo(0,0);
  header.style.backgroundColor = "transparent";
  ham.style.backgroundColor = "var(--secondary-col)";
};

window.onscroll = function () {
  let isAtTop = window.scrollY === 0;

  if (isAtTop) {
    header.style.boxShadow = "none";
    header.style.backgroundColor = "transparent";
  } else {
    header.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    header.style.backgroundColor = "#33383e";
  }
};

ham.addEventListener("click", () => {
  // console.log("logged");

  const nav = document.querySelector(".nav-links");
  const visibility = nav.getAttribute("data-visible");
  let icon = document.querySelector(".fa-solid");

  if (visibility == "false") {
    nav.setAttribute("data-visible", "true");
    Array.from(ham.children).map((e) => {
      e.setAttribute("data-expanded", "true");
    });
  } else {
    nav.setAttribute("data-visible", "false");
    Array.from(ham.children).map((e) => {
      e.setAttribute("data-expanded", "false");
    });
  }
});

let navLinks = Array.from(document.querySelector(".nav-links").children);

navLinks.forEach((ele) => {
  ele.firstChild.addEventListener("click", (e) => {
    let active = document.querySelector(".active-link");
    active.classList.remove("active-link");

    ele.firstChild.classList.add("active-link");
  });
});

// typed

let text = document.getElementById("text");
let typed = new Typed(text, {
  strings: ["Web Developer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// active link

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-links a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-links a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

// project item creation and toggle feature

const projectArray = [
  {
    title: "iTask - React Todo App",
    techUsed: "React Js, Tailwind CSS",
    description:
      "Efficient Todo app allows you to add, edit, delete, and mark tasks as completed. Your tasks are saved in the browser's local storage along with created and due dates. Stay organized and manage your tasks effortlessly with this intuitive Todo app.",
    githubLink: "https://github.com/HarshaVardhanRajuK/Todo-react",
    deployLink: "https://harshavktodosapp.netlify.app/",
    button: true,
  },
  {
    title: "W3Schools.com Clone",
    techUsed: "HTML, CSS, JS",
    description:
      "Replicated the frontend of w3schools.com using HTML, CSS, and JS. Emulated the renowned educational platform's layout and design, providing an interactive and responsive learning environment for web development enthusiasts.",
    githubLink: "",
    deployLink: "https://peaceful-strudel-ebb1cd.netlify.app/",
    button: true,
  },
  {
    title: "Wikipedia Search Website",
    techUsed: "HTML, CSS, JS",
    description:
      "Designed and implemented a Wikipedia search app using HTML, CSS, and JS. Utilized API calls to fetch and display dynamic content, offering a seamless and informative browsing experience for users.",
    githubLink: "",
    deployLink: "https://hvwikiapp.ccbp.tech",
    button: true,
  },
  {
    title: "Countries Search",
    techUsed: "HTML, CSS, JS",
    description:
      "Developed a dynamic countries search app using HTML, CSS, and JS. Utilized API integration to fetch and display detailed information about countries, offering a seamless and informative user experience.",
    githubLink: "",
    deployLink: "https://hvfetchcountry.ccbp.tech",
    button: true,
  },
  {
    title: "More to come",
    techUsed: "",
    description: "",
    githubLink: "",
    deployLink: "",
    button: false,
  },
];

function createAndAppendProject(project) {
  let projectItem = document.createElement("div");
  projectItem.classList.add("project-item");

  projectItem.innerHTML = `${
    project.button
      ? `<h2>${project.title}</h2>
    <p>
        <span>Technologies Used: </span>${project.techUsed}</p>
    <p class="project-desc">
        <span>Description:  </span>${project.description}<span class="read-more ">... Read more</span>
    </p>

    <div style="display: flex; margin-top: 5px; gap: 5px; flex-wrap: wrap;">

      <button class="btn">
        <a href="${project.deployLink}" target=_blank style="text-decoration: none;color:white;">view Live link
          <i class="fa-solid fa-angle-right"
            style="margin-inline: 6px;">
          </i>
        </a>
      </button>
      <button class="btn">
        <a href="${project.githubLink}" target=_blank style="text-decoration: none;color:white;">view Github
          <i class="fa-solid fa-angle-right"
            style="margin-inline: 6px;">
          </i>
        </a>
      </button>

    </div>`
      : `<h2>More to come</h2>`
  }`;

  return projectItem;
}

projectArray.forEach((project) => {
  let projectsCont = document.querySelector(".projects-cont");

  projectsCont.appendChild(createAndAppendProject(project));
});

let projectItems = Array.from(document.querySelectorAll(".project-item"));

projectItems.forEach((item, i, arr) => {
  let readMoreBtn = item.querySelector(".read-more");
  let projectDesc = item.querySelector(".project-desc");

  if (i !== arr.length - 1) {
    readMoreBtn.addEventListener("click", () => {
      projectDesc.classList.toggle("toggle-ReadMore");
      item.classList.toggle("toggle-ReadMore");

      if (projectDesc.offsetHeight > 144) {
        readMoreBtn.textContent = "...Collapse";
      } else {
        readMoreBtn.textContent = "...Read more";
      }
    });
  }
});

// contact

let contactName = document.getElementById("contact-name");
let contactEmail = document.getElementById("contact-email");
let message = document.getElementById("message");

let sendBtn = document.getElementById("sendBtn");

function handleInputs() {
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    message.value === ""
  ) {
    sendBtn.classList.add("shake");
    setTimeout(() => {
      sendBtn.classList.remove("shake");
    }, 300);

    alert("All fields must be filled");
    return false;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(contactEmail.value)) {
    alert("Please enter a valid email address");
    return false;
  }

  return true;
}

async function sendData() {
  let cona = document.getElementById("contact-name");
  let coem = document.getElementById("contact-email");
  let msg = document.getElementById("message");

  let contactData = {
    contactName: cona.value,
    contactEmail: coem.value,
    message: msg.value,
  };

  try {
    let response = await fetch("https://vercel-node-virid.vercel.app/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    let res = await response.text();

    alert(res);
  } catch (err) {
    alert("failed to send the message");
  }
}

sendBtn.addEventListener("click", () => {
  if (handleInputs()) {
    sendData();
  }
  // else {
  //     alert("Fill the form")
  // }
});
// sendBtn.addEventListener("click", sendData);

// let inputs = Array.from(document.getElementsByTagName("input"))
// inputs.map(input => {
//     console.log("changed top")
//     input.addEventListener("change",()=>{
//         console.log("changed")
//         if (input.value !== ""){
//             input.classList.add("input-filled")
//         }
//     })
// });

function oninputFunc(ele) {
  ele.nextElementSibling.classList.add("filled");
}

function onchangeFunc(ele) {
  let nextEle = ele.nextElementSibling;
  // console.log(nextEle,ele.value)

  if (ele.value !== "") {
    ele.nextElementSibling.classList.add("filled");
  } else {
    ele.nextElementSibling.classList.remove("filled");
  }
}
