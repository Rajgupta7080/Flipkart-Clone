export default function useAPICall() {
  const baseUrl = `http://localhost:3005`;
  
  const postData = async (url, todo) => {
    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async (url) => {
    try {
      const res = await fetch(url);
      if (res.status === 200) {
        const data = res.json();
        return data;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDataWithTotal = async (url) => {
    try {
      const res = await fetch(url);
      // console.log(res)
      // console.log(res.headers.get('X-Total-Count'), "total")
      if (res.status === 200) {
        const data = await res.json();
        // console.log(data)
        return [res.headers.get('X-Total-Count'),data];
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const patchRequest = async (url,item) => {
    try {
      const res = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      // console.log(data)
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  async function deleteData(url) {
    try {
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      // console.log(res)
      const data = await res.json();
      // console.log(data)
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return { baseUrl, postData, getData, patchRequest, deleteData, getDataWithTotal };
}
