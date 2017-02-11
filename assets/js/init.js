var shell = Shell()
var cachep2p = new CacheP2P()

cachep2p.on('ready', function(message) {
  shell.draw()
  shell.show()
})
cachep2p.on('message', function(message) {
  shell.show({ message: message, color: 'green' })
})
cachep2p.on('alert', function(message) {
  shell.show({ message: message, color: 'orange' })
})
cachep2p.on('success', function(message) {
  shell.show({ message: message, color: '#10d810' })
})
cachep2p.on('webtorrent', function(message) {
  shell.show({ message: message, color: '#a9a9a9' })
})
cachep2p.on('onpopstate', function(message) {
  var shell = Shell()
  console.log('onpopstate from cachep2p')
  shell.show({ message: 'Showing Cached Page', color: 'blue' })
})
cachep2p.on('cache', function(event) {
  var shell = Shell()
  console.log('cache from cachep2p', event)
  shell.clear()
  shell.show({ message: 'Showing page from cache: ' + event.target.href + ' (Not contacted the server)', color: '#43c6d2' })
})

setTimeout(function() {
  shell.show()
}, 1000)

(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-86211205-1', 'auto');
ga('send', 'pageview');