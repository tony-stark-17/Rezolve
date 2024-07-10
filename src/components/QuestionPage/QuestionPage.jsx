import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Icon } from '@iconify/react';

import COET from '../../assets/coet.svg'
import Logo from '../../assets/mulearn.svg'
import Rezolve from '../../assets/rezolve.svg'


import classes from './QuestionPage.module.css';

const QuestionPage = () => {
    return(
        <div className={`bg-slate-100 flex flex-col w-screen h-screen items-center py-5`}>
            <div className={`bg-slate-100 ${classes['header']}`}>
                    <img src={COET} alt="COET" className={classes['college-logo']}/>
                    <img src={Rezolve} alt="Rezolve" className={classes['logo']}/>
                    <img src={Logo} alt="Logo" className={classes['mu-logo']}/>
            </div>
            <div className={classes['question']}>
                What is your name?
            </div>
            <Input label="Answer" className="w-[50%] mt-20" size="lg" classNames={{
                inputWrapper: 'bg-slate-200 active:bg-slate-200 focus-within:!bg-slate-200',
            }} endContent={
                <button className="mb-2">
                    <Icon icon="akar-icons:arrow-right" className="text-[#fc6f09] hover:text-[#7048ff] hover:scale-125 transition-all ease-in-out" width="20" height="20"/>
                </button>
            }/>
        </div>
    )
}

export default QuestionPage;