import courses from '../Ds_store/courses_data.js';

const courseCardContainer = document.querySelector('.courses-container');

const getCourses = () => {
  courses.forEach((course) => {
    const courseContent = `
        <p class="text-white col-span-1"><i class="${course.icon} text-[55px]"></i></p>
        <p class="font-bold col-span-1 text-[16px] text-lightPink uppercase ">${course.name}</p>
        <p class="md:text-center col-span-2 text-[14px] font-semibold text-ash ">${course.desription}</p>
        `;

    const courseCard = document.createElement('div');
    courseCard.setAttribute('class', 'px-2 border-2 border-transparent hover:border-white grid grid-cols-4 course-card md:flex flex-row md:flex-col md:px-[13px] gap-y-[13px] gap-x-[7px] pt-2 pb-[15px] max-w-[350px] md:h-[250px] md:w-[200px] items-center');
    courseCard.innerHTML = courseContent;
    courseCardContainer.appendChild(courseCard);
  });

  return courseCardContainer;
};

export default getCourses;
