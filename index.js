let Resume = {
    Name  : "V.Sathish kumar",
    Email : "sathish010395@gmail.com",
    Mobile: "7402411960",
    Date_of_Birth : "01/03/1995",
    Address: {
        No      : "4/92",
        Village : "Kombaikadu",
        Post    : "No.3 Komarapalayam",
        Taluk   : "Rasipuram",
        City    : "Namakkal"
    },
    Father_Name : "M.Viswanathan",
    Education   : [
        SSLC = {
            sName : "Verti Vikaas Hr Sec School",
            passedout:"2010",
            Mark:"79.40%"
            },
        HSC = {
            sName:"GHSS",
            passedout:"2012",
            Mark:"76.90%"
            },
        UG = {
            Cname:"Nandha College of Technology",
            passedout:"2016",
            Mark:"6.53 CGPA"
        }
    ],
    Hobbies : ["cricket","Making Wordepress Websites","Handling Computer Gadgets","Travelling"],
    Projects :{
        Miniproject   : "Folder Prodection with Password",
        Final_Project : "ENhanced Multi Division and Replication of Data in MultiCloud for Security Framework Protocol" 
    },
    Experience : [
        Company_1 = {
            name : "Do broadband",
            job  : "Technician",
            Exp  : "2 years exp"},
        Company_2 = {
            name:"Rasi Weld Mesh",
            job :"Supervisor",
            Exp :"4 years"}
]
}
loopThroughJSON(Resume)
function loopThroughJSON(obj){
    for (let key in obj){   //for in loop
        if(typeof obj[key] === 'object'){
            if(Array.isArray(obj[key])){
                console.log(key)
                for(let i = 0; i < obj[key].length; i++){ //for loop
                    if(typeof(obj[key][i])==="string" || typeof(obj[key][i])==="number" || typeof(obj[key][i])==="boolean")
                        {
                            console.log(obj[key][i])
                        }
                        else
                            loopThroughJSON(obj[key][i])
                }
            }else{
                console.log(key)
                loopThroughJSON(obj[key])
            }
        }
        else{
            console.log(key + ': '+ obj[key])
        }
    }
}
    
//For of  Loop
	let a = Object.keys(Resume);
    	   for(let i of a)
       	 {
           	 console.log(i,Resume[i])
       	 }

//ForEach Loop
	Object.keys(Resume).forEach((e)=>{
      	  console.log(e,Resume[e])
  	  })
