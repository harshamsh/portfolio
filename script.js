/* Highlights the current section in the left index rail. */
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.rail a'));
  if (!links.length || !('IntersectionObserver' in window)) return;

  var byId = {};
  var targets = [];

  links.forEach(function (link) {
    var id = link.getAttribute('href').slice(1);
    var el = document.getElementById(id);
    if (!el) return;
    byId[id] = link;
    targets.push(el);
  });

  var visible = new Set();

  function paint() {
    var current = null;
    for (var i = 0; i < targets.length; i++) {
      if (visible.has(targets[i].id)) { current = targets[i].id; break; }
    }
    links.forEach(function (l) { l.classList.remove('is-current'); });
    if (current && byId[current]) byId[current].classList.add('is-current');
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) visible.add(entry.target.id);
      else visible.delete(entry.target.id);
    });
    paint();
  }, { rootMargin: '-10% 0px -70% 0px', threshold: 0 });

  targets.forEach(function (t) { observer.observe(t); });
})();
