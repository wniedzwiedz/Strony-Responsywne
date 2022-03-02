let options = {
  root: null,
  rootMargin: '1px',
  threshold: 0.3
}

function callback(entries, observer)
{
  for (e of entries)
  {
    if (e.isIntersecting)
      e.target.classList.add("visible")
    else
      e.target.classList.remove("visible")
  }
}

let observer = new IntersectionObserver(callback, options)
for (e of document.querySelector("section").children)
{
  observer.observe(e)
}
