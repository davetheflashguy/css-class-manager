"use babel";

class Ccm {
   constructor(element) {
      this.element = element;
   }

   function addClass(className){
      this.element.classList.add(className);
   }

   function removeClass(className){
      this.element.classList.remove(className);
   }

   function hasClass(className){
      return this.element.classList.contains(className);
   }
}

var ccm = new Ccm();
