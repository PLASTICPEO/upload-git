// დასახელება მეტად გასაგები, ამ ელემენტს ერორისთვის იყენებ როგორც მივხვდი
// შეგიძლია პირდაპირ html-ში გქონდეს ერორისთვის რამე ელემენტი display: none; დაადო ამოიღო ეგ ჯავასკრიპტში
// და იგივე ლოგიკით როცა ცარიელია მოხსნა ეგ display: none; სტილი და გამოჩნდეს, როცა უკვე ჩაწერს როგორც საჭიროა
// ისევ დაადო, არ არის საჭირო ეს, თან ul-ზე ააფენდებ და ul-ში ლისტი იხატება,
// არაფერ კავშირშია ერორი მაგ ლისტთან, ინფუთის ერორია ეს და ინფუთის ქვეშ უნდა იყოს
const createLi = document.createElement('li');

// selectors
const ul = document.querySelector('.ul');
const title = document.querySelector('.form__field');
const searchBtn = document.querySelector('.addbtn');

// sounds
const recycleSound = document.querySelector('.recycle'); // დასახელება, itemDeletionSound უფრო უკეთესი იქნებოდა
const emptyImput = document.querySelector('.empty'); // დასახელება emptyImput საერთოდ არაფერს მეუბნება, ცარიელი ინფუთი რას ნიშნავს?
const addSound = document.querySelector('.addSound'); // addSound ნორმალურია, თუმცა itemCreationSound უფრო უკეთესი იქნებოდა

const newVariable = []; // ეს რა არის?

searchBtn.addEventListener('click', (event) => {
  createLi.innerText = '';
  if (title.value.trim()) {
    event.preventDefault(); // ამას რატომ იყენებ? ჩემი აზრით არ გჭირდება

    const createLi = document.createElement('li'); // ცვლადის სახელი createLi არაფერს მეუბნება, listElement უფრო გასაგები იქნებოდა
    createLi.classList.add('liclass');
    createLi.innerText = title.value;
    ul.appendChild(createLi);

    ul.style.backgroundColor = 'rgba(92, 107, 115, 0.1)'; // ჯავასკრიპტით რატომ სტილავ ??

    addSound.play();
    /**
     * li-ს რომ მიანიჭო პოზიცია relative და მერე იქსს აბსოლუტი, ჩაჯდება ეს აბსოლუტ იქსი
     * li-ში და დაუწერ right 0; top: 50%; transform: translateY(-50%);
     * და ეგაა მოგვარდა იქსის ამბავი
     */
    const createSpan = document.createElement('span'); // ცვლადის სახელი createSpan არაფერს მეუბნება, deleteLogo ან deleteBtn უფრო გასაგები იქნებოდა
    createSpan.innerText = 'X';
    createLi.appendChild(createSpan);
    createSpan.style.top += 40;
    createSpan.classList.add('remove');

    createSpan.addEventListener('click', () => {
      recycleSound.play();
      createLi.remove();

      for (let i = 0; i < valueArray.length; i++) {
        // ეს ფორ ლუპი რისთვის წერია? valueArray რა არის ან სად არის?
        valueArray.shift();
      }
    });
  } else {
    emptyImput.play();
    ul.appendChild(createLi);
    createLi.style.color = '#C44536';
    createLi.innerText = 'Enter the title...';
  }

  title.value = ' ';
  title.focus();
});
