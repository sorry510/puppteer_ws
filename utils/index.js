function getDate(format='Y-m-d H:i:s') {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()
  const hour = now.getHours()
  const min = now.getMinutes()
  const second = now.getSeconds()
  return format.replace('Y', year)
    .replace('m', month)
    .replace('d', day)
    .replace('H', hour)
    .replace('i', min)
    .replace('s', second)
}

// 随机min-max之间的数字
const randInt = (min, max)=> {
	if(!max) {
		max = min
		min = 0
	}
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min)) + min // 不含最大值，含最小值
	// return Math.floor(Math.random() * (max - min + 1)) + min // 含最大值，含最小值 
}

module.exports = {
	getDate,
  randInt,
}