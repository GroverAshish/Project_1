async function sip_ctr(data) {
  // Calculation of Total Return
  let months = data.period * 12
  let rate = data.rate / 12
  let monInvest = data.monInvest
  let Return = 0
  let sum = 0
  const graph = []

  for (let i = 1; i <= months; i++) {
    sum = monInvest * Math.pow(1 + rate / 100, i)
    Return += sum
      let obj = {
        month: i,
        return: Return
    }
    graph.push(obj)

  }
  data.return = Return
  delete(data.monInvest)
  data.Graph = graph
  return data

}
module.exports = {
  sip_ctr
};
