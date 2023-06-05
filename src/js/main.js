const liftCar = document.querySelector('.lift-car');
const liftUpBtn = document.querySelector('.liftUpBtn');
const liftDownBtn = document.querySelector('.liftDownBtn');
const floorSectionContainer = document.querySelector('.main');
const floorSection = document.querySelector('.floor-section');
const formDialog = document.querySelector('.formDialog');
const inputForm = document.querySelector('.inputForm');
const dialogBtn = document.querySelector('.dialogBtn');
const showDialog = document.querySelector('.showDialog');

function renderFloorSection() {
  const numberOfFloors = document.querySelector('#floors').value;
  const numberOfLifts = document.querySelector('#lifts').value;
  floorSectionContainer.innerHTML = '';
  for (let i = 0; i < numberOfFloors; i++) {
    const floorSectionCloned = floorSection.cloneNode(true);
    const floorCount = floorSectionCloned.querySelector('.floor-number');
    const liftContainer = floorSectionCloned.querySelector('.lift-container');
    const liftUpBtn = floorSectionCloned.querySelector('.liftUpBtn');
    const liftDownBtn = floorSectionCloned.querySelector('.liftDownBtn');
    liftUpBtn.id = `liftUpBtn-${i}`;
    liftDownBtn.id = `liftDownBtn-${i}`;

    if (i === 0) {
      for (let j = 0; j < numberOfLifts; j++) {
        const liftCar = document.createElement('div');
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

const handleUpBtnClick = () => {
  console.log('up btn clicked ');
  liftCar.classList.add('move');
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
console.log('liftUpBtn', liftUpBtn);
liftUpBtn.addEventListener('click', handleUpBtnClick);
