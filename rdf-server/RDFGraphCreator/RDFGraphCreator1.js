function RDFGraphGeneratorf() {
    let rdf1 = "\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> . \n"
    let rdf2 = "@prefix xml: <http://www.w3.org/XML/1998/namespace/> . \n"
    let rdf3 = "@prefix xs: <http://www.w3.org/2001/XMLSchema#> . \n"
    let rdf4 = "@prefix xsd: <http://www.w3.org/2001/XMLSchema#> . \n"
    let rdf5 = "@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> . \n"
    let rdf6 = "@prefix skos: <http://www.w3.org/2004/02/skos/core#> . \n"
    let rdf7 = "@prefix qa: <http://qanswer.eu/> . \n"
    let rdf8 = "@prefix wdt: <http://www.wikidata.org/prop/direct/> . \n"
    
    let intro = rdf1 + rdf2 + rdf3 + rdf4 + rdf5 + rdf6 + rdf7 + rdf8 

    let final = intro + "\n"

    return final
    
}

exports.RDFGraphGeneratorf = RDFGraphGeneratorf;