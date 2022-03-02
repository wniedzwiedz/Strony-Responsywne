function callback(entries, observer)
{
  for (e of entries)
  {
    if (e.isIntersecting)
      e.target.style.opacity = 1.0
    else
      e.target.style.opacity = 0.0
  }
}

function setObserver(threshold)
{
  console.log("Creating observer " + threshold)
  document.querySelector("#value").innerHTML = threshold
  let options = {
    root: null,
    rootMargin: '1px',
    threshold: threshold
  }

  let observer = new IntersectionObserver(callback, options)

  for (c of document.querySelector("section").children)
  {
    observer.observe(c)
  }
  return observer;
}

observer = setObserver(0.3)

function sliderChange(e)
{
  document.querySelector("#value").innerHTML = e.target.value
  observer = setObserver(e.target.value)
}

document.querySelector("#slider").addEventListener("change", sliderChange)
