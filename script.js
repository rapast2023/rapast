

var members = [
["Jacky Akoka", "CNAM", "France"],
["Paolo Atzeni", "Universita' Roma Tre", "Italy"],
["Stefano Ceri", "Politecnico di Milano", "Italy"],
["Karen Davis", "Miami University", "United States"],
["Gill Dobbie", "University of Auckland", "New Zealand"],
["Xavier Franch", "Universitat Politècnica de Catalunya", "Spain"],
["Ulrich Frank", "University of Duisburg-Essen", "Germany"],
["Aditya Ghose", "University of Wollongong", "Australia"],
["Giancarlo Guizzardi", "Free University of Bozen-Bolzano, Italy and University of Twente, The Netherlands", ""],
["Jennifer Horkoff", "University of Gothenburg", "Sweden"],
["Matthias Jarke", "RWTH Aachen University", "Germany"],
["Paul Johannesson", "Royal Institute of Technology", "Sveden"],
["Alberto Laender", "Universidade Federal de Minas Gerais", "Brazil"],
["Steve Liddle", "BYU", "United States"],
["Sebastian Link", "University of Auckland", "New Zealand"],
["Heinrich C. Mayr", "Alpen-Adria-Universität Klagenfurt", "Austria"],
["John Mylopoulos", "University of Toronto", "Canada"],
["Antoni Olivé", "Universitat Politècnica de Catalunya", "Spain"],
["Oscar Pastor Lopez", "Universidad Politécnica de Valencia", "Spain"],
["Jeffrey Parsons", "Memorial University of Newfoundland", "Canada"],
["Colette Rolland", "Université Paris 1 Panthéon – Sorbonne", "France"],
["Motoshi Saeki", "Tokyo Institute of Technology", "Japan"],
["Peretz Shoval", "Ben-Gurion University", "Israel"],
["Pnina Soffer", "University of Haifa", "Israel"],
["Veda Storey", "GSU", "United States"],
["Juan-Carlos Trujillo", "University of Alicante", "Spain"],
["Isabelle Wattiau", "ESSEC & CNAM", "France"],
["Carson Woo", "University of British Columbia", "Canada"],
["Eric Yu", "University of Toronto", "Canada"]
]

var result = "";

members.forEach((item, index)=>{
    name = item[0];
    univname = item[1];
    country = item[2];
    var template = `<div class="col-lg-4 col-md-6">
    <div class="speaker" data-aos="fade-up" data-aos-delay="100">
    <div class= "details">
        <h3>${name}</h3>
        <p>${univname}, ${country}</p>
    </div>
    </div>
    </div>`
    result += template + "\n";
});

console.log(result);