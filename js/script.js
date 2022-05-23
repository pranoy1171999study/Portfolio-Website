var arr=[];
for(var i=0;i<6;i++) arr[i]=[];
arr[0][0]=document.getElementById("education");
arr[1][0] =document.getElementById("projects");
arr[2][0] =document.getElementById("skills");
arr[3][0] =document.getElementById("personal");
arr[4][0] =document.getElementById("contact");
arr[5][0] =document.getElementById("experiences");

arr[0][1]="education";
arr[1][1] ="projects";
arr[2][1] ="skills";
arr[3][1] ="personal";
arr[4][1] ="contact";
arr[5][1] ="experiences";

arr[0][2]=document.getElementById("education-des");
arr[1][2] =document.getElementById("projects-des");
arr[2][2] =document.getElementById("skills-des");
arr[3][2] =document.getElementById("personal-des");
arr[4][2] =document.getElementById("contact-des");
arr[5][2] =document.getElementById("experiences-des");

arr[0][0].onclick=function(){show_only_details("education");};
arr[1][0].onclick=function(){show_only_details("projects");};
arr[2][0].onclick=function(){show_only_details("skills");};
arr[3][0].onclick=function(){show_only_details("personal");};
arr[4][0].onclick=function(){show_only_details("contact");};
arr[5][0].onclick=function(){show_only_details("experiences");};

function ajaxcall(element,link){
    const xhttp=new XMLHttpRequest();
    xhttp.onload=function(){
        element.innerHTML=this.responseText;
    }
    xhttp.open("GET",link);
    xhttp.send();
}
ajaxcall(arr[0][2],"database/education.html");
ajaxcall(arr[1][2],"database/projects.html");
ajaxcall(arr[2][2],"database/skills.html");
ajaxcall(arr[3][2],"database/personal.html");
ajaxcall(arr[4][2],"database/contact.html");
ajaxcall(arr[5][2],"database/experiences.html");




for(var i=0;i<6;i++) {  if(arr[i][2]==null) arr[i][2]="leave-it";}

function show_only_details(id){
    for(var i=0;i<6;i++)
    {
        var temp=arr[i][1];
        if(arr[i][0]!="leave-it") 
        {
            if(temp!=id)
            {
                arr[i][2].style.display="none";
            }
            else
            {
                arr[i][2].style.display="block";
            }
        }
    }
}
show_only_details(hideall);



