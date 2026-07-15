const profiles = [

{
    name:"Rakesh",
    bio:"DSA Enthusiast",
    image:"https://picsum.photos/id/1005/200"
},

{
    name:"Rahul",
    bio:"Learning JavaScript",
    image:"https://picsum.photos/id/1011/200"
},

{
    name:"Priya",
    bio:"MERN Stack Developer",
    image:"https://picsum.photos/id/1027/200"
},

{
    name:"Aman",
    bio:"Competitive Programmer",
    image:"https://picsum.photos/id/1025/200"
}

];

function changeProfile(){

    const index = Math.floor(Math.random() * profiles.length);

    document.getElementById("profile").src = profiles[index].image;
    document.getElementById("name").textContent = profiles[index].name;
    document.getElementById("bio").textContent = profiles[index].bio;

}