/* eslint-disable no-unused-vars */
import axios from "axios";
import EmployeeContainer from "../components/EmployeeContainer";
const RANDOMURL = "https://randomuser.me/api/?results=30";;

function search() {
    return axios.get(RANDOMURL);
}
export default search;