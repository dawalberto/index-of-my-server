const server = 'https://alberto-server.ga'

const myResources = [
  { title: 'node heroes-db mysql', service: true, port: 3001, url: `${server}:3001` },
  { title: 'node clima', service: true, port: 3002, url: `${server}:3002` },
  { title: 'node clima', service: false, port: null, url: `${server}/node-clima` },
  { title: 'node images-from-list', service: true, port: 3003, url: `${server}:3003` },
  { title: 'node images-from-list', service: false, port: null, url: `${server}/images-from-list` },
  { title: 'angular-anime-project', service: false, port: null, url: `${server}/angular-anime-project` },
  { title: 'angular-redux-todo', service: false, port: null, url: `${server}/angular-redux-todo` },
]

const icons = [
  { technologie: 'html', icon: '<span class="iconify" title="html" data-icon="logos:html-5" data-inline="false"></span>' },
  { technologie: 'css', icon: '<span class="iconify" title="css" data-icon="logos:css-3" data-inline="false"></span>' },
  { technologie: 'javascript', icon: '<span class="iconify" title="javascript" data-icon="logos:javascript" data-inline="false"></span>' },
]

const totalMyResources = myResources.length

const pages = myResources.filter(item => !item.service)

const services = myResources.filter(item => item.service)

function getProfileGithub(profile) {

  return new Promise((resolve, reject) => {

    fetch(`https://api.github.com/users/${profile}`)
      .then(response => response.json())
      .then(responseJson => resolve(responseJson))
      .catch(error => reject(error))
  })

}

function getReposGithub(profile) {

  return new Promise((resolve, reject) => {
  
    fetch(`https://api.github.com/users/${profile}/repos`)
      .then(response => response.json())
      .then(responseJson => resolve(responseJson))
      .catch(error => reject(error))
  
  })

} 

