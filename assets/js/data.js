const server = 'https://alberto-server.ga'

const data = [
  { title: 'node heroes-db mysql', service: true, port: 3001, url: `${server}:3001` },
  { title: 'node clima', service: true, port: 3002, url: `${server}:3002` },
  { title: 'node clima', service: false, port: null, url: `${server}/node-clima` },
  { title: 'node images-from-list', service: true, port: 3003, url: `${server}:3003` },
  { title: 'node images-from-list', service: false, port: null, url: `${server}/images-from-list` },
  { title: 'angular-anime-project', service: false, port: null, url: `${server}/angular-anime-project` },
  { title: 'angular-redux-todo', service: false, port: null, url: `${server}/angular-redux-todo` },
]

const total = data.length

const pages = data.filter(item => !item.service)

const services = data.filter(item => item.service)
