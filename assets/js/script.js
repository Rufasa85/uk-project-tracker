//for localstorage
// var projects= [];


// var savedProjs = localStorage.getItem("savedProjects");
// if(savedProjs){
//     projects = JSON.parse(savedProjs);
//     for (var i = 0; i < projects.length; i++) {
//         var thisProj = projects[i]
//        printProjectData(thisProj.name,thisProj.type,thisProj.hourly,thisProj.due)
        
//     }
// }

console.log("I am linked");
$("#time-heading").text(dayjs().format("DD MMM YYYY [at] hh:mm:ss a"));
setInterval(function () {
  $("#time-heading").text(dayjs().format("DD MMM YYYY [at] hh:mm:ss a"));
}, 1000);

function printProjectData(name,type,hourly,due) {
    var dueDateDayjs = dayjs(due);
    var daysLeft = dueDateDayjs.diff(dayjs(),"day");
    var potentialEarnings = daysLeft*8*hourly;

    //1.create element
    var newTr = $("<tr>");
    var nameTd = $("<td>");
    var typeTd = $("<td>");
    var hourlyTd = $("<td>");
    var dueTd = $("<td>");
    var daysLeftTd = $("<td>");
    var earningsTd = $("<td>"); 
    var deleteTd = $("<td>");
    //2. add content/styles
    nameTd.text(name);
    typeTd.text(type);
    hourlyTd.text(hourly)
    dueTd.text(dueDateDayjs.format("DD/MM/YYYY"));
    daysLeftTd.text(daysLeft);
    earningsTd.text(potentialEarnings.toLocaleString("en-US", {style:"currency", currency:"USD"}));
    deleteTd.text("X")
    deleteTd.addClass(" delete-btn")
    //3.append
    newTr.append(nameTd,typeTd,hourlyTd,dueTd,daysLeftTd,earningsTd,deleteTd);
    $("tbody").append(newTr);
}

$("form").on("submit", function (event) {
  event.preventDefault();

  var newProjName = $("#newProjectName").val();
  var newProjType = $("#newProjectType").val();
  var newProjHourly = $("#newProjectHourly").val();
  var newProjDue = $("#newProjectDue").val();

  console.log("newProjName", newProjName);
  console.log("newProjType", newProjType);
  console.log("newProjHourly", newProjHourly);
  console.log("newProjDue", newProjDue);

  $("#newProjectName").val("");
  $("#newProjectType").val("");
  $("#newProjectHourly").val("");
  $("#newProjectDue").val("");

  printProjectData(newProjName,newProjType,newProjHourly,newProjDue)
  //for localstorage
//   projects.push({
//     name:newProjName,
//     type:newProjType,
//     hourly:newProjHourly,
//     due:newProjDue
//   })
//   localStorage.setItem("savedProjects",JSON.stringify(projects));
});
$("table").on("click",".delete-btn",function(event){
    var thisButton = $(event.target);
    thisButton.parent().remove();
})
