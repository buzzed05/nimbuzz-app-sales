async function login(){

    let kode = document.getElementById("kodeSales").value.trim();

    if(kode==""){
        document.getElementById("info").innerHTML="Masukkan Kode Sales";
        return;
    }

    document.getElementById("info").innerHTML="Sedang mengecek...";

    try{

        const response = await fetch(API_URL+"?action=login&kode="+encodeURIComponent(kode));

        const result = await response.json();

        if(result.status){

            localStorage.setItem("sales",JSON.stringify(result));

            window.location.href="dashboard.html";

        }else{

            document.getElementById("info").innerHTML=result.message;

        }

    }catch(err){

        document.getElementById("info").innerHTML="Tidak dapat terhubung ke server";

        console.log(err);

    }

}
