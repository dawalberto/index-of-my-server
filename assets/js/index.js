let titleRecursos = document.getElementById('titleRecursos')
let containerTableRecursos = document.getElementById('containerTableRecursos')

generateTableRecursos();


function createElements(type, numElements) {

  let elements = []

  for (let i = 0; i < numElements; i++) {
    elements.push(document.createElement(type))
  }

  return elements

}

function assignValuesToElements(elements, values) {

  for (let i = 0; i < elements.length; i++) {
    elements[i].textContent = values[i]
  }

}

function appendChilds(element, elementsToAppend) {

  for (let i = 0; i < elementsToAppend.length; i++) {
    element.appendChild(elementsToAppend[i])
  }

}

function addClassToElements(elements, classString) {

  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add(classString)
  }

}

function generateTableRecursos() {

  let table = document.createElement('table')
  let thead = document.createElement('thead')
  let tbody = document.createElement('tbody')
  let trTitles = document.createElement('tr')
  let thTitles = [thTitle1, thTitle2, thTitle3, thTitle4, thTitle5] = createElements('th', 5)
  let thTitleValues = ['Título', 'Servicio', 'Página', 'Puerto', 'Enlace']

  let caption = document.createElement('caption')
  caption.textContent = `${totalMyResources} recursos`

  addClassToElements(thTitles, 't-align')
  addClassToElements(thTitles, 'title-table')
  assignValuesToElements(thTitles, thTitleValues)
  appendChilds(trTitles, thTitles)
  thead.appendChild(trTitles)
  appendChilds(table, [caption, thead])

  for (let i = 0; i < myResources.length; i++) {

    let tr = document.createElement('tr')
    let [tdTitle, tdServiceDesktop, tdServiceOrPageMobile, tdPaginaDesktop, tdPuerto, tdUrl] = createElements('td', 6)

    tdTitle.textContent = myResources[i].title
    tdServiceDesktop.textContent = myResources[i].service ? 'X' : ''
    tdPaginaDesktop.textContent = !myResources[i].service ? 'X' : ''
    tdServiceOrPageMobile.textContent = myResources[i].service ? 'Servicio' : 'Página'
    tdPuerto.textContent = myResources[i].service ? myResources[i].port : '-'
    let aUrl = document.createElement('a')
    aUrl.href = myResources[i].url
    aUrl.target = '_blank'
    aUrl.textContent = myResources[i].url

    addClassToElements([tdTitle, tdServiceDesktop, tdServiceOrPageMobile, tdPaginaDesktop, tdPuerto], 't-align')
    addClassToElements([tdServiceDesktop, tdPaginaDesktop], 'show-in-desktop')
    tdServiceOrPageMobile.classList.add('show-in-mobile')

    tdUrl.appendChild(aUrl)
    appendChilds(tr, [tdTitle, tdServiceDesktop, tdServiceOrPageMobile, tdPaginaDesktop, tdPuerto, tdUrl])
    tbody.appendChild(tr)
    table.appendChild(tbody)

  }
  
  containerTableRecursos.appendChild(table)

}

titleRecursos.addEventListener('click', () => {

  if (titleRecursos.textContent === '👇 Recursos') {
    titleRecursos.textContent = '👉Recursos'
    containerTableRecursos.style.display = 'none'
  } else {
    titleRecursos.textContent = '👇 Recursos'
    containerTableRecursos.style.display = 'initial'
  }

})

async function getProfileGithubFromMyResources(profile) {

  getProfileGithub(profile)
    .then(response => console.log(response))
    .catch(error => console.log(error))

}

async function getReposGithubFromMyResources(profile) {

  getReposGithub(profile)
    .then(response => console.log(response))
    .catch(error => console.log(error))

}