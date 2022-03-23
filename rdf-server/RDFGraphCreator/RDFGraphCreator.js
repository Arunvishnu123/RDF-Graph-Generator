function RDFGraphGenerator(node0, node1, node2,propertyName,comment,node1num,node2num) {
    
    let string1 = `qa:node${node1num}  rdfs:label \"`
    let string2 = `qa:${node1} rdfs:label \"`
    let string3 = `qa:node${node2num} rdfs:label \"`
    let string4 = `qa:node${node1num} qa:${node1} qa:node${node2num} . \n`

    let rdfGraph1 = string1.concat(node0);
    let rdfGraph2 = string2.concat(node1);
    let rdfGraph3 = string3.concat(node2);
    let rdfGraph4 = string4

    let t = ""
    let fcomment = t.concat("#")
    fcomment = fcomment + comment + "\n"
    let frdfGraph1 = rdfGraph1.concat("\" .\n")
    let frdfGraph2 = rdfGraph2.concat("\" .\n")
    let frdfGraph3 = rdfGraph3.concat("\" .\n")
    let test = fcomment + frdfGraph1 + frdfGraph2 + frdfGraph3 + string4 + "\n"

    return test

}

exports.RDFGraphGenerator = RDFGraphGenerator;