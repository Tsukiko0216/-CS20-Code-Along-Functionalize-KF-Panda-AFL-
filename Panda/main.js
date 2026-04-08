// Kung Fu Panda Character Look Up

// Event Listener
document.getElementById('search').addEventListener('click', searchClicked);

// Function update
function updatePage(character, image, quote) {
  document.getElementById('character-name').innerHTML = character;
  document.getElementById('main-img').src = image;
  document.getElementById('quote').innerHTML = quote;
}

// Event Function
function searchClicked() {
  let name = document.getElementById('input-name').value.toLowerCase();

  if (name === 'po' || name === 'dragon warrior') {
    updatePage('Po', 'img/po.png', 'Buddy, I am the Dragon Warrior.');
  } else if (name === 'tigress' || name === 'master tigress') {
    updatePage('Master Tigress', 'img/tigress.png', 'That was pretty hardcore!');
  } else if (name === 'mantis' || name === 'master mantis') {
    updatePage('Master Mantis', 'img/mantis.png', 'Fear the bug!');
  } else if (name === 'monkey' || name === 'master monkey') {
    updatePage('Master Monkey', 'img/monkey.png', 'We should hang out.');
  } else if (name === 'crane' || name === 'master crane') {
    updatePage('Master Crane', 'img/crane.png', 'You can chain my body, but you will never chain my warrior spirit!');
  } else if (name === 'viper' || name === 'master viper') {
    updatePage('Master Viper', 'img/viper.png', "I don't need to bite to fight!");
  } else if (name === 'shifu' || name === 'master shifu') {
    updatePage('Master Shifu', 'img/shifu.png', 'There is now a Level Zero.');
  } else if (name === 'ping' || name === 'mr. ping') {
    updatePage('Mr. Ping', 'img/mr-ping.png', 'We are noodle folk, broth runs through our veins!');
  } else {
    updatePage('?????', 'img/question-mark.png', 'Character Not Found');
  }
}