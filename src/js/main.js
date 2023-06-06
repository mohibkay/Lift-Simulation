const floorSectionContainer = document.querySelector('.main');
const floorSection = document.querySelector('.floor-section');
const formDialog = document.querySelector('.formDialog');
const inputForm = document.querySelector('.inputForm');
const dialogBtn = document.querySelector('.dialogBtn');
const showDialog = document.querySelector('.showDialog');
let liftCar, liftUpBtn, liftDownBtn;

function renderFloorSection() {
  const numberOfFloors = document.querySelector('#floors').value;
  const numberOfLifts = document.querySelector('#lifts').value;
  floorSectionContainer.innerHTML = '';
  for (let i = 0; i < numberOfFloors; i++) {
    const floorSectionCloned = floorSection.cloneNode(true);
    const floorCount = floorSectionCloned.querySelector('.floor-number');
    const liftContainer = floorSectionCloned.querySelector('.lift-container');
    liftUpBtn = floorSectionCloned.querySelector('.liftUpBtn');
    liftDownBtn = floorSectionCloned.querySelector('.liftDownBtn');
    liftUpBtn.id = `liftUpBtn-${i}`;
    liftDownBtn.id = `liftDownBtn-${i}`;

    liftUpBtn.addEventListener('click', (event) => handleUpBtnClick(event));

    if (i === 0) {
      for (let j = 0; j < numberOfLifts; j++) {
        liftCar = document.createElement('div');
        liftCar.className = 'lift-car';
        liftCar.id = `lift-${j}`;
        liftContainer.append(liftCar);
        liftContainer.append(liftCar);
      }
    }
    floorCount.textContent = `Floor ${i}`;
    floorSectionContainer.insertBefore(
      floorSectionCloned,
      floorSectionContainer.firstChild
    );
    floorSection.classList.remove('.floor-section');
  }
}

const handleUpBtnClick = (event) => {
  var rect = liftCar.getBoundingClientRect();
  const buttonPosition = event.clientY - rect.top - 39.5;
  console.log('buttonPos', event.clientY, rect.top, liftCar);
  liftCar.style.transform = `translateY(${buttonPosition}px)`;
};

formDialog.showModal();

showDialog.addEventListener('click', () => {
  floorSectionContainer.style.display = 'none';
  formDialog.showModal();
});

dialogBtn.addEventListener('click', () => {
  floorSectionContainer.style.display = 'block';
  renderFloorSection();
});
