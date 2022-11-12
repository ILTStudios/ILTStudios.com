//Navbar //
document.addEventListener('scroll', () => {
    if(window.scrollY==0){
        document.querySelector('.navbar').classList.remove('open');
    }else{
        document.querySelector('.navbar').classList.add('open');
    }
});
//

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const box = document.querySelectorAll('.underline');

box.forEach(element => {
    var new_box = element;
    document.addEventListener('scroll', function () {
        const messageText = isInViewport(new_box) ?
            true :
            false;
    
        if (messageText == true){
            new_box.classList.add('open');
            document.querySelector('.about .heading').classList.add('.open');
        }
    }, {
        passive: true
    });
});

//Burger Menu
const burger = document.querySelector('.menu-trigger');
const menu = document.querySelector('.menu');
menu.style.width = "0%";
menu.style.opacity = 0;
var is_open = false;

burger.addEventListener('click', () => {
    if(is_open == false){
        burger.classList.add('open');
        menu.style.width = "30%";
        menu.style.opacity = 1;
        is_open = true;
    }else{
        burger.classList.remove('open');
        menu.style.width = "0%";
        menu.style.opacity = 0;
        is_open = false;
    }
})

/* Drop down animation */
const dropdown_menus = document.querySelector('.dropdowns');
var identition = 0;
var i = 0;
const dropdown_subtext = [
    "Created several websites with traffic over the hundreds. Won a few web design comps and have developed 2 websites, fullstack.",
    "First technology i've learnt, have about 2 years of experience and have published about 4 - 5 indie games both mobile and pc.",
    "Lately started producing software with technologies such as API's, Electron_JS, React Native, Node.JS and many more. Published a few.",
    "Learnt web dev along with HTML, CSS. Style of writing both have changed from relaying on tags to relaying on felx box css and using countless divs.",
    "Lately have started to love this language for its versatility, and easy writing. Have developed quite a few Desktop Apps, Websites, and Mobile Apps.",
    "First language i've learnt, use it for hardware projects for its fast compile time and easy use.",
    "Have developed quite a few games with C#, many of which through the unity development engine.",
    "Data projects, GUI, API Contacts, Discord Bots, a majority of my time has been spent on using learning python.",
    "Friend told me about rust, and ive loved it ever since. Haven't developed much other than simple basic programs.",
]

dropdown_menus.childNodes.forEach(element => {
    identition += 1;
    if(identition % 2 == 0){
        //add dropdown info
        var ident_label = element.childNodes;
        var subtext = document.createElement('div');
        subtext.classList.add('dropdown-subtext')
        subtext.innerText = `${dropdown_subtext[i]}`;
        ident_label[1].appendChild(subtext);
        i += 1;

        //get a list of all experience content
        const experience_content = document.querySelectorAll('.experience .subtext');
        experience_content.forEach(element => {
            element.style.display = 'none';
        });

        // animation
        element.addEventListener('click', (e) => {
            var experience_picker = element.id;
            
            if(element.classList.contains("menu-dropdown")){
                element.classList.remove('menu-dropdown');
                element.classList.add('menu-dropdownopen');
                element.childNodes.forEach((element, indent) => {
                    if(element.childNodes[indent] != null){
                        setTimeout(() => {
                            element.childNodes[1].style.display = 'flex';
                        }, 20);
                    }
                });

                experience_content.forEach(exp_con => {
                    if(exp_con.id == experience_picker){
                        setTimeout(() => {
                            exp_con.style.display = 'block';
                        }, 200);
                        exp_con.style.opacity = "1";
                    }
                });
            }
            
            else{
                element.classList.remove('menu-dropdownopen');
                element.classList.add('menu-dropdown');
                element.childNodes.forEach((element, indent) => {
                    if(element.childNodes[indent] != null){
                        setTimeout(() => {
                            element.childNodes[1].style.display = 'none';
                        }, 200);
                    }
                });
                experience_content.forEach(exp_con => {
                    if(exp_con.id == experience_picker){
                        exp_con.style.opacity = "0";
                        setTimeout(() => {
                            exp_con.style.display = 'none';
                        }, 200)
                    }
                });
            }
        });
    }
});

const skill_program = document.querySelector('.programs');
console.log(skill_program);
/* */

//project animation
document.querySelectorAll('.project-grid > div > img').forEach(element => {
    element.addEventListener('click', (e) => {
        e = e.target.src.split('/')[4].replace('.png', '');
    });
});

//know me menu animation
const knowmeprofile_sub = document.querySelectorAll('#knowme-sub');
knowmeprofile_sub[0].style.opacity = "1";
knowmeprofile_sub[0].style.display = "block";

document.querySelectorAll('#know-me-menu').forEach(element => {
    element.addEventListener('click', (element) => {
        element = element.target;
        const layer_picker = element.classList;
        const specific_layer = document.querySelector(`.knowme-sub.${element.innerText.replace(" ", '').toLowerCase()}`);
        const total_layers = document.querySelectorAll('#knowme-sub');

        specific_layer.style.opacity = "1";
        setTimeout(() => {
            specific_layer.style.display = "block";
        }, 200)
        
        total_layers.forEach(elmn => {
            if(elmn.classList[1] != layer_picker[0].split('-')[1]){
                elmn.style.opacity = "0";
                setTimeout(() => {
                    elmn.style.display = "none";
                }, 200)
            }
        });
        
        burger.classList.remove('open');
        menu.style.width = "0%";
        menu.style.opacity = 0;
        is_open = false;
    });
});