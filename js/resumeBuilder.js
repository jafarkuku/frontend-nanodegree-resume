/*
This is empty on purpose! Your code to build the resume will go here.
 */
var awesomethoughts
awesomethoughts="I am Jafar and i am awesome";

var funthoughts= awesomethoughts.replace("awesome", "fun");
$("#main").append(funthoughts);

var formattedName;
var formattedRole;

formattedName = HTMLheaderName.replace("%data%", "Jafar Kuku");
formattedRole = HTMLheaderRole.replace("%data%", "Digital Designer");

$("#header").prepend(formattedName,formattedRole); 

var skills =["Illustration, ","Animation, ", "Web Development"]; 

var bio = {
	"name" : "Jafar Kuku",
	"role" : "Digital Media Designer",
	"contact info":"gbolade.kuku@gmail.com",
	"picture URL":"images/fry.jpg",
	"welcome message":"Hi and welcome to my online resume",
	"skills":skills
};

$("#header").append(bio.skills);

var workinfo={};
workinfo.position = " Senior Digital Designer";
workinfo.employer = "Fuse Universal";
workinfo.yearsworked = "5 years";
workinfo.workcity = "London";

$("#header").append(workinfo.position);

var education={};
education["lastschool"] = " University of Portsmouth";
education["schoolyears"] = 2;
education["schoolcity"] = "Portsmouth";

$("#header").append(education["lastschool"]);




