import tutors from '../Ds_store/tutors_data.js';

const tutorCardContainer = document.querySelector('.tutor-card-container');

const getTutors = () => {
  tutors.forEach((tutor) => {
    const tutorContent = `
        <img src="./images/black-white-bg.jpg" alt="black-white"
          class="w-[45px] lg:w-[45px] h-[45px] lg:h-[45px] absolute top-0 left-0">
        <img src="${tutor.avatar}" alt="asum avater"
          class="z-10 w-[85px] h-[85px]">
        <div class="flex flex-col gap-2">
          <p class="text-veryDarkBlue text-xl font-bold">${tutor.name}</p>
          <p class="text-lightPink font-semibold">${tutor.position}</p>
          <p class="text-veryDarkBlue text-[16px] font-semibold lg:px-2">${tutor.bio}</p>
        </div>
        `;

    const tutorCard = document.createElement('div');
    tutorCard.setAttribute('class', 'tutor-card flex flex-row p-3 gap-[20px] relative w-[350px] lg:w-[480px]');
    tutorCard.innerHTML = tutorContent;
    tutorCardContainer.appendChild(tutorCard);
  });

  return tutorCardContainer;
};

export default getTutors;
