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

function generateTable() {

  let table = document.createElement('table')
  let trTitles = document.createElement('tr')
  let thTitles = [thTitle1, thTitle2, thTitle3, thTitle4, thTitle5] = createElements('th', 5)
  let thTitleValues = ['Título', 'Servicio', 'Página', 'Puerto', 'Enlace']

  addClassToElements(thTitles, 't-align')
  addClassToElements(thTitles, 'title-table')
  assignValuesToElements(thTitles, thTitleValues)
  appendChilds(trTitles, thTitles)
  table.appendChild(trTitles)

  // TODO bucle para rellenar la tabla a partir del array data del fichero data.js
  let tdTitle, tdServiceDesktop
  [tdTitle, tdServiceDesktop] = createElements('td', 2)

  for (let i = 0; i < data.length; i++) {

    tdTitle.textContent = data[i].title
    tdServiceDesktop.textContent = data[i].service ? 'X' : ''
    tdServiceMobile.textContent = data[i].service ? 'Servicio' : ''

  }
  
  document.getElementById('containerTable').appendChild(table)

}