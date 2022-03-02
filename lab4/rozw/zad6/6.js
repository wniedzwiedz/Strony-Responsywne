
fetch('http://localhost:3000/users')
    .then(response => response.json())

    .then(data => {
        console.log(data)

        var avg = 0

        data.forEach(user => {
            var len = user.name.length;
            user.name = user.name + len;
            avg += user.age
        });

        avg = avg / data.length;
        console.log(data);
        
        data.forEach(element => {
            var person = document.createElement("div");
            person.innerHTML = element.name + " - " + element.age + " avg: " + avg;
            document.body.appendChild(person);

        })
        var section = document.createElement("section");
        data.filter((el) => {
            return el.name.includes("r");
        }).forEach(element => {
            var withR = document.createElement("p");
            withR.innerHTML = element.name + "-" + element.age;
            section.appendChild(withR);
        })
        data.sort(function (a, b) {
            return a.age > b.age;
        });
        var youngest = document.createElement("div");
        youngest.innerHTML = data[3].name + "-" + data[3].age;
        var eldest = document.createElement("div");
        eldest.innerHTML = data[data.length - 2].name + "-" + data[data.length - 2].age;;
        section.appendChild(youngest);
        section.appendChild(eldest);
        document.body.appendChild(section);
    })
