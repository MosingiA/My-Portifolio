// typing animation script
var typed = new Typed('.typing', {
    strings: ['','Web Developer', 'Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Aside Navbar

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(e)
    {
        // Remove active class from all nav items
        for (let j = 0; j < totalNavList; j++)
        {
            navList[j].querySelector("a").classList.remove("active");
        }
        // Add active class to clicked nav item
        this.classList.add("active");
        
        // Get target section and scroll to it
        const target = this.getAttribute("href");
        if (target.startsWith('#')) {
            const targetSection = document.querySelector(target);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => 
    {
    asideSectionTogglerBtn();
});
function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++)
    {
        allSection[i].classList.toggle("open");
    }
} 