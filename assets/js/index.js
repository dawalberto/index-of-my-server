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
  caption.textContent = 'Recursos'

  addClassToElements(thTitles, 't-align')
  addClassToElements(thTitles, 'title-table')
  assignValuesToElements(thTitles, thTitleValues)
  appendChilds(trTitles, thTitles)
  thead.appendChild(trTitles)
  appendChilds(table, [caption, thead])

  for (let i = 0; i < data.length; i++) {

    let tr = document.createElement('tr')
    let [tdTitle, tdServiceDesktop, tdServiceOrPageMobile, tdPaginaDesktop, tdPuerto, tdUrl] = createElements('td', 6)

    tdTitle.textContent = data[i].title
    tdServiceDesktop.textContent = data[i].service ? 'X' : ''
    tdPaginaDesktop.textContent = !data[i].service ? 'X' : ''
    tdServiceOrPageMobile.textContent = data[i].service ? 'Servicio' : 'Página'
    tdPuerto.textContent = data[i].service ? data[i].port : '-'
    let aUrl = document.createElement('a')
    aUrl.href = data[i].url
    aUrl.target = '_blank'
    aUrl.textContent = data[i].url

    addClassToElements([tdTitle, tdServiceDesktop, tdServiceOrPageMobile, tdPaginaDesktop, tdPuerto], 't-align')
    addClassToElements([tdServiceDesktop, tdPaginaDesktop], 'show-in-desktop')
    tdServiceOrPageMobile.classList.add('show-in-mobile')

    tdUrl.appendChild(aUrl)
    appendChilds(tr, [tdTitle, tdServiceDesktop, tdServiceOrPageMobile, tdPaginaDesktop, tdPuerto, tdUrl])
    tbody.appendChild(tr)
    table.appendChild(tbody)

  }
  
  document.getElementById('containerTable').appendChild(table)

}