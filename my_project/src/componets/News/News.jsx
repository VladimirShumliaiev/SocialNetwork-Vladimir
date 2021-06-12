import React from "react";
import style from './News.module.css';
import Legioners from "./army/Legioners/Legioners";
import {BrowserRouter, Route} from "react-router-dom";
import NewsRome from "./army/NewsRome/NewsRome";
import Ships from "./army/Ships/Ships";
import Connica from "./army/Connica/Connica";
import Army from "./army/Army";
import AvaNews from "./ComponentsNews/AvaNews/AvaNews";
import NavBarNews from "./ComponentsNews/NavBarNews/NavBarNews";


const News = () => {
    return (
        <BrowserRouter>
            <div className={style.item}>
                <div className={style.varriors}>
                    <Army/>
                </div>

                <div className={style.newsCont}>
                    {/*<AvaNews />*/}
                    <Route path={'/newsRome'} component={NewsRome}/>
                    <Route path={'/connica'} component={Connica}/>
                    <Route path={'/ships'} component={Ships}/>
                    <Route path={'/legioners'} component={Legioners}/>
                    {/*<NavBarNews id={'/newsRome'} name={'NewsRome'}/>*/}
                    {/*<NavBarNews id={'/legioners'} name={'NewsRome'}/>*/}
                </div>
            </div>
        </BrowserRouter>
    )
}

export default News;
