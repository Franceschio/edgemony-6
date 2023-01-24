import { GET, cE, qS, app } from "./utils.js";

const usersList = qS(".usersList");
const ricerca = qS("#ricerca");

function createUser(us) {
  const userEl = cE("div");
  const anagraphic = cE("div");
  const profPicCont = cE("div");
  const profPic = cE("img");
  const information = cE("div");
  const nameSurname = cE("span");
  const birthDate = cE("h5");
  const contact = cE("div");
  const contactName = cE("div");
  const contactInfo = cE("div");
  const userName = cE("h2");
  const mail = cE("span");
  const phoneNum = cE("span");

  userEl.className = "userCard";
  anagraphic.className = "anagraphic";
  profPicCont.className = "profPicContainer";
  profPic.className = "profPic";
  information.className = "info";
  contact.className = "contact";
  contactName.className = "contName";
  contactInfo.className = "contInfo";

  profPic.setAttribute("src", us.image);
  nameSurname.textContent = `${us.firstName} ${us.lastName}`;
  birthDate.textContent = us.birthDate;
  userName.textContent = us.username;
  mail.textContent = us.email;
  phoneNum.textContent = us.phone;

  profPicCont.appendChild(profPic);
  information.append(nameSurname, birthDate);
  anagraphic.append(profPicCont, information);
  contactName.appendChild(userName);
  contactInfo.append(mail, phoneNum);
  contact.append(contactName, contactInfo);
  userEl.append(anagraphic, contact);
  usersList.appendChild(userEl);
}

function deleteUsers() {
  const usersList = document.querySelectorAll(".userCard");

  usersList.forEach((user) => user.remove());
}

GET("https://dummyjson.com/", "users").then((data) => {
  data.users.map((user) => createUser(user));
});

ricerca.addEventListener("input", (event) => {
  deleteUsers();
  let value = event.target.value;
  GET("https://dummyjson.com/", "users").then((data) => {
    data.users.map((user) => {
      if (user.firstName.includes(value) || user.lastName.includes(value)) {
        createUser(user);
      }
    });
  });
});
