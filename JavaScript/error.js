async function fetchData() {
  try {
    const data = await Promise.reject("Error occured");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
fetchData();
