/*
    Assignment 05
*/

$(document).ready(function () {
    

    let items = class {


        constructor(id,name,description,genre){
          this.id = id;
          this.name = name;
          this.description = description;
          this.version = version;
        }
       updateContentItem(id,name,description,version){
         if(id===this.id && name != {} && description != {} && version != {}){
           
          }else{
              
          }
        } 

     tostring() {
        $('#content-item-list').append(
            '<div class ="content-item-wrapper"id= "content-item-ID' +this.id +'">'+
             '<h4>Name:- '+ this.name+'</h4>'+
             '<p>Description :- '+ this.description+' </p>'+
             '<div>Version :- '+ this.version+' </div>'+
              '</div>');
     
    }
};

let allitems = [
        {
        id : '1',
        name : 'Laptop',
        description : 'Dell',
        version : 'i7' 
      },
      {
        id : '2',
        name : 'Tablet',
        description : 'Micromax',
        version : 'i6' 
      },
      {
        id : '3',
        name : 'Mobile Phone',
        description : 'Apple',
        version : 'Pro Max' 
    },
      {
          id : '4',
        name : 'PC',
        description : 'Hewlett Packard',
        version : 'i3' 
    },
      {
          id : '5',
          name : 'Earpods',
        description : 'Samsung',
        version : 'i5' 
      }
    ]

    
    for(i = 0; i < allitems.length; i++){
        $('#content-item-list').append(
    '<div class ="content-item-wrapper"id= "content-item-' +allitems[i].id +'">'+
     '<h4>Name:- '+ allitems[i].name+'</h4>'+
     '<p>Description :- '+ allitems[i].description+' </p>'+
     '<div>Version :- '+ allitems[i].version+' </div>'+
      '</div>');
      
    };
   

    
});


