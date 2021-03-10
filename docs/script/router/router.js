import '../vendor/routie.js';

function routeHandeler(){
    routie({
        'Home_page': function() {
            sectionToggler('Home_page');
        },
        'Default_page': function() {
            sectionToggler('Default_page');
        },
        'PickSingleDay_page': function() {
            sectionToggler('PickSingleDay_page');
        },
        'StartDateEndDate_page': function() {
            sectionToggler('StartDateEndDate_page');
        }
    });
}

function sectionToggler(page) {
    const allSections = document.querySelectorAll('section');
    const activeSection = document.querySelector(`#${page}`);
  
    allSections.forEach((section) => {
      section.classList.remove('active');
      section.setAttribute("aria-hidden", "true");
      section.hidden = true;
    });
  
    activeSection.classList.add('active');
    activeSection.setAttribute('aria-hidden', 'false');
    activeSection.hidden = false;
}

routeHandeler();
export { routeHandeler }