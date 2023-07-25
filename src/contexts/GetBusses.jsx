
// get data by searching
const getBusses = async (source, destination) => {
    const url = `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${source}&destination=${destination}`
    const res = await fetch(url);
    const result = await res.json();
    return result;
}

export { getBusses }