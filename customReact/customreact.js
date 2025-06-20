function customRender(reacElement,container){
//Version 1
  /*
  const domElement=document.createElement(reacElement.type)
  domElement.innerHTML=reacElement.children;
  domElement.setAttribute('href',reacElement.props.href);
  domElement.setAttribute('target',reacElement.props.target);

  container.appendChild(domElement);*/

//Version 2

const domElement=document.createElement(reacElement.type);
domElement.innerHTML=reacElement.children;
for (const prop in reacElement.props) {
 if(prop===children) continue;
 domElement.setAttribute(prop,reacElement.props[prop]);

}container.appendChild(domElement);

}
const reacElement={
  type:'a',
  props:{
    href:'https://google.com',
    target:'_blank'
  },
  children:'Click me to visit Google'
}

const mainContainer=document.querySelector('#root');
customRender(reacElement,mainContainer);//customRender(kya inject krna hai ,kaha inject krna hai)