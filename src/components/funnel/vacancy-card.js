import React, {useEffect} from "react";
import './funnel.scss'
import {openVacancies} from "./data";
import Slider from "react-slick";

const data = openVacancies;

const cards = data.map( item => {

    const {id, title, step, nameStep} = item;

    return(
<div key={id} className={"card"}>
    <div>
        <h2 className={"funnel-title"}>{title}</h2>
    </div>
    <div className={"vacancy"}>
        <div className={"vacancy-item vacancy-column"} >
            <p>Vacancy</p>
            <p className={"vacancy-status"}>Open</p>
        </div>
        <img className={"vacancy-column"} src={require("../../assets/funnel-image/devider.png")} alt={""}/>
        <div className={"vacancy-column"}>
            <div className={"vacancy-item"} >Step {step}</div>
            <div className={"vacancy-item name-step"} >{nameStep}</div>
        </div>
    </div>
</div>

    )
})

export default class Vacancy extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className={"about-vacancies"} >
                <Slider {...settings}>
                    {cards}
                </Slider>
            </div>
        );
    }
}

//
// const Vacancy = () => {
//         return (
//
//                         <div>
//                             <h2 className={"funnel-title"}>System Administrator</h2>
//                         </div>
//                         <div className={"vacancy"}>
//                             <div className={"vacancy-item vacancy-column"} >
//                                 <p>Vacancy</p>
//                                 <p className={"vacancy-status"}>Open</p>
//                             </div>
//                             <img className={"vacancy-column"} src={require("../../assets/funnel-image/devider.png")} alt={""}/>
//                             <div className={"vacancy-column"}>
//                                 <div className={"vacancy-item"} >Step 1</div>
//                                 <div className={"vacancy-item name-step"} >Resume Screening</div>
//                             </div>
//                         </div>
//                     </div>
//     )
// }
//
// export default Vacancy;



