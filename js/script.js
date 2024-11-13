const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];




// CREAZIONE CARD



const createCard = ({ name, role, email, img }) => {
  return `
            <div class="col-4">
                <!-- Card -->
                <div class="card mb-3 text-white bg-black"> 
                    <div class="row g-0">
                        <!-- Card img -->
                        <div class="col-md-4">
                            <img src="${img}" class="img-fluid rounded-start" alt="${name}">
                        </div>
                        <!-- Card description -->
                        <div class="col-md-8">
                            <div class="card-body">
                                <h4 class="name mt-3">${name}</h4>
                                <p class="role">${role}</p>
                                <p class="email text-info">${email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     `;
};




 // STAMPARE LE CARD DINAMICAMENTE
const teamContainer = document.getElementById("card-container"); 

const renderTeam = () => {
 let items = "";
 for (let i = 0; i < teamMembers.length; i++) {
    const card = createCard(teamMembers[i]);
    items += card;
  }
  teamContainer.innerHTML = items;
};

// INVOCO LA FUNZIONE
renderTeam(); 