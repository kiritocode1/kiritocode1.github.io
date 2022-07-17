
// import { useEffect as ue } from "react"; 




const get_seconds = () => {
  const d = new Date();
  return 60 - d.getSeconds();
};

const get_minutes = () => {
  const d = new Date();
  return 60 - d.getMinutes();
};
const get_hours = () => {
  const d = new Date();
  return 24 - d.getHours();
};
const get_days = () => {
  const d = new Date();
  return 38 - d.getDate();
};
const countdown= [get_days, get_hours, get_minutes, get_seconds];

export default countdown; 
