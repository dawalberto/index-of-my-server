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
  { technologie: 'vue', icon: '<span class="iconify" title="vue" data-icon="logos:vue" data-inline="false"></span>' },
  { technologie: 'vuetify', icon: '<span class="iconify" title="vuetify" data-icon="logos:vuetifyjs" data-inline="false"></span>' },
  { technologie: 'scss', icon: '<span class="iconify" title="sass" data-icon="logos:sass" data-inline="false"></span>' },
  { technologie: 'typescript', icon: '<span class="iconify" title="typescript" data-icon="logos:typescript-icon" data-inline="false"></span>' },
  { technologie: 'angular', icon: '<span class="iconify" title="angular" data-icon="logos:angular-icon" data-inline="false"></span>' },
  { technologie: 'redux', icon: '<span class="iconify" title="redux" data-icon="logos:redux" data-inline="false"></span>' },
  { technologie: 'node', icon: '<span class="iconify" title="node" data-icon="logos:nodejs-icon" data-inline="false"></span>' },
  { technologie: 'express', icon: '<span class="iconify" title="express" data-icon="logos:express" data-inline="false"></span>' },
  { technologie: 'mysql', icon: '<span class="iconify" title="mysql" data-icon="simple-icons:mysql" data-inline="false"></span>' },
  { technologie: 'mongodb', icon: '<span class="iconify" title="mongodb" data-icon="logos:mongodb" data-inline="false"></span>' },
  { technologie: 'bootstrap', icon: '<span class="iconify" title="bootstrap" data-icon="logos:bootstrap" data-inline="false"></span>' },
  { technologie: 'python', icon: '<span class="iconify" title="python" data-icon="logos:python" data-inline="false"></span>' },
  { technologie: 'sass', icon: '<span class="iconify" title="sass" data-icon="logos:sass" data-inline="false"></span>' },
  { technologie: 'npm', icon: '<span class="iconify" title="npm" data-icon="logos:npm" data-inline="false"></span>' },
  { technologie: 'java', icon: '<span class="iconify" title="java" data-icon="logos:java" data-inline="false"></span>' },
  { technologie: 'spring', icon: '<span class="iconify" title="spring" data-icon="logos:spring" data-inline="false"></span>' },
  { technologie: 'hibernate', icon: '<span class="iconify" title="hibernate" data-icon="logos:hibernate" data-inline="false"></span>' }
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

