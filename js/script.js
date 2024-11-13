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


// STAMPARE LE CARD DINAMICAMENTE

// FUNZIONE

const createCard = ({ name, role, email, img }) => {
  return `
      <div class="row">
            <div class="col-4">
                <!-- Card -->
                <div class="card mb-3 text-white bg-black" style="max-width: 540px;">
                    <div class="row g-0">
                        <!-- Card img -->
                        <div class="col-md-4">
                            <img src="./img/${img}" class="img-fluid rounded-start" alt="${name}">
                        </div>
                        <!-- Card description -->
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="name">${name}</h5>
                                <p class="role">${role}</p>
                                <p class="email text-info">${email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     `;
};




 
const teamContainer = document.querySelector("container"); 
const renderTeam = () => {
 for (let i = 0; i < teamMembers.length; i++) {
    let items = "";
    const card = createCard(teamMembers[i]);
    items += card;
  }
  teamContainer.innerHTML = items;
};

renderTeam(); 