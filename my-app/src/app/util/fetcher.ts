
const fetcher =async(url:RequestInfo | URL) =>{

    const res = await fetch(url);
    if(!res.ok){
      const msg = "An error occurred while fetching data "
      const info = res.status;
      const error = new Error(msg);
      console.error(info,status);
      throw error;
    }
    return res.json()
  }

  export default fetcher