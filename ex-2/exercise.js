// write your JS here
// remember to always test in the browser
// to see if everything works correctly


function tellFortune(numberOfChildren, partnerName, address, jobTitle) {
    window.alert("You will be a "+ user.jobTitle+ " in "+ user.address+ " and married to "
    + user.partnerName+ " with "+ user.numberOfChildren+ " kids.");
};

let user = {
numberOfChildren: prompt("please insert the number of children!"),
partnerName: prompt("please insert the partner name!"),
address: prompt("please insert the address!"),
jobTitle: prompt("please insert the job title!"),

};

tellFortune(user.numberOfChildren, user.partnerName, user.address, user.address);

