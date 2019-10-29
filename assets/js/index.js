let titleRecursos = document.getElementById('titleRecursos')
let titles = document.getElementsByClassName('title')

addEventToTitles(titles)
generateTableRecursos()
printLastRepoPushed()


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
    tdTitle.classList.add('title-resources')

    tdUrl.appendChild(aUrl)
    appendChilds(tr, [tdTitle, tdServiceDesktop, tdServiceOrPageMobile, tdPaginaDesktop, tdPuerto, tdUrl])
    tbody.appendChild(tr)
    table.appendChild(tbody)

  }
  
  containerTableRecursos.appendChild(table)

}

function addEventToTitles(elements) {

  let arrayElements = Array.from(elements)
  for (let i = 0; i < arrayElements.length; i++) {
    elements[i].addEventListener('click', () => {

      let container = elements[i].nextElementSibling //Si la sección del títutlo no está justo a continuación esto no funcionará
      let title = elements[i].innerHTML.slice(2, elements[i].innerHTML.length).trim()
      showAndHiddenSections(elements[i], title, container)

    })
  }

}

function showAndHiddenSections(element, title, container) {

  if (element.textContent === `👇 ${title}`) {
    element.textContent = `👉${title}`
    container.style.display = 'none'
  } else {
    element.textContent = `👇 ${title}`
    container.style.display = 'initial'
  }

}

async function lastRepoGithubPushed() {

  let repos = await getReposGithub('dawalberto')

  let reposOrdered = repos.sort((repoa, repob) => {
    return new Date(repob.pushed_at) - new Date(repoa.pushed_at)
  })

  return reposOrdered[0]
  // dates = reposOrdered.map(repo => [repo.pushed_at, repo.name])
  // console.log(dates)

}

async function printLastRepoPushed() {

  let repo = await lastRepoGithubPushed()

  let container = document.getElementById('lastRepoPushed')
  let h3 = document.createElement('h3')
  let divDescription = document.createElement('div')
  let aUrl = document.createElement('a')
  let [pDescription, pUrl, pTecnos, pDatePushed, pDateCreated] = createElements('p', 5)

  divDescription.classList.add('section')
  divDescription.classList.add('double-padded')
  pTecnos.style.textAlign = 'center'

  let repoDescription = repo.description.slice(0, repo.description.search('- Tecnologias:'))
  let repoTechnologies = repo.description.slice(repo.description.search('- Tecnologias:'), repo.description.length)
  repoTechnologies = repo.description.slice(repo.description.search(':') + 1, repo.description.length)
  repoTechnologies = JSON.parse(repoTechnologies)

  for (let i = 0; i < repoTechnologies.length; i++) {
    let icon = icons.filter(icon => icon.technologie === repoTechnologies[i])
    if (icon.length > 0)
      pTecnos.innerHTML += icon[0].icon
  }

  let titleDateCreated = formatDate(repo.created_at)
  let titleDatePushed = formatDate(repo.pushed_at)
  titleDateCreated = `📅 Creado el ${titleDateCreated.dia} ${titleDateCreated.date.getDate()} de ${titleDateCreated.mes} de ${titleDateCreated.date.getFullYear()}`
  titleDatePushed = `📅 Última modificación el ${titleDatePushed.dia} ${titleDatePushed.date.getDate()} de ${titleDatePushed.mes} de ${titleDatePushed.date.getFullYear()}`
  pDateCreated.title = titleDateCreated
  pDatePushed.title = titleDatePushed
  let dateCreated = new Date(repo.created_at)
  let datePushed = new Date(repo.pushed_at)
  dateCreated = `🗒 Creado el ${dateCreated.getDate()}/${dateCreated.getMonth() + 1}/${dateCreated.getFullYear()}`
  datePushed = `🗓 Último push el ${datePushed.getDate()}/${datePushed.getMonth() + 1}/${datePushed.getFullYear()}`
  assignValuesToElements([h3, pDescription, aUrl, pDateCreated, pDatePushed], [repo.name, repoDescription, '👁 Ver en GitHub', dateCreated, datePushed])

  aUrl.href = repo.html_url
  aUrl.target = '_blank'
  pUrl.appendChild(aUrl)
  appendChilds(divDescription, [pDescription, pUrl, pDateCreated, pDatePushed])
  appendChilds(container, [h3, divDescription, pTecnos])

}

function formatDate(date) {

  let dia, mes

  switch (new Date(date).getDay()) {
    case 1:
      dia = 'Lunes'
    break
    case 2:
      dia = 'Martes'
    break
    case 3:
      dia = 'Miercoles'
    break
    case 4:
      dia = 'Jueves'
    break
    case 5:
      dia = 'Viernes'
    break
    case 6:
      dia = 'Sábado'
    break
    case 0:
      dia = 'Domingo'
    break
  }

  switch (new Date(date).getMonth() + 1) {
    case 1:
      mes = 'Enero'
    break
    case 2:
      mes = 'Febrero'
    break
    case 3:
      mes = 'Marzo'
    break
    case 4:
      mes = 'Abril'
    break
    case 5:
      mes = 'Mayo'
    break
    case 6:
      mes = 'Junio'
    break
    case 7:
      mes = 'Julio'
    break
    case 8:
      mes = 'Agosto'
    break
    case 9:
      mes = 'Septiembre'
    break
    case 10:
      mes = 'Octubre'
    break
    case 11:
      mes = 'Noviembre'
    break
    case 12:
      mes = 'Diciembre'
    break
  }

  return { date: new Date(date), dia, mes }

}