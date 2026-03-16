const recommendCareer = (scores)=>{

 const careers=[]

 if(scores.analytical > 15 && scores.technical > 15){
   careers.push("Software Engineer")
   careers.push("Data Scientist")
 }

 if(scores.creative > 15){
   careers.push("Graphic Designer")
 }

 if(scores.social > 15){
   careers.push("HR Manager")
   careers.push("Teacher")
 }

 if(scores.leadership > 15){
   careers.push("Project Manager")
 }

 return careers

}

module.exports = recommendCareer