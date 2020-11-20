const axios = require("axios");

const request = async () => {
  const response = await axios.default.post(
    "https://fcm.googleapis.com/fcm/send",
    {
      to:
        "c-n-ohS08ZyU5IUcBl-4YO:APA91bEbpfbcOgz7IYNUq_2DFVDy6CVycEjhzMZaa-14UROB6NcWdfTwghK2ctCgfDzxf9hY6k-CjJ4BS4QbR_LmkAReL00--8OmW2kRpqKVGmSiQhotY_oB0-rrBRrgbb8okjmX2P8Y",
      collapse_key: "type_a",
      notification: {
        body: "Body",
        title: "Title",
        click_action: "https://palashg.dev/blog/FEjUFuqyEOC9qs22V1NH"
      }
    },
    {
      headers: {
        authorization:
          "key=AAAA--u_uYc:APA91bEvq8iDwAt_xJwfx4E94__1MQ3aIs0amKvSvI-MljrTC2WbWx7qpoA439ytQf8gbLfQizHgt0mX1cXqZgy51JJY14bHFvY_2gjdEOaAO3Tdn-LxK3VJq9-WzCHpL_34d4YxLIHc",
        "content-type": "application/json"
      }
    }
  );

  console.log(response.status);
};

request();
