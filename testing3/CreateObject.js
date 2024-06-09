const products = [
  {
    category: "women",
    sub_category: [
      {                             // SUB_CATEGORY WOULD BE MULTIPLE
        name: "kamiz",
        sub_products: [
          {
            name: "z-shirt",
            link: "zshirt.com",
          },
        ],
      },
    ],
  },
  {
    category: "men",
    sub_category: [
      {
        name: "paint",
        sub_products: [
          {
            name: "diesel",
            link: "diesel.com",
          },
        ],
      },
    ],
  },
];

const mapLoop = products.map((i)=>{
   return i.sub_category.map((j)=>{
       return j.sub_products.map((k)=>{
           return k.link
        })
    })
})

console.log(mapLoop);
