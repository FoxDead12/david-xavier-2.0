import { motion, Variants } from 'framer-motion';
import React from 'react'

type Props = {
    t: any,
    locale: string
}

const experiencesArrayPT = [

    {
        left: true,
        img: 'klab-logo.png',
        cargo : 'Funcionário de TI',
        empresa: 'Kreator Lab',
        localizacao: 'Eslovênia',
        actual: "Atualmente",
        dataInicio: new Date("May 1, 2019"),
        dataFim: new Date("July 1, 2019"),
    },
    {
        left: false,
        img: 'nos_opengraph.png',
        cargo : 'RPA Developer',
        empresa: 'NOS',
        localizacao: 'Porto',
        actual: "Atualmente",
        dataInicio: new Date("January 1, 2020"),
        dataFim: new Date("March 1, 2020"),
    },
    {
        left: true,
        img: 'continente.jpeg',
        cargo : 'Gestor de Caixa',
        empresa: 'Continente',
        localizacao: 'Porto',
        actual: "Atualmente",
        dataInicio: new Date("October 1, 2020"),
        dataFim: new Date("October 1, 2021"),
    },
    {
        left: false,
        img: 'arkis.png',
        cargo : 'Desenvolvedor de Aplicativos Web',
        empresa: 'Arkis',
        localizacao: 'Porto',
        actual: "Atualmente",
        dataInicio: new Date("October 1, 2021"),
        dataFim: new Date("January 1, 2022")
    },
    {
        left: true,
        img: 'mozantech.jpeg',
        cargo : 'Node Js Back-End Developer',
        empresa: 'Mozantech',
        localizacao: 'Porto',
        actual: "Atualmente",
        dataInicio: new Date("March 1, 2022"),
        dataFim: new Date("July 1, 2022")
    },
    {
        left: false,
        img: 'cloudware.jpeg',
        cargo : 'Programador',
        empresa: 'Cegid Cloudware',
        localizacao: 'Porto',
        actual: "Atualmente",
        dataInicio: new Date("February 1, 2023"),
    }
];

const experiencesArrayEN = [

    {
        left: true,
        img: 'klab-logo.png',
        cargo : 'IT Employee',
        empresa: 'Kreator Lab',
        localizacao: 'Slovenia',
        actual: "Current",
        dataInicio: new Date("May 1, 2019"),
        dataFim: new Date("July 1, 2019"),
    },
    {
        left: false,
        img: 'nos_opengraph.png',
        cargo : 'RPA Developer',
        empresa: 'NOS',
        localizacao: 'Porto',
        actual: "Current",
        dataInicio: new Date("January 1, 2020"),
        dataFim: new Date("March 1, 2020"),
    },
    {
        left: true,
        img: 'continente.jpeg',
        cargo : 'Cash Manager',
        empresa: 'Continente',
        localizacao: 'Porto',
        actual: "Current",
        dataInicio: new Date("October 1, 2020"),
        dataFim: new Date("October 1, 2021"),
    },
    {
        left: false,
        img: 'arkis.png',
        cargo : 'Web Application Developer',
        empresa: 'Arkis',
        localizacao: 'Porto',
        actual: "Current",
        dataInicio: new Date("October 1, 2021"),
        dataFim: new Date("January 1, 2022")
    },
    {
        left: true,
        img: 'mozantech.jpeg',
        cargo : 'Node Js Back-End Developer',
        empresa: 'Mozantech',
        localizacao: 'Porto',
        actual: "Current",
        dataInicio: new Date("March 1, 2022"),
        dataFim: new Date("July 1, 2022")
    },
    ,
    {
        left: false,
        img: 'cloudware.jpeg',
        cargo : 'Developer',
        empresa: 'Cegid Cloudware',
        localizacao: 'Porto',
        actual: "Atualmente",
        dataInicio: new Date("February 1, 2023"),
    }
];

