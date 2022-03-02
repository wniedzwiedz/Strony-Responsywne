const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt felis at pharetra sagittis. Donec et turpis luctus, molestie eros et, egestas ex. Aliquam id felis vitae turpis mollis consectetur id sed orci. In viverra elementum mollis. Phasellus at mi tellus. Phasellus et ipsum eget odio pharetra fringilla at a dui. Cras eget euismod massa.",
    "Morbi cursus purus nisl, ut commodo metus mollis id. Nunc odio sem, egestas at mollis eleifend, sollicitudin eu felis. Vivamus ac turpis sed enim rhoncus lacinia. Vivamus dictum vestibulum sapien, id efficitur odio rutrum eu. Donec molestie leo eros, et vestibulum mi tempus et. Fusce porta sollicitudin erat sit amet vehicula. Integer ultrices, libero in elementum congue, lorem ante euismod risus, id imperdiet turpis neque sed mauris. Aenean velit tortor, ullamcorper sed felis quis, suscipit elementum lacus. Pellentesque egestas tincidunt ipsum, nec tempor tortor venenatis et.",
    "Phasellus a finibus eros. Sed aliquet placerat dui, quis molestie risus molestie eget. Nulla malesuada leo mauris, ac finibus elit vehicula sed. Etiam gravida lectus et turpis bibendum sodales. Ut cursus massa nec odio pharetra, non maximus metus rhoncus. Phasellus pharetra neque vitae augue egestas, ut rutrum metus molestie. Fusce elementum blandit odio ac suscipit. Quisque bibendum efficitur erat, in rutrum nunc sollicitudin sit amet. Aliquam congue leo quis dolor cursus, sed mollis lacus varius.",
    "Proin dignissim scelerisque arcu id rhoncus. Ut dui libero, vestibulum a justo consequat, facilisis scelerisque mi. Vestibulum varius purus erat, nec ultricies mi mollis commodo. Donec commodo vulputate molestie. Ut faucibus velit felis, vel efficitur nulla malesuada et. Nam id lorem diam. Ut sit amet ipsum at magna semper auctor id ac odio. Mauris et augue odio. Vivamus aliquet volutpat metus, vitae molestie nisl sagittis at. Fusce euismod mattis velit vitae iaculis. Maecenas id magna a enim vulputate congue nec sit amet ligula. Aenean at ante maximus, lobortis nibh nec, fermentum justo. Ut id neque ultrices, auctor dolor non, auctor odio. Curabitur pellentesque bibendum porta. Praesent enim nulla, placerat vel augue nec, dapibus suscipit enim. Ut et risus est.",
    "Donec maximus arcu a quam ullamcorper imperdiet. Sed consectetur condimentum rhoncus. Vestibulum facilisis, dui vitae semper pellentesque, magna nulla tristique libero, quis accumsan neque enim vel nunc. Quisque id rutrum dolor. Morbi convallis faucibus dui sed malesuada. Vivamus quis convallis ligula. Nulla facilisi.",
    "Nam consectetur fringilla magna, et fringilla purus auctor sit amet. Nullam vulputate nisl ut ante tincidunt, vitae accumsan nulla ornare. Sed rhoncus velit in interdum mattis. Sed ut volutpat odio. Maecenas eros ipsum, feugiat sit amet dolor sit amet, pulvinar feugiat urna. Integer feugiat iaculis ligula eu facilisis. Etiam neque nisl, molestie non elementum quis, tincidunt eget massa. Aliquam lobortis blandit risus pretium ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque, metus ut ornare blandit, leo augue tempor arcu, in pharetra eros risus id tortor.",
    "Nullam mattis maximus mauris, vitae ullamcorper felis. Nullam gravida lacinia massa, non elementum libero tincidunt eu. In mattis pharetra turpis, ut tincidunt nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum semper eros imperdiet diam ornare, in dictum diam egestas. Vivamus malesuada mattis dui, vel eleifend purus. Pellentesque mattis aliquam tincidunt. Vivamus tincidunt scelerisque lectus, quis faucibus mauris semper vestibulum. Suspendisse faucibus mauris ut urna ultricies condimentum. Mauris nunc erat, sagittis ut lobortis ac, aliquam ut eros. Etiam vestibulum ac sapien facilisis molestie. Sed vitae diam neque. Nam tincidunt metus vitae luctus dapibus.",
    "Pellentesque semper, nisi eu lacinia accumsan, velit lorem luctus quam, et posuere massa ligula semper nisi. Quisque nec metus aliquam, sollicitudin ligula sed, iaculis ligula. Sed sollicitudin metus libero, id gravida mauris bibendum ac. Sed imperdiet pulvinar sapien. Proin maximus, purus vitae rutrum semper, nunc libero malesuada lectus, feugiat aliquet lectus leo in eros. Maecenas ornare eu velit vel bibendum. Proin imperdiet nibh maximus, tempor quam id, consequat nibh. Donec et pretium libero, in molestie lorem. Nulla facilisi. Ut pharetra luctus feugiat. Integer a tortor bibendum, sollicitudin dolor eu, eleifend felis. Aenean venenatis justo id risus mollis tristique. Sed mollis bibendum quam a dignissim. Vestibulum blandit eget dolor sed consectetur.",
    "Quisque hendrerit vulputate hendrerit. Fusce at felis eget metus laoreet cursus placerat tempor neque. Aliquam sit amet ipsum id enim semper imperdiet ac non massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque eu elementum sapien. Sed urna enim, imperdiet quis elementum quis, tempor non ante. Nullam id eros at quam dapibus blandit non elementum nisi. Phasellus ullamcorper sagittis ultrices. In nisi urna, molestie eget iaculis sed, viverra a est.",
    "Donec nec dolor dolor. Suspendisse a erat ac quam maximus vehicula id pretium sem. Duis congue vitae urna sed mattis. Suspendisse finibus mollis turpis, eget sagittis nisi pulvinar ac. Suspendisse dictum turpis eu velit tincidunt tristique sit amet nec elit. Curabitur a commodo augue. Vestibulum leo elit, viverra vel nulla eu, mollis ultrices enim. Aenean elementum dignissim lacus, eu laoreet quam varius in. Aliquam dapibus, justo et sodales fermentum, ex urna tempus lectus, non vehicula turpis enim eleifend dui. Proin vitae condimentum tortor. In congue enim vel orci congue blandit."
]

const images = [
    "img/gal-1.jpeg",
    "img/gal-4.jpeg",
    "img/gal-5.jpeg",
    "img/gal-6.jpeg",
    "img/gal-8.jpeg",
    "img/gal-9.jpeg",
    "img/gal-11.jpeg",
    "img/gal-13.jpeg",
    "img/gal-14.jpeg",
    "img/house-1.jpeg"
]

end_marker = document.querySelector(".end-marker")

function loadRandomSection(entries) {
    randomIndex = Math.floor(Math.random() * 10)
    let section = document.createElement("section")
    let p = document.createElement("p")
    p.innerText = paragraphs[randomIndex]
    let img = document.createElement("img")
    img.src = images[randomIndex]
    section.appendChild(p)
    section.appendChild(img)
    document.querySelector("main").appendChild(section)
}

let infiniteLoadObserver = new IntersectionObserver(loadRandomSection, {rootMargin: "400px"})

infiniteLoadObserver.observe(end_marker)

loadRandomSection()
loadRandomSection()
loadRandomSection()
