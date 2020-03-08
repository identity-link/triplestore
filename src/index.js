// https://github.com/rdfjs/N3.js#storing
import { DataFactory, Writer } from 'n3'

const { namedNode, literal, defaultGraph, quad } = DataFactory
const myQuad = quad(
  namedNode('https://ruben.verborgh.org/profile/#me'),
  namedNode('http://xmlns.com/foaf/0.1/givenName'),
  literal('Ruben', 'en'),
  defaultGraph()
)
console.log(myQuad.subject.value) // https://ruben.verborgh.org/profile/#me
console.log(myQuad.object.value) // Ruben
console.log(myQuad.object.datatype.value) // http://www.w3.org/1999/02/22-rdf-syntax-ns#langString
console.log(myQuad.object.language) // en

const writer = new Writer({ prefixes: { c: 'http://example.org/cartoons#' } })
writer.addQuad(
  namedNode('http://example.org/cartoons#Tom'),
  namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
  namedNode('http://example.org/cartoons#Cat')
)
writer.addQuad(
  quad(
    namedNode('http://example.org/cartoons#Tom'),
    namedNode('http://example.org/cartoons#name'),
    literal('Tom')
  )
)

writer.end((error, result) => console.log(result))