export default function Experiences ({t, locale}: Props) {

    const LoadExperiences = () => {

        if(locale === "pt") {

            return experiencesArrayPT.map((el, n) => {

                return (
                    <Experience code={locale} key={n} actualText={el.actual} left={el?.left} img={el?.img} cargo={el?.cargo} empresa={el?.empresa} localizacao={el?.localizacao} dataInicio={el?.dataInicio} dataFim={el?.dataFim || undefined} />
                )
            })
        }
        else {

            return experiencesArrayEN.map((el, n) => {

                return (
                    <Experience code={locale} key={n} actualText={el.actual} left={el?.left} img={el?.img} cargo={el?.cargo} empresa={el?.empresa} localizacao={el?.localizacao} dataInicio={el?.dataInicio} dataFim={el?.dataFim || undefined} />
                )
            })
        }
    }

    return (
        <section id='experiences' className='relative z-10'>

            <div className='absolute w-full h-full bg-blue-900 experience-container'></div>
            <div className='relative w-[90%] m-auto 3xl:w-[70%] flex flex-col justify-between p-4 z-10'>
                <h1 className='text-white text-lg italic'>{"<"}{t("experiences.section")}{">"}</h1>
                <div className='relative w-[90%] m-auto 3xl:w-[90%] flex flex-col items-center justify-center my-24'>

                    <div className='relative w-full flex flex-col items-center justify-center py-4'>

                        <div className='absolute -right-8 md:right-auto  h-full w-4 bg-red-400 rounded-full'></div>
                        {LoadExperiences()}
                    </div>

                </div>
                <h1 className='text-blue-900 text-lg italic'>{"</"}{t("experiences.section")}{">"}</h1>
            </div>

        </section>
    )
}

interface IExperience {

    code: string;
    left: boolean;
    img: string;
    cargo: string;
    empresa: string;
    localizacao: string;
    dataInicio: Date;
    dataFim: Date;
    actualText: string;
}

const Experience = (props: IExperience) => {

    const left: Variants = {
        initial: {
            opacity: 0,
            x: -200
        },
        animate: {
            opacity: 1,
            x: 0
        }

    }

    const right = {
        initial: {
            opacity: 0,
            x: 200
        },
        animate: {
            opacity: 1,
            x: 0
        }
    }

    return (
        <motion.div

        initial={"initial"}
        whileInView={"animate"}
        variants={props.left === true? left: right}

        className={`relative flex-none w-full md:w-[350px] max-w-[350px]  bg-blue-800 opacity-100 md:opacity-70 hover:opacity-100 my-4 md:m-0 md:mx-4 p-4 rounded-md shadow-md  ${props.left === true ? 'md:mr-[450px]' : 'md:ml-[450px] md:mr-4'}`}>

            {/* Seta */}
            <div className={`absolute invisible md:visible m-auto ${props.left === true ? '-right-2' : '-left-2' } top-0 bottom-0 w-4 h-4 rotate-45 bg-blue-800 `}></div>
            <div className={`absolute visible md:invisible m-auto -right-2 top-0 bottom-0 w-4 h-4 rotate-45 bg-blue-800 `}></div>



            {/* Bola */}
            <div className={`absolute invisible md:visible m-auto ${props.left === true ? '-right-[50px]' : '-left-[50px]' } top-0 bottom-0 w-4 h-4 rounded-full bg-white border-4 border-gray-900 `}></div>
            <div className={`absolute visible md:invisible m-auto -right-8 top-0 bottom-0 w-4 h-4 rounded-full bg-white border-4 border-gray-900 `}></div>

            {/* Year */}
            <div className={`absolute invisible md:visible m-auto flex items-center -right-[60px] -top-20 bottom-0  font-bold text-blue-900 rotate-0 ${props.left === true ? '-right-[3.90rem]' : '-left-[3.90rem]'}`}>
                <h5 className='rotate-90 '>{props.dataInicio.getFullYear()}</h5>
            </div>

            <div className={`absolute visible md:invisible m-auto flex items-center -right-[2.80rem] -top-20 bottom-0  font-bold text-blue-900 rotate-0 `}>
                <h5 className='rotate-90 '>{props.dataInicio.getFullYear()}</h5>
            </div>

            <div className='flex items-center justify-center'>
                <img src={"/img/logos/" + props.img} alt={props.empresa} className={"w-[100px] h-[100px] bg-white rounded-full object-contain shadow-md"} />
            </div>

            <div className='flex flex-col items-start mt-8 mb-4'>
                <h1 className='text-white text-base md:text-xl tracking-wider'>{props.cargo}</h1>
                <h3 className='text-white text-sm md:text-base my-3'>{props.empresa}, {props.localizacao}</h3>
                {
                    props.dataFim ?
                    <p  className='text-gray-300 text-sm md:text-base italic capitalize'>{new Intl.DateTimeFormat(props.code, {month: 'long'}).format(props.dataInicio) + "-" + props.dataInicio.getFullYear()} / {new Intl.DateTimeFormat(props.code, {month: 'long'}).format(props.dataFim) + "-" + props?.dataFim.getFullYear()}</p>
                    :
                    <p  className='text-gray-300 text-sm md:text-base italic capitalize'>{new Intl.DateTimeFormat(props.code, {month: 'long'}).format(props.dataInicio) + "-" + props.dataInicio.getFullYear()} / <span className='font-bold'>{props?.actualText}</span></p>

                }
            </div>



        </motion.div>
    )
}
