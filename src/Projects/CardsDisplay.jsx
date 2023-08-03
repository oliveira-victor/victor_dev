import Card from "./Card"

import html from './assets/logo-html.svg'
import css from './assets/logo-css.svg'
import javascript from './assets/logo-javascript.svg'
import react from './assets/logo-react.svg'
import gulp from './assets/logo-gulp.svg'
import sass from './assets/logo-sass.svg'
import styledComponents from './assets/logo-styledComponents.png'

const CardsDisplay = () => {

    return (
        <>
            <Card 
                link="https://vfostudio.vercel.app/"
                id="card_img1" 
                cardTitle="VFO Studio" 
                techs1={html}
                techs2={javascript}
                techs3={sass}
                techs4={gulp}
                text="This is an art and design studio page created by me, where I promote my services and post my artworks. The idea is to be simple, yet artistic and inspiring, with attention to the details. Languages available: English and Portuguese."  
            />
            <Card 
                link="https://vfostudio.vercel.app/"
                id="card_img2" 
                cardTitle="Guess The Number" 
                techs1={html}
                techs2={css}
                techs3={javascript}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ipsum ac lacus egestas rutrum ac eu eros. Proin ac tempus tortor. Morbi quam turpis, lobortis nec diam id, porta condimentum ante. Ut elementum placerat consequat. Integer luctus ipsum et tellus luctus vehicula."
            />
            <Card 
                link="https://vfostudio.vercel.app/"
                id="card_img3" 
                cardTitle="Bear Adventure" 
                techs1={react}
                techs2={styledComponents}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ipsum ac lacus egestas rutrum ac eu eros. Proin ac tempus tortor. Morbi quam turpis, lobortis nec diam id, porta condimentum ante. Ut elementum placerat consequat. Integer luctus ipsum et tellus luctus vehicula."
            />
            <Card 
                link="https://vfostudio.vercel.app/"
                id="card_img4" 
                cardTitle="Fortune Cookies" 
                techs1={html}
                techs2={css}
                techs3={javascript}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ipsum ac lacus egestas rutrum ac eu eros. Proin ac tempus tortor. Morbi quam turpis, lobortis nec diam id, porta condimentum ante. Ut elementum placerat consequat. Integer luctus ipsum et tellus luctus vehicula."
            />
            <Card 
                link="https://vfostudio.vercel.app/"
                id="card_img5" 
                cardTitle="To Do List" 
                techs1={html}
                techs2={css}
                techs3={javascript}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ipsum ac lacus egestas rutrum ac eu eros. Proin ac tempus tortor. Morbi quam turpis, lobortis nec diam id, porta condimentum ante. Ut elementum placerat consequat. Integer luctus ipsum et tellus luctus vehicula."
            />
        </>
    )
}

export default CardsDisplay