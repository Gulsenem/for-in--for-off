const personen=
{
    id: [1, 2, 3, 4],
    vorname: ["Max", "Alex", "Muller", "Angelina"],
    nachname: ["Cornelia", "Mustermann", "Musterfrau", "Thomas"],
    alter: [15, 24, 36, 54]
}

function Person(id, vn, nm, alt)
{
    this.id = id;
    this.vorname = vn;
    this.nachname = nm;
    this.alter = alt;
}

/*Beispiel variant
for (let i=0; i<Object.keys(personen).length; i++)
{
    const spalte = document.createElement("div");
    spalte.classList.add("spalte");

    const div2 = document.createElement("div");
    div2.innerHTML = Object.keys(personen)[i];
    spalte.appendChild(div2);

    const div3 = document.createElement("div");
    div3.innerHTML = personen[Object.keys(personen)[i]];
    spalte.appendChild(div3);
    
    document.body.appendChild(spalte);
}
*/


//Erste variant

for(x in personen)
{
    const spalte = document.createElement("div");
    spalte.classList.add("spalte");

    const div2 = document.createElement("div");
    div2.innerHTML = x;
    spalte.appendChild(div2);

    let arr = personen[x];
    for(y of arr)
    {
        const div3 = document.createElement("div");
        div3.innerHTML = y;
        spalte.appendChild(div3);
    }

    document.body.appendChild(spalte);
}

const arrayPerson=[];
for (let i=0; i<personen.id.length; i++)
{
    let id = personen.id[i];
    let vorname = personen.vorname[i];
    let nachname = personen.nachname[i];
    let alter = personen.alter[i];

    const P = new Person(id, vorname, nachname, alter);
    arrayPerson.push(P);
}

console.log(arrayPerson);
