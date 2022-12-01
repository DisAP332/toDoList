let toDoNotes = [];
let projectNotes = [];
let noteNotes = [];

let Navcatagory = 1;
console.log('heyo')


const addNoteInit = document.getElementById('addNote')
const homeSpan = document.getElementById('homeSpan')
const todaySpan = document.getElementById('todaySpan')
const weekSpan = document.getElementById('weekSpan')
const projectSpan = document.getElementById('projectSpan')
const personalSpan = document.getElementById('personalSpan')
const workSpan = document.getElementById('workSpan')
const schoolSpan = document.getElementById('schoolSpan')
const notesSpan = document.getElementById('notesSpan')

homeSpan.setAttribute('style', 'font-size:2.5rem; color:white')

homeSpan.addEventListener('click', () => {Navcatagory = 1, chooseCatNav()})
todaySpan.addEventListener('click', () => {Navcatagory = 2, chooseCatNav()})
weekSpan.addEventListener('click', () => {Navcatagory = 3, chooseCatNav()})
projectSpan.addEventListener('click', () => {Navcatagory = 4, chooseCatNav()})
personalSpan.addEventListener('click', () => {Navcatagory = 5, chooseCatNav()})
workSpan.addEventListener('click', () => {Navcatagory = 6, chooseCatNav()})
schoolSpan.addEventListener('click', () => {Navcatagory = 7, chooseCatNav()})
notesSpan.addEventListener('click', () => {Navcatagory = 8, chooseCatNav()})

const chooseCatNav = () => {
    if (Navcatagory === 1){
        resetNavAttribute()
        homeSpan.setAttribute('style', 'font-size:2.5rem; color:white')

    } else if (Navcatagory === 2) {
        resetNavAttribute()
        todaySpan.setAttribute('style', 'font-size:2.5rem; color:white')

    } else if (Navcatagory === 3) {
        resetNavAttribute()
        weekSpan.setAttribute('style', 'font-size:2.5rem; color:white')
        
    } else if (Navcatagory === 4) {
        resetNavAttribute()
        projectSpan.setAttribute('style', 'font-size:2.5rem; color:white')
        
    } else if (Navcatagory === 5) {
        resetNavAttribute()
        personalSpan.setAttribute('style', 'font-size:2.5rem; color:white')
        
    } else if (Navcatagory === 6) {
        resetNavAttribute()
        workSpan.setAttribute('style', 'font-size:2.5rem; color:white')
        
    } else if (Navcatagory === 7) {
        resetNavAttribute()
        schoolSpan.setAttribute('style', 'font-size:2.5rem; color:white')
    } else if (Navcatagory === 8) {
        resetNavAttribute()
        notesSpan.setAttribute('style', 'font-size:2.5rem; color:white')
    }
}

const resetNavAttribute = () => {
    homeSpan.removeAttribute('style')
    todaySpan.removeAttribute('style')
    weekSpan.removeAttribute('style')
    projectSpan.removeAttribute('style')
    personalSpan.removeAttribute('style')
    workSpan.removeAttribute('style')
    schoolSpan.removeAttribute('style')
    notesSpan.removeAttribute('style')
}

addNoteInit.addEventListener('click', () => {
    initAddNote();
});

// const generateToDoList = (item) => {
//     const mainCont = document.getElementById('mainContainer')
//     const toDoWrapper = document.createElement('div')
//     const titleDiv = document.createElement('div')
//     const discDiv = document.createElement('div')
//     const dateDiv = document.createElement('div')

//     if (catagory === 5) {
//         for (let i=0; i<personal)
//     }
// }







