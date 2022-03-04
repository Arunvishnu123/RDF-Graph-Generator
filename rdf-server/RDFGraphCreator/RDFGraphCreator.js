function RDFGraphGenerator(node0,node1,node2,comment,fileName)
{

    let string1 = "qa:node1  rdfs:label \"" 
    let string2 = "qa:language skos:altLabel \""
    let string3 = "qa:node2 rdfs:label \""
    let string4 = "qa:node1 qa:language qa:node2 "
    
    let rdfGraph1= string1.concat(node0);
    let rdfGraph2= string2.concat(node1);
    let rdfGraph3= string3.concat(node2);
    let rdfGraph4=string4

    let frdfGraph1 = rdfGraph1.concat("\"")
    let frdfGraph2 = rdfGraph2.concat("\"")
    let frdfGraph3 = rdfGraph3.concat("\"")
    let test ={
        node0:frdfGraph1,
        node1:frdfGraph2,
        node2:frdfGraph3,
        node3:string4,
        comment:comment,
        fileName:fileName
    }

    return test
    
    }
    
exports.RDFGraphGenerator = RDFGraphGenerator;