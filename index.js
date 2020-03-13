const normalize = str => {
    return String(str)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, "")
  }

const findBySimilarity = (list = [], strings = '', keys = [], terms = normalize( strings ).toLowerCase().split(' ')) => {
    return list
      .filter(el => terms
      .some(t => keys
      .some(k => normalize( el[ k ] ).toLowerCase().includes( t ) ) ) )
  }
