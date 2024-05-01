
    const fetchData = async () => {
      const res = await fetch("datas.json");
      const data = await res.json();
      if (data) {
      }
      
      console.log(data);
      // return data;
    };
    // fetchData()

    let obj = {
      name: "sharique",
      father: "aslam",
      mother: "ruskhsana",
      brother: "tarique",
      fillVal: null,
      undefinedVal: undefined,
    };

    const newObj = Object.entries(obj)
    console.log(newObj);

    const filterObj = newObj.filter(([i, item])=>item != undefined || null)
    console.log(filterObj);
    
    const returnObj = Object.fromEntries(filterObj)
    console.log(returnObj);

    const users = [
      {
        name:"abc",
        id:1
      },
      {
        name:"pqr",
        id: 2
      },
      {
        name:"stu",
        id: 2
      },
      {
        name:"xyz",
        id: 3
      },
    ]  

    const filterUser = users.find((user)=>{
        return user.id === 2;
      })
    console.log(filterUser);
    

    const myUser = users.filter((user)=>{
        return user.id === 2;
    })

    console.log(myUser);

  
