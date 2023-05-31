import courses from "../Ds_store/courses_data.js";
const courseCardContainer = document.querySelector(".courses-container");

const getCourses = ()=>{

  courses.forEach(course=>{
        let courseContent = `
        <p class="text-white"><i class="${course.icon} text-6xl"></i></p>
        <p class="font-bold text-[16px] text-lightPink uppercase">${course.name}</p>
        <p class="text-center text-white">${course.desription}</p>
        `
    
        let courseCard = document.createElement("div")
        courseCard.setAttribute('class','course-card flex flex-row md:flex-col px-[13px] gap-[13px] pt-2 pb-[15px] max-w-[350px] md:w-[200px] items-center')
        courseCard.innerHTML = courseContent
        courseCardContainer.appendChild(courseCard)
    })

    return courseCardContainer
}

export default getCourses    

