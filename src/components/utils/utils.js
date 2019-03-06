import axios from 'axios'

const utils = {
  axiosMethod:(config)=>{
    axios({
      method:config.method,
      url:config.url,
      params:config.params?config.params:null,
      data:config.data?config.data:null,
    }).then(config.callback).
    catch(config.catch?config.catch:()=>{})
  }
}
export default utils
//这位是来帮忙的，省得每次都要吧axios({那一堆写全
//真说有用也没什么大用，但是还是要有的
