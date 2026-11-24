import requestImage from "../assets/request-Image.png";
import gymImage from "../assets/gym-Image.png";
import bakerImage from "../assets/bakery-Image.png";
const projects= [

    {
        id:"PROJECT_001",
        date:"2026",
        name:"Gym Logger",
        shortDescription:"A simple record keeper for gym sessions",
        languages:["HTML·","CSS·","JavaScript"],
        image:gymImage,
        readme:"https://github.com/Maurice-Hill/Gym-Logger#readme",
        github:"https://github.com/Maurice-Hill/Gym-Logger",
        link:"https://gymlogger-rust.vercel.app/"
    },

    {
        id:"PROJECT_002",
        date:"2026",
        name:"Request Tracker",
        shortDescription:"A client-facing request management application",
        languages:["HTML·","CSS·","JavaScript"],
        image:requestImage,
        readme:"https://github.com/Maurice-Hill/Request-Tracker#readme",
        github:"https://github.com/Maurice-Hill/Request-Tracker",
        link:"https://request-tracker-customer-side.vercel.app/"
    },

    {
        id:"PROJECT_003",
        date:"2026",
        name:"Carmen The Baker",
        shortDescription:"Redesign of a small custom-order bakery to improve its content organization, usability, and presentation",
        languages:["HTML·","CSS·","JavaScript"],
        image:bakerImage,
        readme:"https://github.com/Maurice-Hill/Bakery-Redesign#readme",
        github:"https://github.com/Maurice-Hill/Bakery-Redesign",
        link:"https://bakery-redesign.vercel.app/"
    }


];

export default projects;
