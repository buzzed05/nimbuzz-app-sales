async function login(){

    let kode=document.getElementById("kodeSales").value.trim();

    if(kode==""){

        document.getElementById("info").innerHTML="Kode Sales harus diisi";

        return;

    }

    document.getElementById("info").innerHTML="Sedang mengecek...";

    const res=await fetch(API_URL+"?action=sales");

    const data=await res.json();

    let ketemu=false;

    for(let i=0;i<data.length;i++){

        if(data[i].kode.toUpperCase()==kode.toUpperCase()){

            ketemu=true;

            localStorage.setItem("sales",JSON.stringify(data[i]));

            break;

        }

    }

    if(ketemu){

        window.location="dashboard.html";

    }

    else{

        document.getElementById("info").innerHTML="Kode Sales tidak ditemukan";

    }

}
