const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

let spanwhitelistrecibidas = document.getElementById('spanwhitelistrecived');
let spanWhitelistAprobadas = document.getElementById('spawnwhitelistaprobadas');
let spanWhitelistRechazadas = document.getElementById('spanwhitelistrechazadas');

const db = firestore.collection("whitelist");

async function getWhitelistCount() {
    try {
        const snapshot = await db.get();
        return snapshot.size;
    } catch (error) {
        console.error('Error al obtener el número de documentos en la whitelist:', error);
        return 0;
    }
}

async function getWhitelistCountByStatus(status) {
    try {
        const snapshot = await db.where('status', '==', status).get();
        return snapshot.size;
    } catch (error) {
        console.error(`Error al obtener el número de documentos con estado "${status}" en la whitelist:`, error);
        return 0;
    }
}

async function updateWhitelistCount() {
    const total = await getWhitelistCount();
    const aprobadas = await getWhitelistCountByStatus('Aprobada');
    const rechazadas = await getWhitelistCountByStatus('Rechazada'); 
    
    let currentTotal = 0;
    let currentAprobadas = 0;
    let currentRechazadas = 0;

    const totalStep = Math.ceil(total / 100);
    const aprobadasStep = Math.ceil(aprobadas / 100);
    const rechazadasStep = Math.ceil(rechazadas / 100);

    const updateTotal = () => {
        currentTotal += totalStep;
        spanwhitelistrecibidas.textContent = currentTotal + "+";
        if (currentTotal < total) {
            setTimeout(updateTotal, 70);
        }
    };

    const updateAprobadas = () => {
        currentAprobadas += aprobadasStep;
        spanWhitelistAprobadas.textContent = currentAprobadas + "+";
        if (currentAprobadas < aprobadas) {
            setTimeout(updateAprobadas, 70);
        }
    };

    const updateRechazadas = () => {
        currentRechazadas += rechazadasStep;
        spanWhitelistRechazadas.textContent = currentRechazadas + "+";
        if (currentRechazadas < rechazadas) {
            setTimeout(updateRechazadas, 70);
        }
    };

    updateTotal();
    updateAprobadas();
    updateRechazadas();
}

updateWhitelistCount();