const initAddNote = () => {
    const content = document.getElementById("contentWrapper");
    const content1 = document.getElementById('content')
    const modalHeader = document.createElement('div')
    const modalh1 = document.createElement('h1')
    const modalPositioner = document.createElement('div')
    const modalWrapper = document.createElement('div');
    const exitBtn = document.createElement('button')
    const modalSideBar = document.createElement('div');
    const sideBarUl = document.createElement('ul')
    const li1 = document.createElement('li')
    const li2 = document.createElement('li')
    const li3 = document.createElement('li')
    const span1 = document.createElement('span')
    const span2 = document.createElement('span')
    const span3 = document.createElement('span')
    const inputTitle = document.createElement('input');
    const modalInputField = document.createElement('div');
    const inputDetails = document.createElement('input');
    const submitBtn = document.createElement('button')
    const dateDue = document.createElement('input')
    const dueDateH1 = document.createElement('h1')


    content1.setAttribute('style', 'filter:blur(8px)')
    exitBtn.setAttribute('id', 'exitBtn')
    modalPositioner.setAttribute('id', 'modalPositioner')
    inputTitle.setAttribute('id', 'inputTitle')
    inputTitle.setAttribute('id', 'inputTitle')
    inputDetails.setAttribute('id', 'inputDetails')
    inputTitle.setAttribute('placeholder', 'Title:')
    inputDetails.setAttribute('placeholder', 'Details:')
    submitBtn.setAttribute('type', 'submit')
    span1.setAttribute('id', 'toDoSpan')
    span2.setAttribute('id', 'ProjectSpan')
    span3.setAttribute('id', 'NoteSpan')
    span1.setAttribute('value', 'toDo')
    span1.setAttribute('value', 'project')
    span1.setAttribute('value', 'note')
    span1.setAttribute('style', 'font-size:2rem; color:orange')
    dateDue.setAttribute('type', 'date')
    dateDue.setAttribute('id', 'dateDue')
    inputTitle.setAttribute('required', '')

    modalPositioner.classList.add('modalPositioner')
    modalWrapper.classList.add('modalWrapper');
    modalHeader.classList.add('modalHeader')
    modalSideBar.classList.add('modalSideBar');
    modalInputField.classList.add('modalInputField')
    span1.classList.add('modalNavItem')
    span2.classList.add('modalNavItem')
    span3.classList.add('modalNavItem')

    modalh1.textContent = 'Create a new...'
    exitBtn.textContent = "x"
    span1.textContent='To Do'
    span2.textContent='Project'
    span3.textContent='Notes'
    submitBtn.textContent= '+'
    dueDateH1.textContent = 'Date Due'

    const projectSelect = document.createElement('select')
    projectSelect.setAttribute('id', 'project')

    const ProjectPersonal = document.createElement('option')
    ProjectPersonal.setAttribute('value', 'personal')
    ProjectPersonal.textContent ='personal'

    const ProjectWork = document.createElement('option')
    ProjectWork.setAttribute('value', 'Work')
    ProjectWork.textContent='work'

    const ProjectSchool = document.createElement('option')
    ProjectSchool.setAttribute('value', 'School')
    ProjectSchool.textContent='school'

    const ProjectNotes = document.createElement('option')
    ProjectNotes.setAttribute('value', 'Notes')
    ProjectNotes.textContent='notes'

    const ProjectH1 = document.createElement('h1')
    ProjectH1.textContent = "Project:"
    

    content.appendChild(modalPositioner)
    modalPositioner.appendChild(modalWrapper);
    modalWrapper.appendChild(modalHeader)
    modalHeader.appendChild(modalh1)
    modalHeader.appendChild(exitBtn)
    modalWrapper.appendChild(modalSideBar)
    modalSideBar.appendChild(sideBarUl)
    sideBarUl.appendChild(li1)
    sideBarUl.appendChild(li2)
    sideBarUl.appendChild(li3)
    li1.appendChild(span1)
    li2.appendChild(span2)
    li3.appendChild(span3)
    modalWrapper.appendChild(modalInputField)
    modalInputField.appendChild(inputTitle)
    modalInputField.appendChild(inputDetails)
    modalInputField.appendChild(ProjectH1)
    modalInputField.appendChild(projectSelect)
    projectSelect.appendChild(ProjectPersonal)
    projectSelect.appendChild(ProjectWork)
    projectSelect.appendChild(ProjectSchool)
    projectSelect.appendChild(ProjectNotes)
    modalInputField.appendChild(dueDateH1)
    modalInputField.appendChild(dateDue)
    modalWrapper.appendChild(submitBtn)


    //add event listners to elements
    let catagory = 1;
    let title = document.getElementById('inputTitle')
    let details = document.getElementById('inputDetails')
    let dueDate = document.getElementById('dateDue');
    let project = document.getElementById('project')

    //modalEvents

    exitBtn.addEventListener('click', () => {
        const modalPositioner = document.getElementById("modalPositioner");
        modalPositioner.remove() 
        content1.setAttribute('style', 'filter:none')
    })

    submitBtn.addEventListener('click', () => {
        addNote()
    })

    span1.addEventListener('click', () => {catagory = 1; chooseCat()})
    span2.addEventListener('click', () => {catagory = 2; chooseCat()})
    span3.addEventListener('click', () => {catagory = 3; chooseCat()})

    //endModalEvents

    const chooseCat = () => {
        if(catagory === 1){
            span1.setAttribute('style', 'font-size:2rem; color:orange')
            span2.removeAttribute('style')
            span3.removeAttribute('style')
        } else if (catagory === 2){
            span2.setAttribute('style', 'font-size:2rem; color:orange')
            span1.removeAttribute('style')
            span3.removeAttribute('style')
        } else {
            span3.setAttribute('style', 'font-size:2rem; color:orange')
            span1.removeAttribute('style')
            span2.removeAttribute('style')
        }
    }

    class note {
        constructor(catagory, title, details,project, dueDate) {
            this.catagory = catagory;
            this.title = title;
            this.details = details;
            this.project = project;
            this.dueDate = dueDate;
        }
        addNotetoData() {
            if (catagory === 1) {
                toDoNotes.push(this)
                console.log(toDoNotes)
                clearFields()
            } else if (catagory === 2){
                projectNotes.push(this)
                console.log(projectNotes)
                clearFields()
            } else {
                noteNotes.push(this)
                clearFields()
            }
        }
    }

    const clearFields = () => {
        inputDetails.value = null;
        inputTitle.value = null;
        dueDate.value = null;
    }

    const addNote = () => {
        let newNote = new note(catagory, title.value, details.value, project.value, dueDate.value);
        newNote.addNotetoData();
    }
}