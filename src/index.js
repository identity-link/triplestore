import { DataFactory, Writer } from 'n3'
const { namedNode, quad, literal } = DataFactory

const writer = new Writer(process.stdout, {
  format: 'N-Quads',
  end: false,
  prefixes: { c: 'http://example.org/cartoons#' }
})
writer.addQuad(
  namedNode('http://example.org/cartoons#Tom'),
  namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
  namedNode('http://example.org/cartoons#Cat'),
  namedNode('http://example.org/some-graph')
)
writer.addQuad(
  quad(
    namedNode('http://example.org/cartoons#Tom'),
    namedNode('http://example.org/cartoons#name'),
    literal('Tom'),
    namedNode('http://example.org/some-graph')
  )
)
writer.end()
