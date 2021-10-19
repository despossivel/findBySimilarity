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






const alphabet = [...Array(26)].map((q, w) => String.fromCharCode(w + 97))

const ARRAYDATA = [{ name: "Abff" }, { name: "Ba" }, { name: "C" },]

const RESULTADO = alphabet.map(letter => findBySimilarity(ARRAYDATA, letter, ['name']))
