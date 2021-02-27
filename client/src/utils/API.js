import axios from "axios";
const RANDOMURL = "https://randomuser.me/api/?results=30";;

function search() {
    return axios.get(RANDOMURL);
}
export default search;