//Bai 8 

function alo(){
    alert("Alooo!!!")
};

alo();

//Bai9

function alo(name,wish){
    alert(`My name is ${name}, and i wish ${wish}`)
};

alo("Dha", "fly")

//Bai10

function alo(name, wish) {
  if (wish == undefined) {
    alert("khong co dieu uoc");
  } else {
    alert(`toi ten la ${name} dieu uoc cua toi la ${wish}`);
  }
}
alo("dha");
