const sidebarMenu = document.querySelector("#sidebar") //select element sidebar
const buttonToggler = document.querySelector(".navigation__toggler") //select element button toggler
const buttonCloser = document.querySelector(".sidebar__closer") //select element button closer nya

const elementNavigationMenus = document.querySelector(".navigation__menus")

const elementProjectComplete = document.querySelector("#value-project-complete")
const elementYearOfExperience = document.querySelector("#value-year-of-experience")

//value project complete dan year of experience 
const containerValue = {
    projectComplete: 420,
    yearOfExperience: "30+",
};

// value of menus
const navigationMenus = [
    {
        tittle: "work",
        link: "/#",
    },
    {
        tittle: "About",
        link: "/#",
    },
    {
        tittle: "Service",
        link: "/#",
    },
    {
        tittle: "Contact",
        link: "/#",
    },
];

navigationMenus.map((navigation) => {
    return navigation; 
})

buttonToggler.addEventListener("click", () => {
    sidebarMenu.classList.add("show");
    sidebarMenu.classList.remove("hide");
});

buttonCloser.addEventListener("click", () => {
    sidebarMenu.classList.add("hide");
    sidebarMenu.classList.remove("show");
});

elementProjectComplete.append(containerValue.projectComplete)
elementYearOfExperience.append(containerValue.yearOfExperience)