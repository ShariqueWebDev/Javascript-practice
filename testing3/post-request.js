const url = 'https://dummyjson.com/products/add';
const user = {

  title: "Sharique Aslam",
  body: "The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.",
  userId: 153,
  tags: ["mystery", "american"],
  reactions: 6,
};
const PostDataRequest = () => {
  let sendResponse = fetch(url, {
    method: "POST",
    headers:{'Content-Type':"application/json"},
    body: JSON.stringify(user)
});
sendResponse.then((p) => console.log("Request has been sent: ", p))
    .catch((err) => {
      console.log("some error occurred!", err);
    });
};

PostDataRequest()
