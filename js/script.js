const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

const db = firestore.collection("whitelist");
let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
  
    // Get Form Values
    let firstName = document.getElementById("fullName").value;
    let lastName = document.getElementById("ageIC").value;
    let country = document.getElementById("origin").value;
    let socialclass = document.getElementById("socialClass").value;
    let historia = document.getElementById("characterHistory").value;
    let oocedad = document.getElementById('ageOOC').value;
    let steamurl = document.getElementById('steamUrl').value;
    let discordName = document.getElementById('discordName').value;
    let status = 'pending'
    let tiempo = new Date();

    if (!firstName || !lastName || !country || !socialclass || !historia || !oocedad || !steamurl || !discordName) {
      alert('Por favor, complete todos los campos antes de enviar el formulario.');
      return;
    }
    if (parseInt(oocedad) < 16) {
      alert('Tienes que tener 16 años o ser mayor para enviar el formulario.');
      clearForm()
      return;
    }
  
  
    firestore
      .collection("whitelist")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const fn = doc.data().fname;
          if (firstName === fn) {
            console.log("Ya existe");
          }
  
        });
      });
  
    db.doc()
      .set({
        nombre: firstName,
        edadic: lastName,
        pais: country,
        socialClass: socialclass,
        historyPj: historia,
        oocage: oocedad,
        steamurl: steamurl,
        nomeDiscord: discordName,
        status: status,
        timeStamp: tiempo,
        reason: ""
      })
      .then(() => { })
      .catch((error) => {
        console.log(error);
      });
  
    // Function to clear form fields
    function clearForm() {
      document.getElementById("clearFrom").reset();
    }
    clearForm()
  });