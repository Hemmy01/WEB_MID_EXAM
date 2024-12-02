import HtmlWidget from "https://cdn.jsdelivr.net/npm/html-widget@1.0.0";


const headerLocation = document.getElementById('index-header');
const classesLocation = document.getElementById('classes-header');
const membershipLocation = document.getElementById('membership-header');
const aboutLocation = document.getElementById('about-header');
const contactLocation = document.getElementById('contact-header');


const link = document.createElement('link');
link.rel = "stylesheet";
link.href = "index-header-style.css";
link.type = "text/css";
document.head.appendChild(link);

const indexHeaderWidget = new HtmlWidget();


async function injectIndexHeader(){
    const renderIndexHeader = await indexHeaderWidget.renderFromFile('/index-header.html');
    

    if(headerLocation){
        headerLocation.appendChild(renderIndexHeader.element);
    }
    
    if(classesLocation){
        classesLocation.appendChild(renderIndexHeader.element);
    }
    
    if(membershipLocation){
        membershipLocation.appendChild(renderIndexHeader.element);
    }
    
    if(aboutLocation){
        aboutLocation.appendChild(renderIndexHeader.element);
    }
    
    if(contactLocation){
        contactLocation.appendChild(renderIndexHeader.element);
    }


}

injectIndexHeader();