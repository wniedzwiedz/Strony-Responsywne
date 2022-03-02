let options = {
  root: null,
  rootMargin: '1px',
  threshold: 0.0
}

nodeCounter = 0

function createRandomNode()
{
  elem = null
  if (nodeCounter % 2 == 0)
  {
    elem = document.createElement("span")
    for (i = 0; i < 1000 + Math.random() * 1000; ++i)
      elem.innerHTML += "Test test "
  } else
  {
    elem = document.createElement("img")
    n = Math.max(1, Math.min(9, Math.round(Math.random() * 9)))
    elem.src = `img/a${n}.jpg`
    console.log(elem.src)
  }
  nodeCounter ++
    
  return elem;
}

function loadRandomData()
{
  section = document.querySelector("section")
  section_end = document.querySelector("#section-end")

  section.insertBefore(createRandomNode(), section_end)
}

function callback(entries, observer)
{
  if (entries[0].isIntersecting)
  {
    loadRandomData()
  }
}

let observer = new IntersectionObserver(callback, options)
observer.observe(document.querySelector("#section-end"))
