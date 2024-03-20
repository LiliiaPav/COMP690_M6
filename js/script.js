window.addEventListener("load", () => {
  const $ = (id) => document.getElementById(id);
  let fmEmpl = $("empForm");
  let valEmplId = $("id");
  let valEmplName = $("name");
  let valEmplExt = $("ext");
  let valEmplEmail = $("email");
  let valEmplDep = $("department");

  fmEmpl.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("ID:", valEmplId.value);
    console.log("Name:", valEmplName.value);
    console.log("Extension:", valEmplExt.value);
    console.log("Email:", valEmplEmail.value);
    console.log("Department:", valEmplDep.value);
    fmEmpl.reset();
  });
});
