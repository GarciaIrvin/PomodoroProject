let time=30;
let start_time=new Date();
let end_time=new Date();
console.log("FUCK");
while(end_time.getTime()-start_time.getTime()<time){
	end_time=new Date();
	console.log(end_time.getTime()-start_time.getTime())
	continue;
}
window.alert("Get back to work u degen")