function asincrona(callback) {
  setTimeout(function () {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (error) {
      callback(error, null);
    }
  }, 1000);
}

asincrona(function (error, data) {
  if (error) {
    console.error("tenemos un error");
    console.error(error);

    return false;
  }

  console.log("todo ha ido bien", data);
});
